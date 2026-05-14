import fs from "fs";
import path from "path";

function getContentType(ext: string) {
  switch (ext.toLowerCase()) {
    case ".pdf":
      return "application/pdf";
    case ".docx":
      return "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
    case ".doc":
      return "application/msword";
    case ".txt":
      return "text/plain";
    default:
      return "application/octet-stream";
  }
}

export async function GET() {
  const publicDir = path.join(process.cwd(), "public");

  if (!fs.existsSync(publicDir)) {
    return Response.json({ message: "Public folder not found." }, { status: 500 });
  }

  // Try to find the CV file in the public folder by matching key parts of its name
  const files = fs.readdirSync(publicDir);
  const target = files.find((f) =>
    f.includes("TranDinhHung") && f.includes("0335250819") && f.includes("Fresher")
  );

  if (!target) {
    return Response.json({ message: "CV file not found in public folder." }, { status: 404 });
  }

  const filePath = path.join(publicDir, target);
  if (!fs.existsSync(filePath)) {
    return Response.json({ message: "CV file not found." }, { status: 404 });
  }

  const ext = path.extname(target);
  const contentType = getContentType(ext);

  const fileBuffer = fs.readFileSync(filePath);

  return new Response(fileBuffer, {
    status: 200,
    headers: {
      "Content-Type": contentType,
      // Preserve original filename (including spaces and brackets) when downloaded
      "Content-Disposition": `attachment; filename="${target}"`,
    },
  });
}
