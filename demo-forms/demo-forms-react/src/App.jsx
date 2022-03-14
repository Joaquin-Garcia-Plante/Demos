import { useState } from "react";

function App() {
  //!Formulario controlado
  //Lo que se debe hacer es bindear los valores a un estado local del componente
  //Como primer paso me creo los estados locales
  const [data, setData] = useState({ user: "", password: "" });
  // const [user, setUser] = useState("");
  // const [pass, setPass] = useState("");
  // const [passError, setPassError] = useState("");
  function handleOnSubmit(e) {
    e.preventDefault();
    console.log({ data });
  }
  function handleOnChange(e) {
    console.log({ name: e.target.name, value: e.target.value });
    setData((state) => {
      return {
        ...state,
        [e.target.name]: e.target.value,
      };
    });
  }
  //!Formulario no controlado
  // function handleOnSubmit(e) {
  //   e.preventDefault();
  //   const data = {
  //     user: document.getElementById("user").value,
  //     password: document.getElementById("password").value,
  //   };
  //   alert(`${data.user} ${data.password}`);
  // }

  return (
    <div className="App">
      <form onSubmit={handleOnSubmit}>
        <div>
          <label>Usuario:</label>
          <input
            id="user"
            onChange={handleOnChange}
            name="user"
            value={data.user}
          ></input>
        </div>
        <div>
          <label>Password:</label>
          <input
            value={data.password}
            id="password"
            name="password"
            type={"password"}
            onChange={handleOnChange}
          ></input>
          {/* <span style={{ color: "red" }}>{passError}</span> */}
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default App;
