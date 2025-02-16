import { useEffect, useState } from 'react'
import './App.css'
import {getData, getRandomUser} from './Component/getData'
import PostCard from './Component/postCard';
import UserCard from './Component/userCard';



function App() {
  const [data, setData] = useState(null);
  const [userData, setUserData] = useState(null);
  
  
  //want to fetch data when this comp mount on screen
  useEffect(()=>{
    getData().then((post)=> {
      setData(post);
      // console.log(post);
    });
  },[]);

  useEffect(()=>{
    getRandomUser().then((user)=> {
      setUserData(user.results[0]);
    })
  },[])

  const refresh = ()=>{
    getRandomUser().then((user)=> {
      setUserData(user.results[0]);
    })
  }

  return (
    <div>
      {/* // because we get only one user at atime so not use map   */}
      {userData && <UserCard data={userData} /> }
      <button onClick={refresh}>Refresh Data</button>
      <br/>
      <br/>
      <br/>
      {
        data ? (
          data.map((e)=> <PostCard name={e.name} body = {e.body}/>) 
          ):( 
          <p>No Data Available</p>
          )}
    </div>
  )
}

export default App
