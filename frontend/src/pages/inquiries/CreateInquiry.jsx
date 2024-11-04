import { useState } from "react";
import Spinner from "../../components/spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateInquiry = () => {
  const [Email, setEmail] = useState("");
  const [Type, setType] = useState("");
  const [Text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!Email) {
      valid = false;
      newErrors.Email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(Email)) {
      valid = false;
      newErrors.Email = "Email address is invalid.";
    }
    if (!Type) {
      valid = false;
      newErrors.Type = "Type is required.";
    }
    if (!Text) {
      valid = false;
      newErrors.Text = "Text is required.";
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSavedInquiry = () => {
    if (!validateForm()) {
      return;
    }

    const data = {
      Email,
      Type,
      Text,
    };
    setLoading(true);
    axios
      .post(`http://localhost:5555/inquiries`, data)
      .then(() => {
        setLoading(false);
        navigate(`/`);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      {loading && <Spinner />}
      <div className="bg-white rounded-xl p-8 shadow-md w-96">
        <div className="my-4">
          <label className="text-gray-700">Your Email</label>
          <input
            type="text"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-400 px-4 py-2 w-full mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          {errors.Email && <p className="text-red-500">{errors.Email}</p>}
        </div>
        <div className="my-4">
          <label className="text-gray-700">Feedback or Inquiry?</label>
          <select
            value={Type}
            onChange={(e) => setType(e.target.value)}
            className="border border-gray-400 px-4 py-2 w-full mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
          >
            <option value="">Select Type</option>
            <option value="Feedback">Feedback</option>
            <option value="Inquiry">Inquiry</option>
          </select>
          {errors.Type && <p className="text-red-500">{errors.Type}</p>}
        </div>
        <div className="my-4">
          <label className="text-gray-700">Tell us more</label>
          <input
            type="text"
            value={Text}
            onChange={(e) => setText(e.target.value)}
            className="border border-gray-400 px-4 py-2 w-full mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          {errors.Text && <p className="text-red-500">{errors.Text}</p>}
        </div>
        <button
          className="bg-red-700 text-white py-2 px-4 rounded-md mt-4 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600"
          onClick={handleSavedInquiry}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateInquiry;
