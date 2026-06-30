import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../styles/dashboard.css";
import getUserCards from "../utils/getUserCards";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "../store/userSlice";

const DashBoard = () => {
  // const [userData, setUserData] = useState([]);
  const [searchEle, setSearchEle] = useState("");
  const [searchData, setSearchData] = useState([]);
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.users.userData);

  const fetchApiData = async () => {
    const response = await axios.get("https://dummyjson.com/users");
    dispatch(setUsers(response.data.users));
  };
  useEffect(() => {
    fetchApiData();
    //[] fetch data only on initially rendering
  }, []);

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
  const handleUserDetails = () => {};

  // Add new User
  const handleAddUser = () => {};

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
        <button onClinck={() => handleAddUser()}>add user</button>
      </div>
      <div>
        {searchEle !== "" ? (
          searchData.length > 0 ? (
            getUserCards(searchData)
          ) : (
            <p>No Search Items found</p>
          )
        ) : (
          getUserCards(userData)
        )}
      </div>
    </div>
  );
};

export default DashBoard;
