import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

interface RouteParams {
  params: Promise<{
    key: string;
  }>;
}

export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const { key } = await params;

    if (!key) {
      return NextResponse.json({ error: "InvalidKey" }, { status: 400 });
    }

    const contentFile = path.join(
      process.cwd(),
      "cms_content/section_content",
      `${key}.json`
    );
    const contentData = await fs.readFile(contentFile, "utf8");
    const content = JSON.parse(contentData);
    if (!content) {
      return NextResponse.json(
        { success: false, error: `NoContentFound:${key}` },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: content });
  } catch (error: unknown) {
    return NextResponse.json(
      { error: "ServerError", message: error },
      { status: 500 }
    );
  }
}
