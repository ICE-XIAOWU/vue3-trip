// 获取本地资源工具文件

/**
 * 
 * @param {*} image 图片的相对路径
 * @returns 图片的超链接
 */
export const getAssestImg = (image) => {
  // new URL vite读取动态文件时的类
  // 第一个参数：相对路径 
  // 第二个参数：当前路径的url
  return new URL(`../assets/img/${image}`, import.meta.url).href
}