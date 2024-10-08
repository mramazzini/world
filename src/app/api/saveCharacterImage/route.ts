import { NextResponse } from "next/server";
import { saveImage } from "@/lib/actions/db/character/update.actions"; // Import the server-side function

export async function POST(req: Request) {
  const { id, image } = await req.json(); // Extract data from the request body
  try {
    const res = await saveImage(id, image); // Call the server function
    return NextResponse.json({ success: true, res });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}
