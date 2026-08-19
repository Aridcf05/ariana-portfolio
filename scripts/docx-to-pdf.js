const fs = require('fs');
const path = require('path');
const mammoth = require('mammoth');
const puppeteer = require('puppeteer');

async function convert(inputDocx, outputPdf) {
  if (!fs.existsSync(inputDocx)) {
    console.error('Input DOCX not found:', inputDocx);
    process.exit(1);
  }

  try {
    const { value: html } = await mammoth.convertToHtml({path: inputDocx});

    const htmlTemplate = `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>CV</title><style>body{font-family: Arial, Helvetica, sans-serif; color:#0b0b0b; padding:24px; line-height:1.35} h1,h2,h3{color:#111} .header{margin-bottom:12px} .section{margin-top:18px}</style></head><body>${html}</body></html>`;
    const tmpHtml = path.join(__dirname, 'tmp_cv.html');
    fs.writeFileSync(tmpHtml, htmlTemplate, 'utf8');

    const browser = await puppeteer.launch({args: ['--no-sandbox','--disable-setuid-sandbox']});
    const page = await browser.newPage();
    await page.goto('file://' + tmpHtml, {waitUntil: 'networkidle0'});
    await page.pdf({path: outputPdf, format: 'A4', printBackground: true});
    await browser.close();

    fs.unlinkSync(tmpHtml);
    console.log('PDF written to', outputPdf);
  } catch (err) {
    console.error('Conversion failed:', err);
    process.exit(2);
  }
}

const input = process.argv[2];
const output = process.argv[3];
if (!input || !output) {
  console.error('Usage: node docx-to-pdf.js <input.docx> <output.pdf>');
  process.exit(1);
}
convert(input, output);
