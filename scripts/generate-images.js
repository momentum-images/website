const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

const imagesFolder = path.resolve(__dirname, '../images')
const srcFolder = path.resolve(__dirname, '../src')
const publicImagesFolder = path.resolve(__dirname, '../public/images')
const publicPortfolioFolder = path.resolve(__dirname, '../public/images/portfolio')

if (fs.existsSync(publicImagesFolder)) {
  fs.rmdirSync(publicImagesFolder, { recursive: true })
  fs.mkdirSync(publicImagesFolder)
  fs.mkdirSync(publicPortfolioFolder)
} else {
  fs.mkdirSync(publicImagesFolder)
  fs.mkdirSync(publicPortfolioFolder)
}

const isImage = (image) => image.endsWith('.jpg')

const portfolio = {}

const transform = async (image, portfolioName) => {
  const name = path.basename(image)
  let outputName = path.join(publicImagesFolder, name.replace('.jpg', '.webp'))
  if (portfolioName !== null) {
    const portfolioFolder = path.join(publicImagesFolder, 'portfolio', portfolioName)
    if (!fs.existsSync(portfolioFolder)) fs.mkdirSync(portfolioFolder)
    outputName = path.join(portfolioFolder, name.replace('.jpg', '.webp'))
    portfolio[portfolioName] = portfolio[portfolioName] || []
    portfolio[portfolioName].push(name.replace('.jpg', ''))
  }
  await sharp(image).toFile(outputName)
  await sharp(image).toFile(outputName.replace('.webp', '.jpg'))
}

const portfolioMatch = /\/portfolio\/(\w*)$/

const transformFolder = async (folder, portfolioName = null) => {
  const files = fs
    .readdirSync(folder)
    .map(file => path.resolve(folder, file))
  for (const file of files) {
    if (isImage(file)) await transform(file, portfolioName)
    else if (fs.statSync(file).isDirectory()) {
      const matched = file.match(portfolioMatch)
      if (matched !== null) transformFolder(file, matched[1])
      else transformFolder(file, portfolioName)
    }
  }
  fs.writeFileSync(path.join(srcFolder, 'data.json'), JSON.stringify(portfolio))
}
transformFolder(imagesFolder)
