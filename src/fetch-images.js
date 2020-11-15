import data from './data.json'

export default (portfolio) => {
  return data[portfolio].map(file => {
    const [index, orientation, name] = file.split('_')
    return {
      file,
      index: Number(index),
      orientation,
      name,
      size: orientation === 'landscape' ? 12 : 6
    }
  })
    .sort((left, right) => {
      if (left.index < right.index) return -1
      if (left.index > right.index) return 1
      return 0
    })
}
