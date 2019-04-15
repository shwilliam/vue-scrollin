function getRandomLetter (characters) {
  return characters[Math.floor(Math.random() * characters.length)]
}

function replace (str, i, replacement) {
  if (!replacement) return str
  return (
    str.substr(0, i) +
    replacement +
    str.substr(i + replacement.length)
  )
}

module.exports = {
  getRandomLetter,
  replace
}
