import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../../styles/dashboard.css'

const DashBoard = () => {
  const [userData,setUserData] = useState([])
  const [searchEle,setSearchEle] = useState("")
  const [searchData,setSearchData] = useState([])

  const fetchApiData = async()=>{
    const response = await axios.get('https://dummyjson.com/users')
    setUserData(response.data.users)
  }
  useEffect(()=>{
    fetchApiData()
    //[] fetch data only on initially rendering
  },[])


  useEffect(()=>{
    // Search data based "Name"
    const handleSearch =()=>{}

    handleSearch()
    
  },[searchEle])

  // get all userDetails
  const handleUserDetails =()=>{}

  // Add new User
  const handleAddUser =()=>{}



  return (
    <div className='main-container'>
      <div>
        <p>Search</p>
        <input type='text' value={searchEle} onChange={((e)=> setSearchEle(e.target.value))} />
      </div>
      <div>
        <button onClinck ={()=> handleAddUser()}>add user</button>
      </div>
      {userData?.map((item,index)=>{
        return (
          <div key={index} className='containder'>
            <p>{item?.username}</p>
            <p>{item?.email}</p>
            <p>{item?.phone}</p>
            <p>{item?.university}</p>
            <button onClick={()=> handleUserDetails(index)}>More Datails</button>
          </div>
        )
      })}
    </div>
  )
}

export default DashBoard