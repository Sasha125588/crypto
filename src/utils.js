export function percenrDifference(current, previous) {
  return +(
    100 * Math.abs((current - previous) / ((current + previous) / 2))
  ).toFixed(2);
}

export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
