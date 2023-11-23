import { NextResponse } from "next/server";
import {writeFile} from  "fs/promises"
import path from "path";

// importamos cloudinary
import {v2 as cloudinary} from 'cloudinary';
          
cloudinary.config({ 
  cloud_name: 'dxvmowx1w', 
  api_key: '899469123894434', 
  api_secret: 'G8MHacrWlbbdEJEeZXT-TkQYovM' 
});

export async function POST(request){
    const data = await request.formData()
    const images = Array.from(data.entries()).filter(([name]) => name.startsWith('image'));


    if (!images || images.length === 0){
        return NextResponse.json("No se ha subido ninguna imagen!", { status: 400 });
    }

    const responses = await Promise.all(images.map(async ([name, file]) => {
        const buffer = await file.arrayBuffer();
    //guardar en un archivo
    //const filePath = path.join(process.cwd(), "public", image.name)
    //await writeFile(filePath, buffer)

    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream({}, (err, result) => {
          if (err) {
            reject(err);
          }
  
          resolve(result);
        }).end(Buffer.from(buffer));
      });
    }));
  
    const urls = responses.map(response => response.secure_url);
  
    console.log("URLs:", urls);
    
    return NextResponse.json({
      message: "Imágenes subidas",
      urls,
    });
}