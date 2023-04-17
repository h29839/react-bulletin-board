import React, {useState, useEffect} from 'react'

const Threads = () => {
 //　スレッド一覧取得
 //　スレッド格納場所
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
  })
 },[]);
 return (
  <div className='Threads'>
    <p>新着スレッド</p>
   <ul className='Thread-list'>
    {
     threadsData.map(thread=>
      <li className='Thread' key={thread.id}>{thread.title}</li>
     )
    }
   </ul>
  </div>
 )
}

export default Threads;