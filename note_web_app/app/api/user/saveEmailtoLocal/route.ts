function saveEmailToLocalStorage(email: string): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('userEmail', email);
    console.log("Name saved to localStorage:", email);
  }
}

export { saveEmailToLocalStorage };
