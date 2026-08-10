export function formatEpisodeNumber(number, digits = 2) {
  return String(number).padStart(digits, '0')
}
