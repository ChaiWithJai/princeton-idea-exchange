---
description: Generate cinematic hero images for NJ creative studios
---

This workflow generates a Satyajit Ray & Charlie Chaplin inspired cinematic hero image for each studio in the data file. Images are saved to `public/studios/[slug]-hero.png`.

1. **Read Studio Data**
   - Read `src/app/studios/data/studios.ts` to get a list of all studios and their details (name, slug, specializations).

2. **Generate Images Batch 1 (Studios 1-8)**
   - For each studio, construct a prompt following this template:
     > "A breathtaking cinematic interior of a [studio type/specialization], inspired by the black and white cinematography of Satyajit Ray and Charlie Chaplin. Monochrome with subtle warm [amber/orange] duotone accent on highlights. Dramatic chiaroscuro lighting. [Specific features from data]. Film grain texture. 16:9 aspect ratio, editorial photography style, timeless elegance."
   - Generate images using `generate_image`.
   - Save as `[slug]-hero.png` (do not add to public yet to avoid overwriting good ones).
   - Review images.
   - If good, move to `public/studios/`.

3. **Generate Images Batch 2 (Studios 9-16)**
   - Repeat process for next batch.

4. **Generate Images Batch 3 (Studios 17-24)**
   - Repeat process for next batch.

5. **Generate Images Batch 4 (Studios 25-32)**
   - Repeat process for next batch.

6. **Verify & Update Code**
   - Ensure all images are in `public/studios/`.
   - Update `src/app/studios/[slug]/page.tsx` to remove the `CINEMATIC_HERO_STUDIOS` array filter so ALL studios use the `HeroImage` component.
   - Verify layout in browser.
