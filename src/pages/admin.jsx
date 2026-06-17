import { useState } from "react";
import "../assets/css/admin.css";
import Dashboard from "../components/dashboard";
import Enquiry from "../components/enquiry";

export default function AdminDashboard() {
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);

  return (
    <div className="admin-page">
      <aside className="sidebar">
        <h2>Admin</h2>

        <ul>
          <li onClick={() => setPage(0)}>🏠 Dashboard</li>

          <li onClick={() => setPage(1)}>📩 Enquiries</li>

          <li>👤 Visitors</li>

          <li>⚙️ Settings</li>
        </ul>
      </aside>
      {page == 0 && <Dashboard data={data}></Dashboard>}
      {page == 1 && <Enquiry setData={setData}></Enquiry>}
    </div>
  );
}
