import { NextResponse } from "next/server";
import {writeFile} from  "fs/promises"
import path from "path";

// importamos cloudinary
import {v2 as cloudinary} from 'cloudinary';
import { rejects } from "assert";
          
cloudinary.config({ 
  cloud_name: 'dxvmowx1w', 
  api_key: '899469123894434', 
  api_secret: 'G8MHacrWlbbdEJEeZXT-TkQYovM' 
});

export async function POST(request){
    const data = await request.formData()
    const image = data.get("image");

    if (!image){
        return NextResponse.json("No se ha subido ninguna imagen!", { status: 400 });
    }

    const bytes = await image.arrayBuffer()
    const buffer = Buffer.from(bytes)

    //guardar en un archivo
    //const filePath = path.join(process.cwd(), "public", image.name)
    //await writeFile(filePath, buffer)

    const response
     = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream({}, (err, result) => {
            if (err) {
                reject(err)
            }
            
            resolve(result)
        }).end(buffer)
    })
    
    return NextResponse.json({
        message: "Imagen subida!",
        url: response.secure_url
    });
}