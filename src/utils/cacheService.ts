export const cacheService = {
  loadState(key: string) {
    const todos = localStorage.getItem(key);
    if (!todos) return {};
    return JSON.parse(todos);
  },
  saveState(key: string, state: any) {
    const stringifiedTodos = JSON.stringify(state);
    localStorage.setItem(key, stringifiedTodos);
  },
  clear(key: string) {
    localStorage.removeItem(key);
  },
};
