import React from "react";

const getUserCards = (data,handleUserDetails) => {
  console.log("data", data[0]);
  return (
    <div>
      {data?.map((item, index) => (
        <div key={index} className="container">
          <div>
            <img src={item?.image} alt="user" />
        </div>
          <p>{item?.username}</p>
          <p>{item?.email}</p>
          <p>{item?.phone}</p>
          <p>{item?.university}</p>
          <button onClick={() => handleUserDetails(index,handleUserDetails)}>More Details</button>
        </div>
      ))}
    </div>
  );
};

export default getUserCards;
