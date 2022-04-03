export function parseDate(date: Date) {
  const month = (date.getMonth() < 10) ? '0' + date.getMonth() : date.getMonth();
  return date.getDate() + '.' + month + ' в ' + date.toLocaleTimeString();
}