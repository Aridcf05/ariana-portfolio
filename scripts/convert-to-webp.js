const sharp = require('sharp');
const fs = require('fs');
const inPath = 'public/images/ariana-profile.jpeg';
const outPath = 'public/images/ariana-profile.webp';

(async () => {
  try {
    if (!fs.existsSync(inPath)) {
      console.error('Input file not found:', inPath);
      process.exit(1);
    }

    await sharp(inPath)
      .resize(800, 800, { fit: 'inside' })
      .webp({ quality: 80 })
      .toFile(outPath);

    console.log('Conversion successful:', outPath);
  } catch (err) {
    console.error('Conversion failed:', err && err.message ? err.message : err);
    process.exit(2);
  }
})();