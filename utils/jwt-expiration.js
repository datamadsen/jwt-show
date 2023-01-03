export const JwtExpiration = {
  isExpired: expiration => {
    const now = new Date();
    const expDate = new Date(expiration);
    return expDate.getTime() < now.getTime();
  },
  expString: expiration => {
    expiration = new Date(expiration);
    const now = new Date();

    const duration = durationBetweenDates(expiration, now);
    const isExpired = expiration.getTime() < now.getTime();

    let result = isExpired ? "expired " : "expires in ";

    if (duration.years !== 0) {
      result += Math.abs(duration.years);
      result += " years, ";
    }

    if (duration.years !== 0 || duration.days !== 0) {
      result += Math.abs(duration.days);
      result += " days and ";
    }

    if (duration.hours !== 0) {
      //result += zeroPaddedString(Math.abs(duration.hours), 2)
      result += `${Math.abs(duration.hours)}`.padStart(2, '0');
      result += ":"
    }

    result += `${Math.abs(duration.minutes)}`.padStart(2, '0');
    result += ":"
    result += `${Math.abs(duration.seconds)}`.padStart(2, '0');

    if (isExpired)
      result += " ago";

    return result
  }
}

function durationBetweenDates(x, y) {
  if (!(x instanceof Date && y instanceof Date))
    throw exception("Both x and y must be dates")

  let result = {
    years: null,
    days: null,
    hours: null,
    minutes: null,
    seconds: null
  }

  const xSecs = x.getTime() / 1000;
  const ySecs = y.getTime() / 1000;
  const diffSecs = xSecs - ySecs;

  const secsInYear = 365 * 24 * 60 * 60;
  const secsInDay = 24 * 60 * 60;
  const secsInHour = 60 * 60;
  const secsInMin = 60;

  const roundingDirection = xSecs < ySecs ? "up" : "down";

  result.years = round(roundingDirection, diffSecs / secsInYear);
  result.days = round(roundingDirection, (diffSecs - result.years * secsInYear) / secsInDay);
  result.hours = round(roundingDirection, (diffSecs - (result.years * secsInYear) - (result.days * secsInDay)) / secsInHour);
  result.minutes = round(roundingDirection, (diffSecs - (result.years * secsInYear) - (result.days * secsInDay) - (result.hours * secsInHour)) / secsInMin);
  result.seconds = round(roundingDirection, (diffSecs - (result.years * secsInYear) - (result.days * secsInDay) - (result.hours * secsInHour) - (result.minutes * secsInMin)));

  return result;
}

function round(direction, number) {
  if (direction === 'up')
    return Math.ceil(number);

  return Math.floor(number);
}