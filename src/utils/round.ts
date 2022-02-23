export function round(num: number, decimalPlaces = 0) {
  const power = Math.pow(10, decimalPlaces);

  return Math.floor(num * power) / power;
}
