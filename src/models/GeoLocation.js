import m from "mithril"

export const GeoLocation = {
  getLocation: async function () {
    const ipInfo = await m.request("https://ipinfo.io/json")

    const lat = ipInfo.loc.split(',')[0]
    const lng = ipInfo.loc.split(',')[1]

    return { lat, lng }
  }
}
