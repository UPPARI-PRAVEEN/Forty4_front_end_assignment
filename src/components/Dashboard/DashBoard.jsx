import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../styles/dashboard.css";
import getUserCards from "../utils/getUserCards";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "../store/userSlice";
import { useNavigate } from "react-router-dom";

const DashBoard = () => {
  // const [userData, setUserData] = useState([]);
  const [searchEle, setSearchEle] = useState("");
  const [searchData, setSearchData] = useState([]);
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.users.userData);
  const navigate = useNavigate();

  const fetchApiData = async () => {
    const response = await axios.get("https://dummyjson.com/users");
    dispatch(setUsers(response.data.users));
  };
  useEffect(() => {
    if (userData.length === 0) {
      fetchApiData();
    }
  }, [userData]);

  useEffect(() => {
    // Search data based "Name"
    const handleSearch = () => {
      console.log("searchEle", searchEle);
      const filteredData = userData.filter((item) => {
        return item.username.toLowerCase().includes(searchEle.toLowerCase());
      });
      setSearchData(filteredData);
    };

    handleSearch();
  }, [searchEle]);

  // get all userDetails
  const handleUserDetails = (index) => {
    navigate(`/userDetails`, { state: { index: index } });
  };

  // Add new User
  const handleAddUser = () => {
    console.log("Add User");
    navigate(`/create`);

  };

  return (
    <div className="main-container">
      {/* Search */}
      <div>
        <p>Search</p>
        <input
          type="text"
          value={searchEle}
          onChange={(e) => setSearchEle(e.target.value)}
        />
      </div>
      {/* add User */}
      <div>
        <button onClick={handleAddUser}>add user</button>
      </div>
      <div>
        {searchEle !== "" ? (
          searchData.length > 0 ? (
            getUserCards(searchData,handleUserDetails)
          ) : (
            <p>No Search Items found</p>
          )
        ) : (
          getUserCards(userData,handleUserDetails)
        )}
      </div>
    </div>
  );
};

export default DashBoard;
