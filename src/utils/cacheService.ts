export const cacheService = {
  loadState(key: string) {
    const state = localStorage.getItem(key);
    if (!state) return {};
    return JSON.parse(state);
  },
  saveState(key: string, state: any) {
    const stringifiedState = JSON.stringify(state);
    localStorage.setItem(key, stringifiedState);
  },
  clear(key: string) {
    localStorage.removeItem(key);
  },
};
