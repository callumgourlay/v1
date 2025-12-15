import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { headers } from "next/headers";
import { getDomainConfig } from "@/lib/domainConfig";

export async function GET() {
  const headersList = await headers();
  const host = headersList.get("host") || "scotsmart.co.uk";
  const config = getDomainConfig(host);

  const logoPath = config.logo || "/branding/weblogo.png";
  const filePath = path.join(process.cwd(), "public", logoPath.replace(/^\//, ""));

  try {
    const file = await fs.promises.readFile(filePath);
    return new NextResponse(file, {
      status: 200,
      headers: { "Content-Type": "image/png" },
    });
  } catch (e) {
    return new NextResponse("Not found", { status: 404 });
  }
}
