import data from './data.json'

export default (portfolio) => {
  const images = data[portfolio]
    .map(file => {
      const [index, orientation, name] = file.split('_')
      return { file, index: Number(index), orientation, name }
    })
    .sort((left, right) => {
      if (left.index < right.index) return -1
      if (left.index > right.index) return 1
      return 0
    })

  const landscapeImages = images.filter(({ orientation }) => orientation === 'landscape')
  const portraitImages = images.filter(({ orientation }) => orientation === 'portrait')
  const oddPortraitCount = portraitImages.length % 2 === 1

  const returned = []
  for (let i in images) {
    i = Number(i)
    const wantLandscape = i % 3 === 0
    if (wantLandscape && landscapeImages.length > 0) {
      const image = landscapeImages.pop()
      image.size = 12
      returned.push(image)
    } else {
      const image = portraitImages.pop()
      image.size = 6
      if (oddPortraitCount && i === images.length - 1) image.size = 12
      returned.push(image)
    }
  }

  return returned
}
