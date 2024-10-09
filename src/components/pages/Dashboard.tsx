import { useEffect } from "react";
import UserInfo from "../dashboard/UserInfo";
import { useNavigate } from "react-router-dom";
import { getTokenFromCookie } from "../../utils/cookies";
import Audit from "../dashboard/Audit";
import Card from "../dashboard/Card";
import { FaUser, FaHistory } from "react-icons/fa";
function Dashboard() {
  const navigate = useNavigate();
  // Check if a valid token exists in cookies on component mount, and redirect to login page if not authenticated
  useEffect(() => {
    const token = getTokenFromCookie();
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="grid grid-cols-3 gap-4 p-4">
        <Card title="User Info" content={<UserInfo />} icon={<FaUser />}></Card>
        <Card
          title="Audits History"
          content={<Audit />}
          icon={<FaHistory />}
        ></Card>
      </div>
    </div>
  );
}

export default Dashboard;
