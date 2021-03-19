interface ClaimsProps {
  [key: string]: string
}

interface ClaimsTypeProps {
  projects?: ClaimsProps
  owner?: ClaimsProps
  admin?: ClaimsProps
}

interface GetAdminClaimsType {
  (claims: ClaimsTypeProps): string[]
}

export function searchMethod(text: string, cb: CallableFunction) {
  return this.find({ $text: { $search: text } }).exec(cb)
}

export const getAdminClaims: GetAdminClaimsType = (claims) => {
  const all = Object.assign({}, claims.owner || {}, claims.admin || {})
  const allValues = Object.values(all)
  const simplifyValues = allValues.filter(
    (el, index, list) => list.indexOf(el) === index,
  )
  return simplifyValues
}
