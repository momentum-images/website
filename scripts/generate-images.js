const fs = require('fs')
const path = require('path')

const srcFolder = path.resolve(__dirname, '../src')
const portfolioFolder = path.resolve(__dirname, '../public/portfolio')
const folders = fs.readdirSync(portfolioFolder)

const data = {}
for (const name of folders) {
  const folder = path.join(portfolioFolder, name)
  const files = fs.readdirSync(folder)
  data[name] = files
}
fs.writeFileSync(path.join(srcFolder, 'data.json'), JSON.stringify(data))
