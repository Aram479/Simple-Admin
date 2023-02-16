
class LocalCache {
  setItem(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
  getItem(key: string) {
    const value = window.localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
  }
  removeItem(key: string) {
    window.localStorage.removeItem(key);
  }
  clearCache() {
    window.localStorage.clear();
  }
}
export default new LocalCache();
