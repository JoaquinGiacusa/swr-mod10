// const BASE_URL = "https://desafio-modulo-9.vercel.app/api";
const BASE_URL = "http://localhost:3001/api";

export async function fetchAPI(input: RequestInfo, options?: any) {
  const url = BASE_URL + input;

  const token = getSaveToken();

  const newOptions: any = options || {};
  if (token) {
    // newOptions.headers = newOptions.headers || {}; lo mismo que abajo
    //si tiene un valor queda como esta y sino le agrega un objeto vacio
    newOptions.headers ||= {};
    newOptions.headers.authorization = "bearer " + token;
    newOptions.headers["Content-Type"] = "application/json";
  }

  if (newOptions.body) {
    newOptions.body = JSON.stringify(newOptions.body);
  }

  const res = await fetch(url, newOptions);

  if (res.status >= 200 || res.status < 300) {
    return res.json();
  } else {
    throw { message: "Hubo un error", status: res.status };
  }
}

export async function sendCode(email: string) {
  return fetchAPI("/auth", { method: "POST", body: { email } });
}

export async function getToken(email: string, code: string) {
  const data = await fetchAPI("/auth/token", {
    method: "POST",
    body: { email, code },
  });

  saveToken(data.token);
  return true;
}

export function saveToken(token: string) {
  localStorage.setItem("auth_token", token);
}

export function getSaveToken() {
  return localStorage.getItem("auth_token");
}
