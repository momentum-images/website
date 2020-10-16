import csvtojson from 'csvtojson'
const csv = csvtojson()

export default async (portfolio) => {
  const res = await fetch(`/portfolio/${portfolio}/images.csv`)
  const data = await res.text()
  return csv.fromString(data)
}
