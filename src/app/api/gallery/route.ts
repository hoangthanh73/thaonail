import { v2 as cloudinary } from 'cloudinary';
import { NextResponse } from 'next/server';

// Cấu hình Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export async function GET() {
  try {
    const { resources } = await cloudinary.search
      .expression('folder:thaonail/gallery/*')
      .sort_by('public_id', 'desc')
      .max_results(12)
      .execute();

      console.log('log của thành', resources);

    const imageUrls = resources.map((res: any) => res.secure_url);
    
    return NextResponse.json(imageUrls);
  } catch (error) {
    console.error("Cloudinary error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}