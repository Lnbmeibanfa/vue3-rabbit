export function getValue(key) {
  if (!key) {
    return
  }
  const value = localStorage.getItem(key)
  if (!value) {
    return
  } else {
    return value
  }
}

export function setValue(key, value) {
  if (!key) {
    return
  }
  localStorage.setItem(key, value)
}
