
export function makeid() {
  let text = "";
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < 5; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
}

export function saveToLocalStorage(data) {
  window.localStorage.setItem('data', JSON.stringify(data));
}

export const DATE_FORMAT = 'YYYY-MM-DD';
