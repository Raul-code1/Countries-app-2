function addItemToLocalStorage<T>(key: string, value: T) {
  return localStorage.setItem(key, JSON.stringify(value));
}

export { addItemToLocalStorage };
