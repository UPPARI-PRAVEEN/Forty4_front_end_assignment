import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { addUser, setUsers, updateUser } from "../store/userSlice";
import "../../styles/createUser.css";

const CreateUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [isEdit, setIsEdit] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phone: "",
    age: "",
    address: {
      address: "",
      city: "",
      state: "",
      postalCode: "",
      country: "",
      coordinates: {
        lat: "",
        lng: "",
      },
    },
  });

  useEffect(() => {
    const locationState = location.state?.selectedUser;
    if (locationState && Object.keys(locationState).length > 0) {
      setIsEdit(true);
      setFormData(locationState);
    }
  }, [navigate]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    const keys = name.split(".");
    setFormData((prevData) => {
      let updatedData = { ...prevData };
      let current = updatedData;
      for (let i = 0; i < keys.length - 1; i++) {
        current[keys[i]] = { ...current[keys[i]] };
        current = current[keys[i]];
      }
      current[keys[keys.length - 1]] = value;
      return updatedData;
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEdit) {
      dispatch(updateUser(formData));
    } else {
      dispatch(addUser({ ...formData, id: Date.now() }));
    }

    navigate("/");
  };
  return (
    <div className="create-user-container">
      <form className="create-details" onSubmit={handleSubmit}>
        <h2>Basic Info</h2>

        <input
          name="firstName"
          value={formData.firstName || ""}
          onChange={handleChange}
          placeholder="First Name"
        />
        <input
          name="lastName"
          value={formData.lastName || ""}
          onChange={handleChange}
          placeholder="Last Name"
        />
        <input
          name="username"
          value={formData.username || ""}
          onChange={handleChange}
          placeholder="Username"
        />
        <input
          name="email"
          value={formData.email || ""}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          name="phone"
          value={formData.phone || ""}
          onChange={handleChange}
          placeholder="Phone"
        />
        <input
          name="age"
          value={formData.age || ""}
          onChange={handleChange}
          placeholder="Age"
        />

        <h2>Address</h2>

        <input
          name="address.address"
          value={formData.address?.address || ""}
          onChange={handleChange}
          placeholder="Address"
        />
        <input
          name="address.city"
          value={formData.address?.city || ""}
          onChange={handleChange}
          placeholder="City"
        />
        <input
          name="address.state"
          value={formData.address?.state || ""}
          onChange={handleChange}
          placeholder="State"
        />
        <input
          name="address.postalCode"
          value={formData.address?.postalCode || ""}
          onChange={handleChange}
          placeholder="Postal Code"
        />
        <input
          name="address.country"
          value={formData.address?.country || ""}
          onChange={handleChange}
          placeholder="Country"
        />

        <h3>Geo Location</h3>

        <input
          name="address.coordinates.lat"
          value={formData.address?.coordinates?.lat || ""}
          onChange={handleChange}
          placeholder="Latitude"
        />
        <input
          name="address.coordinates.lng"
          value={formData.address?.coordinates?.lng || ""}
          onChange={handleChange}
          placeholder="Longitude"
        />

        <button type="submit">Save</button>
      </form>
      <div>
        <button onClick={() => window.history.back()}>Back</button>
      </div>
    </div>
  );
};

export default CreateUser;
