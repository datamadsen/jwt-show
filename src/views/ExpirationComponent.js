import m from "mithril"
import { JwtState } from "../models/JwtState"

export const ExpirationComponent = {
  intervalFunction: null,
  oninit: function (vnode) {
    ExpirationComponent.intervalFunction = window.setInterval(m.redraw, 500)
  },
  view: function (vnode) {
    const expiration = JwtState.decodedJwt === null ? 0 : JwtState.decodedJwt.exp * 1000
    if (!expiration) {
      return
    }
    
    const isExpired = expiration - new Date().getTime()  < 0
    const expirationString = makeExpirationString(expiration)
    const redOrGreen = isExpired ? "red" : "green"

    return m(`div.f5.${redOrGreen}`, m.trust(expirationString + "<br/>" + new Date(expiration)))
  },
  onremove: function () {
    if (ExpirationComponent.intervalFunction) {
      window.clearInterval(ExpirationComponent.intervalFunction)
    }
  }
}

function makeExpirationString (expiration) {
  expiration = new Date(expiration)
  const now = new Date()
  
  const duration = durationBetweenDates(expiration, now)
  const isExpired = expiration.getTime() < now.getTime()

  let result = isExpired ? "expired " : "expires in "

  if (duration.years !== 0) {
    result += Math.abs(duration.years)
    result += " years, "
  }

  if (duration.years !== 0 || duration.days !== 0) {
    result += Math.abs(duration.days)
    result += " days and "
  }

  if (duration.hours !== 0) {
    result += zeroPaddedString(Math.abs(duration.hours), 2)
    result += ":"
  }

  result += zeroPaddedString(Math.abs(duration.minutes), 2)
  result += ":"
  result += zeroPaddedString(Math.abs(duration.seconds), 2)

  if (isExpired)
    result += " ago"

  return result
}

function zeroPaddedString (string, length) {
  string = string + ""
  if (string.length >= length)
    return string

  var missingChars = length - string.length
  for (var i = 0; i < missingChars; i++) {
    string = "0" + string
  }

  return string
}

function durationBetweenDates (x, y) {
  if (!(x instanceof Date && y instanceof Date))
    throw exception("Both x and y must be dates")

  let result = {
    years: null,
    days: null,
    hours: null,
    minutes: null,
    seconds: null
  }

  const xSecs = x.getTime() / 1000
  const ySecs = y.getTime() / 1000
  const diffSecs = xSecs - ySecs

  const secsInYear = 365 * 24 * 60 * 60
  const secsInDay = 24 * 60 * 60
  const secsInHour = 60 * 60
  const secsInMin = 60

  result.years = parseInt(diffSecs / secsInYear)
  result.days = parseInt((diffSecs - result.years * secsInYear) / secsInDay)
  result.hours = parseInt((diffSecs - (result.years * secsInYear) - (result.days * secsInDay)) / secsInHour)
  result.minutes = parseInt((diffSecs - (result.years * secsInYear) - (result.days * secsInDay) - (result.hours * secsInHour)) / secsInMin)
  result.seconds = parseInt((diffSecs - (result.years * secsInYear) - (result.days * secsInDay) - (result.hours * secsInHour) - (result.minutes * secsInMin)))

  return result
}
