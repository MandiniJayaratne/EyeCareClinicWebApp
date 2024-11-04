import { useState } from "react";
import { database } from "./FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./PasswordLoginWithFirebase.css"; 

function RegisterAndLogin() {
  const [login, setLogin] = useState(false);
  const history = useNavigate();

  const handleSubmit = (e, type) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (type === "signup") {
      createUserWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data, "authData");
          history("/admin");
        })
        .catch((err) => {
          alert(err.code);
          setLogin(true);
        });
    } else {
      signInWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data, "authData");
          history("/admin");
        })
        .catch((err) => {
          alert(err.code);
        });
    }
  };

  const handleReset = () => {
    history("/reset");
  };

  return (
    <div className="background-container"> {/* Add a container for the background image */}
      <div className="flexflex-colitems-centerjustify-centerh-screen">
        <div className="mb-4 flex flex-row">
          <div
            className={`bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 roundedd-r-full rounded-left ${
              !login ? "bg-red-700-text-white" : "text-amber-50"
            }`}
            onClick={() => setLogin(false)}
          >
            <div className="title">Sign Up</div>
          </div>
          <div
            className={`bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-r-full rounded-right ${
              login ? "bg-red-700 text-white" : "text-amber-50"
            }`}
            onClick={() => setLogin(true)}
          >
            <div className="title">Sign In</div>
          </div>
        </div>
        <h1 className="text-3xlmb-4 text-gray-700">{login ? "Sign In" : "Sign Up"}</h1>
        <form
          className="flex flex-col items-center"
          onSubmit={(e) => handleSubmit(e, login ? "sign In" : "sign Up")}
        >
          <input
            className="w-64 p-2 mb-4 border-2 border-gray-800 rounded-lg focus:outline-none focus:border-gray-800"
            name="email"
            placeholder="Email"
          />
          <input
            className="w-64 p-2 mb-4 border-2 border-gray-800 rounded-lg focus:outline-none focus:border-gray-800"
            name="password"
            type="password"
            placeholder="Password"
          />
          <p className="cursor-pointer text-gray-800 mb-4" onClick={handleReset}>
            Forgot Password?
          </p>
          <button className="w-64 bg-red-500 text-white py-2 rounded-lg hover:bg-red-700 focus:outline-none">
            {login ? "SignIn" : "SignUp"}
          </button>
        </form>
      </div>
    </div>
  );

}
export default RegisterAndLogin;