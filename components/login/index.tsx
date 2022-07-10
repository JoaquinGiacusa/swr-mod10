import { useState } from "react";
import { sendCode, getToken } from "lib/api";
import Router from "next/router";

export function Login() {
  const [email, setEmail] = useState("");

  function handleEmailForm(e: any) {
    e.preventDefault();
    const email = e.target.email.value;

    setEmail(email);
    sendCode(email);
  }

  async function handleCodeForm(e: any) {
    e.preventDefault();
    const code = e.target.code.value;
    try {
      await getToken(email, code);
      Router.push("/users");
    } catch (error) {
      //guardar el error en un state y mostrarlo en la pantalla
      console.log({ error });
    }
  }
  const emailFormStyle = {
    display: email ? "none" : "inherit",
  };

  const codeFormStyle = {
    display: email ? "inherit" : "none",
  };

  return (
    <div>
      <form style={emailFormStyle} onSubmit={handleEmailForm}>
        <label htmlFor="">Email</label>
        <input type="emial" name="email" />
        <button>Enviar</button>
      </form>
      <form style={codeFormStyle} onSubmit={handleCodeForm}>
        <label htmlFor="">Code</label>
        <input type="text" name="code" />
        <button>Enviar</button>
      </form>
    </div>
  );
}
