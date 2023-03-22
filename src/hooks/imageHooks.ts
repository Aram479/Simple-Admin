const useImageUrl = (name: string, type: string = 'png'): string => {
  /**
   * @method vite动态引入图片
   * @params folder 文件夹名称 name 文件名称 type 文件格式 一般为png/jpg/webp/gif等...
   * @returns 图片
   */
  // 带文件夹名folder new URL(`../assets/img/${folder}/${name}.${type}`, import.meta.url).href
  return new URL(`../assets/img/${name}.${type}`, import.meta.url).href
}
export default useImageUrl