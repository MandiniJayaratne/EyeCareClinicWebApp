import { useState } from "react";
import Spinner from "../../components/spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateConsultation = () => {
  const [consultationDate, setConsultationDate] = useState("");
  const [consultationText, setConsultationText] = useState("");
  const [testDetails, setTestDetails] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!consultationDate) {
      valid = false;
      newErrors.consultationDate = "Consultation date is required.";
    }
    if (!consultationText) {
      valid = false;
      newErrors.consultationText = "Consultation text is required.";
    }
    if (!testDetails) {
      valid = false;
      newErrors.testDetails = "Test details are required.";
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSavedConsultation = () => {
    if (!validateForm()) {
      return;
    }

    const data = {
      consultationDate,
      consultationText,
      testDetails,
    };
    setLoading(true);
    axios
      .post(`http://localhost:5555/consultations`, data)
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
          <label className="text-gray-700">Consultation Date</label>
          <input
            type="date"
            value={consultationDate}
            onChange={(e) => setConsultationDate(e.target.value)}
            className="border border-gray-400 px-4 py-2 w-full mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          {errors.consultationDate && (
            <p className="text-red-500">{errors.consultationDate}</p>
          )}
        </div>
        <div className="my-4">
          <label className="text-gray-700">Anything We Should Know?</label>
          <input
            type="text"
            value={consultationText}
            onChange={(e) => setConsultationText(e.target.value)}
            className="border border-gray-400 px-4 py-2 w-full mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          {errors.consultationText && (
            <p className="text-red-500">{errors.consultationText}</p>
          )}
        </div>
        <div className="my-4">
          <label className="text-gray-700">Your Test Details</label>
          <input
            type="text"
            value={testDetails}
            onChange={(e) => setTestDetails(e.target.value)}
            className="border border-gray-400 px-4 py-2 w-full mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          {errors.testDetails && (
            <p className="text-red-500">{errors.testDetails}</p>
          )}
        </div>
        <button
          className="bg-red-600 text-white py-2 px-4 rounded-md mt-4 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600"
          onClick={handleSavedConsultation}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateConsultation;
