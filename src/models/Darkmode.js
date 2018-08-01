import SunCalc from "suncalc";
import { GeoLocation } from "./GeoLocation";

export let Darkmode = {
  darkmodeIsEnabled: null,
  /*
   * Darkmode should be enabled if:
   *  1. The user prefers darkmode, or
   *  2. The user perfers automatic and the sun has gone down.
   *
   * Lightmode should be enabled if:
   *  1. The user prefers lightmode, or
   *  2. The user perfers automatic and the sun is still up.
   */
  init: async function () {
    Darkmode.darkmodeIsEnabled =  preferDarkmode() ||
      preferAutomatic() && sunIsDown(await GeoLocation.getLocation())
  },

  setDarkmodePreference: async function (preference) {
    setDarkmodePreference(preference)
    await Darkmode.init()
  },

  currentPreference () {
    return getDarkmodePreference()
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

function setDarkmodePreference (preference) {
  const allowedPreferences = ["dark", "light", "auto"]
  if (allowedPreferences.indexOf(preference) < 0) {
    throw exception("Darkmode preference not allowed: " + preference)
  }

  localStorage.setItem("darkmode.darkmodePreference", preference)
}

function sunIsDown (geoLocation) {
  const now = new Date()
  const sunTimes = SunCalc.getTimes(now, geoLocation.lat, geoLocation.lng)
  return now >= sunTimes.sunset || now <= sunTimes.sunrise
}
