import React, { useState, useEffect } from 'react'

export default function User() {
    const [userList, setUserList]  = useState([]);
    const [pending, setPending]  = useState(false)


    function handleFetchUsers(){
        fetchAllUsers();
    }
    async function fetchAllUsers(){
        try{
            const apiResponse = await fetch('https://dummyjson.com/users');
            const result = await apiResponse.json();
            setPending(true)
            if(result.users){
                setUserList(result.users)
                setPending(false)
            }
            else{
                setUserList([])
                setPending(false)
            }
            // console.log(userList)
        }
        catch(error){
            console.log(error)
        }
    }
    // useEffect(()=>{
    //     fetchAllUsers()
    // }, [])
    console.log(userList);
    if (pending) return <h1>Loading...</h1>;
  return (
    <>
      <h1>All User List </h1>
      <button onClick={handleFetchUsers}>fetch user list</button>
      <ul>
        {userList && userList.length>0 ? userList.map((user, index) => <li key={index}>{user.firstName} {user.lastName}</li>) : null}
      </ul>
    </>
  )
}
