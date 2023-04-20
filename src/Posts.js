import { useState } from "react";
import { useLocation } from "react-router-dom";

function Posts(props) {
  // スレッド内投稿格納場所
  const [posts, setPosts] = useState();
  // スレッド情報
  const {threadData} = useLocation();

  fetch(
    "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/"
    + threadData.id +
      "/posts?offset=0",
    {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      setPosts(data);
    })
    .catch((e) => {
      window.alert("エラーが発生しました：" + e);
    });
  return (
    <div className="Posts">
      <p>{threadData.title}</p>
      <ul className="Post-list">
        {posts.map((post) => (
          <li className="Post" key={post.id}>
            {post.post}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
