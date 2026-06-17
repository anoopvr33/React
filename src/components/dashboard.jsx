import { useEffect, useState } from "react";
import { FaEnvelope, FaUsers, FaCalendarAlt, FaStar } from "react-icons/fa";
import { GetEnquiry } from "../hook/enquryHook";

const Dashboard = () => {
  const [dataa, setData] = useState([]);
  useEffect(() => {
    const Datas = async () => {
      const { data } = await GetEnquiry();

      setData(data);
      console.log("daaatas", data);
    };
    Datas();
  }, []);

  return (
    <main id="dashboard" className="dashboard">
      <h1>Dashboard</h1>

      <div className="stats">
        <div className="card">
          <FaEnvelope />

          <h3>128</h3>

          <p>Total Enquiries</p>
        </div>

        <div className="card">
          <FaUsers />

          <h3>845</h3>

          <p>Total Visitors</p>
        </div>

        <div className="card">
          <FaCalendarAlt />

          <h3>18</h3>

          <p>Today's Enquiries</p>
        </div>

        <div className="card">
          <FaStar />

          <h3>96%</h3>

          <p>Response Rate</p>
        </div>
      </div>

      <div className="recent">
        <h2>Recent Enquiries</h2>

        <table>
          <thead>
            <tr>
              <th>Name</th>

              <th>Email</th>

              <th>Subject</th>

              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {dataa?.length > 0
              ? dataa?.slice(0, 4).map((i) => (
                  <tr>
                    <td>{i.full_name}</td>
                    <td>{i.email}</td>
                    <td>{i.subject}</td>
                    <td>{i.message}</td>
                  </tr>
                ))
              : "Empty data"}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Dashboard;
