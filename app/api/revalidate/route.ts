import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const secret = searchParams.get("secret");
  const path = searchParams.get("path");

  // Check for secret to confirm this is a valid request
  if (secret !== process.env.VALIDATION_TOKEN) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }

  if (!path) {
    return NextResponse.json(
      { message: "Missing path parameter" },
      { status: 400 }
    );
  }

  console.log("Revalidating path:", path);

  try {
    // Revalidate the path
    revalidatePath(path);

    return NextResponse.json({ revalidated: true }, { status: 200 });
  } catch (err) {
    console.error("Error revalidating:", err);
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return NextResponse.json(
      { message: "Error revalidating", revalidated: false },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  return GET(req);
}
