function saveNameToLocalStorage(name: string): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('userName', name);
    console.log("Name saved to localStorage:", name);
  }
}

export { saveNameToLocalStorage };
