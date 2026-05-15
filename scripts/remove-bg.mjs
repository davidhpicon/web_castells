import sharp from 'sharp'
import { readFileSync, writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import path from 'path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const src  = path.join(__dirname, '../src/assets/logo.png')
const dest = path.join(__dirname, '../src/assets/logo-transparent.png')

const { data, info } = await sharp(src)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true })

const { width, height, channels } = info
const pixels = new Uint8Array(data)

// Replace near-white pixels with transparent
const THRESHOLD = 240
for (let i = 0; i < pixels.length; i += channels) {
  const r = pixels[i], g = pixels[i+1], b = pixels[i+2]
  if (r >= THRESHOLD && g >= THRESHOLD && b >= THRESHOLD) {
    pixels[i+3] = 0  // alpha = 0
  }
}

await sharp(Buffer.from(pixels), { raw: { width, height, channels } })
  .png()
  .toFile(dest)

console.log(`Done → ${dest}`)
