import { sendPasswordResetEmail } from "firebase/auth";
import { database } from "./FirebaseConfig";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css";

function ForgotPassword() {
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailVal = e.target.email.value;
    sendPasswordResetEmail(database, emailVal)
      .then(() => {
        alert("Check your email for password reset instructions");
        history("/reglog");
      })
      .catch((err) => {
        alert(err.code);
      });
  };

  return (
    <div className="background-container">
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="box">
          <h2 className="text-2xl mb-4 ">Forgot Password</h2>
          <form className="flex flex-col items-center" onSubmit={(e) => handleSubmit(e)}>
            <input
              className="w-64 p-2 mb-4 border-2 border-gray-800 rounded-lg focus:outline-none focus:border-gray-800"
              name="email"
              placeholder="Email"
            />
            <button className="w-64 bg-red-500 text-white py-2 rounded-lg hover:bg-red-700 focus:outline-none">
              Reset
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
