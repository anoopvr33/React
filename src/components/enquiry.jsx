import React, { useEffect, useState } from "react";
import { GetEnquiry } from "../hook/enquryHook";

const Enquiry = () => {
  const [enquiry, setEnquiry] = useState([]);

  useEffect(() => {
    const Datas = async () => {
      const { data } = await GetEnquiry();
      setEnquiry(data);
    };
    Datas();
  }, []);
  return (
    <main id="enquiry" className="dashboard">
      <div className="recent">
        <h2>Recent Enquiries</h2>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Subject</th>
              <th>Message</th>
            </tr>
          </thead>

          <tbody>
            {enquiry?.length > 0
              ? enquiry?.map((i) => (
                  <tr>
                    <td>{i.full_name}</td>
                    <td>{i.email}</td>
                    <td>{i.subject}</td>
                    <td>{i.message}</td>
                  </tr>
                ))
              : "Empty Data"}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Enquiry;
