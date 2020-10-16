import csvtojson from 'csvtojson'

export default async (portfolio) => {
  const res = await fetch(`/portfolio/${portfolio}/images.csv`)
  const data = await res.text()
  return csvtojson().fromString(data)
}
