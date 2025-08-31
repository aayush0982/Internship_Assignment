export function saveNameToLocalStorage(name: string): void {
  if (typeof window !== "undefined") {
    localStorage.setItem("userName", name);
  }
}

export function saveEmailToLocalStorage(email: string): void {
  if (typeof window !== "undefined") {
    localStorage.setItem("userEmail", email);
  }
}
