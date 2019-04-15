export function getRandomLetter (characters) {
  return characters[Math.floor(Math.random() * characters.length)]
}

export function replace (str, i, replacement) {
  if (!replacement) return str
  return (
    str.substr(0, i) +
    replacement +
    str.substr(i + replacement.length)
  )
}
