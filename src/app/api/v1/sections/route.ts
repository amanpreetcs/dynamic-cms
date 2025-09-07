import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";
import type { Section } from "@/types";

export async function GET() {
  try {
    const sectionFile = path.join(process.cwd(), "cms_content/sections.json");
    const sectionData = await fs.readFile(sectionFile, "utf8");
    const sections: Section[] = JSON.parse(sectionData);

    if (!sections || sections.length === 0) {
      return NextResponse.json(
        { success: false, error: "NoSectionsFound" },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, data: sections });
  } catch (error: unknown) {
    return NextResponse.json(
      { error: "ServerError", message: error },
      { status: 500 }
    );
  }
}
