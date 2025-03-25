const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, '../public/Website Pictures');
const targetDir = path.join(__dirname, '../public/Website Pictures/optimized');

// Create optimized directory if it doesn't exist
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Function to optimize an image
async function optimizeImage(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .resize(600, 400, { // Smaller dimensions for overlapping gallery
        fit: 'cover',
        position: 'attention' // Focus on the important part of the image
      })
      .jpeg({ 
        quality: 70, // Slightly more aggressive compression
        progressive: true,
        mozjpeg: true // Use mozjpeg for better compression
      })
      .toFile(outputPath);
    console.log(`Optimized: ${path.basename(inputPath)}`);
  } catch (error) {
    console.error(`Error optimizing ${inputPath}:`, error);
  }
}

// Process all images in the source directory
fs.readdir(sourceDir, async (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  const imageFiles = files.filter(file => 
    /\.(jpg|jpeg|png)$/i.test(file) && 
    !file.includes('optimized')
  );

  for (const file of imageFiles) {
    const inputPath = path.join(sourceDir, file);
    const outputPath = path.join(targetDir, file);
    await optimizeImage(inputPath, outputPath);
  }

  console.log('Image optimization complete!');
}); 