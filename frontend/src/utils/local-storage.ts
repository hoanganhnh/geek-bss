export function getDataStorage(key: string) {
  const data =
    typeof window !== "undefined" ? window.localStorage.getItem(key) : null;
  return data === null ? null : JSON.parse(data);
}

export function saveToLocalStorage<T>(key: string, data: T[] | T) {
  typeof window !== "undefined" &&
    window.localStorage.setItem(key, JSON.stringify(data));
}

export function removeDataFromLocalStorage(key: string) {
  typeof window !== "undefined" && window.localStorage.removeItem(key);
}

export function clearAllDataFromLocalStorage() {
  typeof window !== "undefined" && window.localStorage.clear();
}
