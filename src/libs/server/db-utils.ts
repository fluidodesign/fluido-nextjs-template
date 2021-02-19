export function searchMethod(text: string, cb) {
  return this.find({ $text: { $search: text } }).exec(cb)
}
