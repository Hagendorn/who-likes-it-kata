export const likes = (names: string[]): string => {
  const namesCount = names.length
  const staticPart = `${namesCount > 3 ? 'others' : ''}${namesCount < 2 ? ' likes ' : ' like '}this`

  switch (names.length) {
    case 0:
      return `no one${staticPart}`
    case 1:
      return `${names[0]}${staticPart}`
    case 2:
      return `${names[0]} and ${names[1]}${staticPart}`
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]}${staticPart}`
    default:
      return `${names[0]}, ${names[1]} and ${namesCount - 2} ${staticPart}`
  }
}
