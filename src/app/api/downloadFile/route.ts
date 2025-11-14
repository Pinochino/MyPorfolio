import fs from "fs";
import path from "path";
import { PDFDocument } from "pdf-lib";

export async function GET() {
  const imagePath = path.join(process.cwd(), "public", "images", "user.jpg");
  const imageBytes = fs.readFileSync(imagePath);

  const pdfDoc = await PDFDocument.create();
  const image = await pdfDoc.embedJpg(imageBytes);
  const page = pdfDoc.addPage([image.width, image.height]);
  page.drawImage(image, { x: 0, y: 0, width: image.width, height: image.height });

  const pdfBytes = await pdfDoc.save();

  // Chuyển Uint8Array thành Buffer để Next.js Response chấp nhận
  const buffer = Buffer.from(pdfBytes);

  return new Response(buffer, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="portfolio.pdf"`,
    },
  });
}
