export const likes = (names: string[]): string => {
  const count = names.length
  const template = resolveTemplate(count)
  const limit = resolveLimit(count)
  const ctx = {
    names: Strings.joinWords(names.slice(0, limit), ', ', count > limit ? void 0 : ' and '),
    num_others: names.slice(limit).length,
  }
  return Strings.merge(template, ctx)
}

const resolveTemplate = (count: number): string =>
  count > 3 ? '{names} and {num_others} others like this' : count > 1 ? '{names} like this' : count > 0 ? '{names} likes this' : 'no one likes this'

const resolveLimit = (count: number): number => (count < 4 ? 3 : 2)

export class Strings {
  public static joinWords = (words: string[], sep: string, lastSep?: string): string =>
    words.length < 2 ? words.join(sep) : [words.slice(0, -1).join(sep), words.slice(-1)[0]].join(lastSep || sep)

  public static merge = (template: string, context: { [k: string]: any }): string =>
    template.replace(/(\{(\w+)\})/g, (match: string, _: string, key: string): string => context[key] || match)
}
