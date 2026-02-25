const fs = require("fs");

(async () => {
  try {
    const pdfjsLib = await import("pdfjs-dist/legacy/build/pdf.mjs");
    const pdfPath = "c:\\dev\\leocon-infra-AAC-bricks-v2\\Leocon Infra-1.pdf";

    // Read the PDF file
    const dataBuffer = new Uint8Array(fs.readFileSync(pdfPath));

    // Load the PDF document
    const loadingTask = pdfjsLib.getDocument({ data: dataBuffer });
    const pdfDocument = await loadingTask.promise;

    const numPages = pdfDocument.numPages;
    console.log("=== PDF EXTRACTION STARTED ===");
    console.log("Total pages:", numPages);
    console.log("\n=== EXTRACTING TEXT ===\n");

    let fullText = "";

    // Extract text from each page
    for (let pageNum = 1; pageNum <= numPages; pageNum++) {
      const page = await pdfDocument.getPage(pageNum);
      const textContent = await page.getTextContent();

      const pageText = textContent.items.map((item) => item.str).join(" ");
      fullText += `\n=== PAGE ${pageNum} ===\n${pageText}\n`;

      console.log(`Extracted page ${pageNum} of ${numPages}`);
    }

    // Write the full text content to a file
    fs.writeFileSync("pdf-extracted-content.txt", fullText);

    // Also output to console
    console.log("\n=== FULL TEXT CONTENT ===\n");
    console.log(fullText);
    console.log(
      "\n=== EXTRACTION COMPLETE - Content saved to pdf-extracted-content.txt ===",
    );
  } catch (error) {
    console.error("Error reading PDF:", error);
  }
})();
