import ConsultationsTableComponent from "../pages/consultations/Home";
import InquiriesTableComponent from "../pages/inquiries/Home";
import EmployeeTableComponent from "../pages/employees/Home";
import ItemTableComponent from "../pages/items/Home";
import SupplierTableComponent from "../pages/suppliers/home";
import { useEffect } from "react";
import { signOut } from "firebase/auth";
import { database } from "../authentication/FirebaseConfig";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "../components/adminNavbar";

const withAuthProtection = (Component) => {
  const AuthenticatedComponent = (props) => {
    const history = useNavigate();

    useEffect(() => {
      const user = database.currentUser;
      if (!user) {
        history("/reglog");
      }
    }, [history]);

    return <Component {...props} />;
  };

  return AuthenticatedComponent;
};

const AdminDashBoard = () => {
  const history = useNavigate();

  const handleClick = () => {
    signOut(database)
      .then(() => {
        console.log("Signed out successfully");
        history("/reglog");
      })
      .catch((error) => {
        console.error("Error signing out:", error.message);
      });
  };

  return (
    <div className="app bg-gray-800">
      <AdminNavbar />
      <button
        onClick={handleClick}
        className="bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-3 ml-4"
      >
        Sign Out
      </button>
      <div
        id="consultations"
        className="section section1"
        style={{
          width: "100vw",
          height: "100vh",
        }}
      >
        <ConsultationsTableComponent />
      </div>

      <div
        id="inquiries"
        className="section section1"
        style={{
          width: "100vw",
          height: "100vh",
        }}
      >
        <InquiriesTableComponent />
      </div>

      <div
        id="employees"
        className="section section1"
        style={{
          width: "100vw",
          height: "100vh",
        }}
      >
        <EmployeeTableComponent />
      </div>

      <div
        id="items"
        className="section section1"
        style={{
          width: "100vw",
          height: "100vh",
        }}
      >
        <ItemTableComponent />
      </div>

      <div
        id="suppliers"
        className="section section1"
        style={{
          width: "100vw",
          height: "100vh",
        }}
      >
        <SupplierTableComponent />
        {/* Content for Section 1 */}
      </div>
    </div>
  );
};

export default withAuthProtection(AdminDashBoard);
