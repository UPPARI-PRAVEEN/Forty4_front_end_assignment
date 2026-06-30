import React from "react";

const getUserCards = (data) => {
  return (
    <div>
      {data?.map((item, index) => (
        <div key={index} className="container">
          <p>{item?.username}</p>
          <p>{item?.email}</p>
          <p>{item?.phone}</p>
          <p>{item?.university}</p>
          <button onClick={() => handleUserDetails(index)}>More Details</button>
        </div>
      ))}
    </div>
  );
};

export default getUserCards;
