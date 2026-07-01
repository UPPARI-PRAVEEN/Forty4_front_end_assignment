import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const UserDetails = () => {
  const [selectedUser, setSelectedUser] = useState({});
  const userData = useSelector((state) => state.users.userData);
  const location = useLocation();

  useEffect(() => {
    const index = location.state?.index;
    setSelectedUser(userData[index]);
  }, [location, userData]);

  return (
    <div>
      <h1>UserDetails</h1>
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
        <h2>Other Info</h2>
        <p>
          <b>IP:</b> {selectedUser?.ip}
        </p>
        <p>
          <b>MAC Address:</b> {selectedUser?.macAddress}
        </p>
        <p>
          <b>Role:</b> {selectedUser?.role}
        </p>
      </div>
      <div>
        <button onClick={() => window.history.back()}>Back</button>
      </div>
    </div>
  );
};

export default UserDetails;
