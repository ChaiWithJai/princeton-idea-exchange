const fs = require('fs');
const path = require('path');

const API_KEY = 'AIzaSyA6kLkpTNve264RS4J9bl2Bwecn44mIRbg';
const MODEL = 'gemini-3-pro-image-preview';

// Studio data with image prompts
const studios = [
  { slug: 'kvibe', name: 'KVibe Studios', prompt: 'A modern creative studio space with LED panels and podcast setup, warm orange and blue lighting, professional photography style, cinematic' },
  { slug: 'loop', name: 'Loop Studios', prompt: 'A high-tech AI production studio with multiple monitors showing video editing, creative workspace, futuristic lighting, professional' },
  { slug: 'sip', name: 'SIP Studios', prompt: 'A vibrant community creative space with artists collaborating, podcast booth visible, warm welcoming atmosphere, natural light' },
  { slug: 'ironbound', name: 'Ironbound Studios', prompt: 'An industrial film studio with high ceilings, large soundstage, dramatic lighting, converted warehouse aesthetic' },
  { slug: 'parlay', name: 'Parlay Studios', prompt: 'A large professional film stage with lighting rigs, cyc wall, production equipment, cinematic atmosphere' },
  { slug: 'silver-spoon', name: 'Silver Spoon XR', prompt: 'A cutting-edge virtual production LED volume stage, immersive XR environment, high-tech motion capture cameras, futuristic' },
  { slug: 'awakened', name: 'Awakened Films', prompt: 'An elegant boutique production studio, professional yet warm atmosphere, creative lighting setup, woman-led creative space' },
  { slug: 'cinelease', name: 'Cinelease Studios', prompt: 'A massive column-free soundstage with high ceilings, professional film lighting grid, industrial scale production space' },
  { slug: 'east-coast-post', name: 'East Coast Post', prompt: 'A tabletop product photography studio with seamless backdrop, professional lighting, commercial photography setup' },
  { slug: '18-label', name: '18 Label Studio', prompt: 'A beautiful food photography studio with kitchen set, natural daylight, lifestyle photography aesthetic, warm tones' },
  { slug: 'montclair-state', name: 'Montclair State Studios', prompt: 'A professional university broadcast studio with control room, multiple cameras, educational media facility' },
  { slug: 'odr', name: 'ODR Studios', prompt: 'A versatile Newark photography studio with cyclorama wall, professional strobes, urban creative space' },
  { slug: '10-basin', name: '10 Basin Studios', prompt: 'A large-scale virtual production facility with LED walls, massive soundstage, professional film production' },
  { slug: 'mile-end', name: 'Mile End Studios', prompt: 'A dual soundstage facility with construction workshop, industrial production space, professional lighting' },
  { slug: 'palisade', name: 'Palisade Stages', prompt: 'A soundproof film stage with loading dock, professional production infrastructure, industrial aesthetic' },
  { slug: 'bb-props', name: 'BB Props', prompt: 'A prop fabrication workshop with artisan tools, creative materials, theatrical prop making studio' },
  { slug: 'buttertree', name: 'Buttertree Studios', prompt: 'A professional food photography studio with commercial kitchen, warm lighting, product shoot setup' },
  { slug: 'hsad', name: 'HSAD Virtual Production', prompt: 'A virtual production studio with LED volume, motion capture markers, high-tech production environment' },
  { slug: 'hudson-river', name: 'Hudson River Studios', prompt: 'A large e-commerce photography studio with multiple shooting bays, efficient commercial setup' },
  { slug: 'meadowlands', name: 'Meadowlands Arena', prompt: 'A massive arena-scale production space with 139ft ceilings, large-scale event setup, dramatic scale' },
  { slug: 'mediamix', name: 'MediaMix', prompt: 'A broadcast TV studio with HD control room, professional news desk setup, broadcast infrastructure' },
  { slug: 'showman', name: 'Showman Studios', prompt: 'A massive fabrication facility with theatrical sets under construction, large-scale production workshop' },
  { slug: 'stellar', name: 'Stellar Studios', prompt: 'A hybrid studio with LED wall and traditional cyc, versatile production space, modern lighting' },
  { slug: 'sustainable', name: 'Sustainable Studios', prompt: 'An eco-friendly production studio with solar panels visible, green building, sustainable design elements' },
  { slug: 'big-sur', name: 'Big Sur Creative', prompt: 'A commercial video production studio with multiple shooting areas, professional lighting rigs' },
  { slug: 'black-swallowtail', name: 'Black Swallowtail Studios', prompt: 'A versatile content creator studio with podcast booth and product photography area, creative workspace' },
  { slug: 'njf', name: 'NJF Studios', prompt: 'An automotive photography studio with drive-in access, large white cyc wall, car photography setup' },
  { slug: 'riverview', name: 'Riverview Studios', prompt: 'A boutique corporate video studio, professional but intimate, clean modern aesthetic' },
  { slug: 'wreckd', name: "Wreck'd Productions", prompt: 'A diverse creative production studio, vibrant atmosphere, inclusive creative space' },
  { slug: 'acx1', name: 'ACX1 Studios', prompt: 'A massive 550,000 sqft studio complex with 150+ standing sets, Hollywood-scale production facility' },
  { slug: 'hill-theater', name: 'Hill Theater Studio', prompt: 'A theatrical production facility with carpentry shop, stage construction, event space' },
  { slug: 'reliance', name: 'Reliance Studio', prompt: 'A vertical theatrical space with professional rigging, high ceilings, dramatic production capability' },
];

async function generateImage(studio) {
  const outputPath = path.join(__dirname, '..', 'public', 'studios', `${studio.slug}.png`);

  // Skip if already exists
  if (fs.existsSync(outputPath)) {
    console.log(`Skipping ${studio.name} - image already exists`);
    return;
  }

  console.log(`Generating image for ${studio.name}...`);

  const requestBody = {
    contents: [{
      parts: [{
        text: `Generate a high-quality, professional photograph of: ${studio.prompt}. Style: Clean, modern, professional photography with cinematic color grading. Aspect ratio: 16:9 landscape. No text or watermarks.`
      }]
    }],
    generationConfig: {
      responseModalities: ["TEXT", "IMAGE"]
    }
  };

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody)
      }
    );

    if (!response.ok) {
      const error = await response.text();
      console.error(`Error for ${studio.name}:`, error);
      return;
    }

    const data = await response.json();

    // Find the image part in the response
    const parts = data.candidates?.[0]?.content?.parts || [];
    const imagePart = parts.find(p => p.inlineData?.mimeType?.startsWith('image/'));

    if (imagePart) {
      const imageData = imagePart.inlineData.data;
      const buffer = Buffer.from(imageData, 'base64');
      fs.writeFileSync(outputPath, buffer);
      console.log(`Saved ${studio.name} image to ${outputPath}`);
    } else {
      console.log(`No image generated for ${studio.name}. Response:`, JSON.stringify(data, null, 2).slice(0, 500));
    }
  } catch (err) {
    console.error(`Failed for ${studio.name}:`, err.message);
  }

  // Rate limiting - wait between requests
  await new Promise(resolve => setTimeout(resolve, 2000));
}

async function main() {
  // Create output directory
  const outputDir = path.join(__dirname, '..', 'public', 'studios');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log(`Generating images for ${studios.length} studios...`);

  for (const studio of studios) {
    await generateImage(studio);
  }

  console.log('Done!');
}

main();
