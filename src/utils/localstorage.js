/**
 * 存储数据
 */
export const setItem = (key, value) => {
  //复杂数据
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  localStorage.setItem(key, value)
}

/**
 * 获取数据
 */
export const getItem = (key) => {
  const value = localStorage.getItem(key)
  try {
    return JSON.parse(value)
  } catch (error) {
    // console.warn(error);
    return value
  }
}

/**
 * 删除指定数据
 */
export const removeItem = (key) => {
  localStorage.removeItem(key)
}

/**
 * 删除所有数据
 */
export const clearItem = () => {
  localStorage.clear()
}
