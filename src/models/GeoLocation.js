import m from "mithril";

export const GeoLocation = {
  getLocation: async function () {
    try {
      return getLocationFromLocalStorage()
    }
    catch(e) {
      const geoLocation = await getLocationByIp()
      saveLocationToLocalStorage(geoLocation)
      return getLocationFromLocalStorage()
    }
  }
}

function getLocationFromLocalStorage () {
  const lat = localStorage.getItem("lat")
  const lng = localStorage.getItem("lng")

  if (lat && lng)
    return { lat, lng }

  throw exception("No location stored in localstorage")
}

async function getLocationByIp () {
  const ipInfo = await m.request("https://ipinfo.io/json")

  const lat = ipInfo.loc.split(',')[0]
  const lng = ipInfo.loc.split(',')[1]

  return { lat, lng }
}

function saveLocationToLocalStorage (geoLocation) {
  if (!geoLocation.lat || !geoLocation.lng) {
    throw exception("location missing lat or lng")
  }

  localStorage.setItem("lat", location.lat)
  localStorage.setItem("lng", location.lng)
}
