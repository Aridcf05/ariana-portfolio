const sharp = require('sharp');
const fs = require('fs');

const inputJpeg = 'public/images/ariana-profile.jpeg';
const inputWebp = 'public/images/ariana-profile.webp';
const sizes = [160, 320, 640, 800];

(async () => {
  try {
    const src = fs.existsSync(inputWebp) ? inputWebp : inputJpeg;
    if (!fs.existsSync(src)) {
      console.error('Source image not found:', src);
      process.exit(1);
    }

    for (const w of sizes) {
      const out = `public/images/ariana-profile-${w}.webp`;
      await sharp(src)
        .resize({ width: w })
        .webp({ quality: 80 })
        .toFile(out);
      console.log('Generated', out);
    }

    console.log('All responsive images generated.');
  } catch (err) {
    console.error('Error generating images:', err && err.message ? err.message : err);
    process.exit(2);
  }
})();