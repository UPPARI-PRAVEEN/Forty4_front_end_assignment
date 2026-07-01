import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import "../../styles/userDetails.css";

const UserDetails = () => {
  const [selectedUser, setSelectedUser] = useState({});
  const userData = useSelector((state) => state.users.userData);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const index = location.state?.index;
    setSelectedUser(userData[index]);
  }, [location, userData]);

    const handleEdit = () => {
    // Navigate to the edit page with the selected user's data
    navigate(`/create`, { state: { selectedUser: selectedUser } });
  }

  return (
    <div className="user-details-container">
      <div className="user-details-header">
        <h1>UserDetails</h1>
      </div>
      <div className="user-details">
        <div>
            <img src={selectedUser?.image} alt="user" />
        </div>
        <h2>Basic Info</h2>
        <p>
          <b>Name:</b> {selectedUser?.firstName} {selectedUser?.lastName}
        </p>
        <p>
          <b>Username:</b> {selectedUser?.username}
        </p>
        <p>
          <b>Email:</b> {selectedUser?.email}
        </p>
        <p>
          <b>Phone:</b> {selectedUser?.phone}
        </p>
        <p>
          <b>Age:</b> {selectedUser?.age}
        </p>
        <p>
          <b>Gender:</b> {selectedUser?.gender}
        </p>
        <p>
          <b>Birth Date:</b> {selectedUser?.birthDate}
        </p>

        <h2>Address</h2>
        <p>
          <b>Address:</b> {selectedUser?.address?.address}
        </p>
        <p>
          <b>City:</b> {selectedUser?.address?.city}
        </p>
        <p>
          <b>State:</b> {selectedUser?.address?.state}
        </p>
        <p>
          <b>Postal Code:</b> {selectedUser?.address?.postalCode}
        </p>
        <p>
          <b>Country:</b> {selectedUser?.address?.country}
        </p>

        <h3>Geo Location</h3>
        <p>
          <b>Latitude:</b> {selectedUser?.address?.coordinates?.lat}
        </p>
        <p>
          <b>Longitude:</b> {selectedUser?.address?.coordinates?.lng}
        </p>       
      </div>
      <div>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={() => window.history.back()}>Back</button>
      </div>
    </div>
  );
};

export default UserDetails;
