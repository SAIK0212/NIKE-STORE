import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { backEndURL } from "../App";
import axios from "axios";
import "../styles/subscribe.css";

const Subscribers = ({ token }) => {
  const [emails, setEmails] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredEmails, setFilteredEmails] = useState([]);

  const fetchSubscribers = async () => {
    if (!token) return;
    try {
      const response = await axios.post(
        backEndURL + "/api/email/subscribers",
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setEmails(response.data.emails);
        setFilteredEmails(response.data.emails);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchSubscribers();
  }, [token]);

  useEffect(() => {
    const filtered = emails.filter((entry) =>
      entry.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredEmails(filtered);
  }, [searchTerm, emails]);

  return (
    <div className="subscribers-container">
      <h2 className="subscribers-title">Subscribers</h2>

      <input
        type="text"
        placeholder="Search emails..."
        className="subscribers-search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {filteredEmails.length === 0 ? (
        <p className="subscribers-empty">No matching subscribers found.</p>
      ) : (
        <ul className="subscribers-list">
          {filteredEmails.map((entry, index) => (
            <li key={index} className="subscribers-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="subscribers-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              {entry.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Subscribers;
