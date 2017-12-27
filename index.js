module.exports = isNode

function isNode (val) {
  return (!val || typeof val !== 'object')
    ? false
    : (typeof window === 'object' && typeof window.Node === 'function')
      ? (val instanceof window.Node)
      : (typeof val.nodeType === 'number') &&
        (typeof val.nodeName === 'string')
}
