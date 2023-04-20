import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';

/* スレッド一覧 */ 
function Threads(){
 //　取得スレッド格納場所
 const [threadsData, setThreadsData] = useState([]);

 useEffect(()=> {
  fetch('https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads?offset=0',
  {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  })
  .then(res=>res.json())
  .then(data=>{
    // 取得したデータをリストに保存
    setThreadsData(data);
    console.log(data);
  }).catch(e=>{
    window.alert("エラーが起きました");
  })
 },[]);
 return (
  <div className='Threads'>
    <p>新着スレッド</p>
   <ul className='Thread-list'>
    {
     threadsData.map(thread=>
      <li className='Thread' key={thread.id}>
        <Link to={{pathname:'/' + thread.id, state:{thread}}}>{thread.title}</Link>
      </li>
     )
    }
   </ul>
  </div>
 )
}

export default Threads;