export function declensionReview(
  value: number,
  words: [string, string, string]
) {
  const addValue = Math.abs(value)
  const lastTwoDigits = addValue % 100
  const lastDigit = lastTwoDigits % 10

  if (lastTwoDigits > 10 && lastTwoDigits < 20)
    return words[2]
  else if (lastDigit > 1 && lastDigit < 5)
    return words[1]
  else if (lastDigit == 1)
    return words[0]
  else
    return words[2]
}