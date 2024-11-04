import { useState } from "react";
import Spinner from "../../components/spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateSupplier = () => {
  const [supplierName, setSupplierName] = useState("");
  const [product, setProduct] = useState("");
  const [brand, setBrand] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!supplierName) {
      valid = false;
      newErrors.supplierName = "Supplier name is required.";
    }
    if (!product) {
      valid = false;
      newErrors.product = "Product is required.";
    }
    if (!brand) {
      valid = false;
      newErrors.brand = "Brand is required.";
    }
    if (!email) {
      valid = false;
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      valid = false;
      newErrors.email = "Email address is invalid.";
    }
    if (!contactNo) {
      valid = false;
      newErrors.contactNo = "Contact number is required.";
    } else if (!/^\d{10}$/.test(contactNo)) {
      valid = false;
      newErrors.contactNo =
        "Contact number is invalid. It should be 10 digits.";
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSavedSupplier = () => {
    if (!validateForm()) {
      return;
    }

    const data = {
      supplierName,
      product,
      brand,
      email,
      contactNo,
    };
    setLoading(true);
    axios
      .post(`http://localhost:5555/suppliers/`, data)
      .then(() => {
        setLoading(false);
        navigate(`/admin`, { replace: true });
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl my-4">Create Supplier</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-grey-500">Supplier Name</label>
          <input
            type="text"
            value={supplierName}
            onChange={(e) => setSupplierName(e.target.value)}
            className="border-2 border-grey-500 px-4 py-2 w-full"
          />
          {errors.supplierName && (
            <p className="text-red-500">{errors.supplierName}</p>
          )}
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-grey-500">Product</label>
          <input
            type="text"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            className="border-2 border-grey-500 px-4 py-2 w-full"
          />
          {errors.product && <p className="text-red-500">{errors.product}</p>}
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-grey-500">Brand</label>
          <input
            type="text"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="border-2 border-grey-500 px-4 py-2 w-full"
          />
          {errors.brand && <p className="text-red-500">{errors.brand}</p>}
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-grey-500">Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 border-grey-500 px-4 py-2 w-full"
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-grey-500">Contact No</label>
          <input
            type="text"
            value={contactNo}
            onChange={(e) => setContactNo(e.target.value)}
            className="border-2 border-grey-500 px-4 py-2 w-full"
          />
          {errors.contactNo && (
            <p className="text-red-500">{errors.contactNo}</p>
          )}
        </div>
        <button className="p-2 bg-sky-300 m-8" onClick={handleSavedSupplier}>
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateSupplier;
