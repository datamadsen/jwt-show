var m = require("mithril")
var SunCalc = require("suncalc")
var GeoLocation = require("./GeoLocation")

module.exports = {
  /*
   * Darkmode should be enabled if:
   *  1. The user prefers darkmode, or
   *  2. The user perfers automatic and the sun has gone down.
   *
   * Lightmode should be enabled if:
   *  1. The user prefers lightmode, or
   *  2. The user perfers automatic and the sun is still up.
   */
  enableDarkmode: async function () {
    return preferDarkmode() ||
      preferAutomatic() && sunIsDown(await GeoLocation.getLocation())
  }
}

function preferDarkmode () {
  return getDarkmodePreference() === "dark"
}

function preferLightmode () {
  return getDarkmodePreference() === "light"
}

function preferAutomatic () {
  const preference = getDarkmodePreference()
  return preference === null || preference === "auto"
}

function getDarkmodePreference () {
  return localStorage.getItem("darkmode.darkmodePreference")
}

function sunIsDown (geoLocation) {
  const now = new Date()
  const sunTimes = SunCalc.getTimes(now, geoLocation.lat, geoLocation.lng)
  return now >= sunTimes.sunset || now <= sunTimes.sunrise
}

