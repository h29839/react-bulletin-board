import { useEffect, useState } from 'react';
import { useLocation} from 'react-router-dom';
import CreatePost from './CreatePost';

function Posts() {
  // スレッド内投稿格納場所
  const [postsList, setPostsList] = useState([]);
  // スレッド情報
  const threadData = useLocation();

  useEffect(()=>{
    fetch(
      'https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/'
      + threadData.pathname +
        '/posts?offset=0',
      {
        method: 'GET',
        headers: {
          Accept: 'application/json'
        }
     })
    .then((res)=>res.json())
    .then((data) => {
      // 取得したデータをリストに保存
      setPostsList(data["posts"]);
    })
    .catch((e) => {
      window.alert("エラーが発生しました：" + e);
    });
  },[threadData]);
  
  return (
    <div className="Posts">
      <p>{threadData.state.title}</p>
      <p>投稿一覧</p>
      <ul className="Post-list">
        {
          postsList.map(postData=>
            <li className="Post" key={postData.id}>
              {postData.post}
            </li>
          )
        }
      </ul>
      <CreatePost />
    </div>
  );
}

export default Posts;
