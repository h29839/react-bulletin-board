import React, { useState } from 'react';
import Modal from './Modal';
import {useParams} from 'react-router-dom';

/* 投稿作成コンポーネント */
function CreatePost() {
  const [showPost, setShowPost] = useState(false);
  const threadId = useParams();
  function openModal() {
    setShowPost(true);
  }

  return (
    <div>
      <button onClick={openModal}>投稿</button>
      <Modal show={showPost} setShow={setShowPost} content={<CreatePostContents id={threadId} />}/>
    </div>
  );
}

/* スレッド作成の中身 */
function CreatePostContents(props) {

  const [post, setPost] = useState("");

  function sendPost() {
    const header = createHeader(post);
      // スレッド情報
    const threadId = props.id.threadId;
    console.log(threadId);
    //useParams();
    fetch(
      "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/"
      + threadId + "/posts",header
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        window.alart("エラーが発生しました:", error);
      });
  }

  function createHeader(obj) {
    // 送信するJSONの形にする
    const data = {
      post: obj,
    };
    // ヘッダーオブジェクトを返す
    const headerObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    return headerObj;
  }

  return (
    <div>
      <form>
        <input
          type="text"
          value={post}
          onChange={(e) => setPost(e.target.value)}
        />
      </form>
      <input type="button" value="投稿する" onClick={sendPost} disabled={post.length === 0} />
    </div>
  );
}

export default CreatePost;
