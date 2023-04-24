import React, { useState } from "react";
import {Modal} from "/CreateThread"
import {useParams} from "react-router-dom";

/* スレッド作成コンポーネント */
function CreatePost() {
  const [show, setShow] = useState(false);
  function openModal() {
    setShow(true);
  }

  return (
    <div>
      <button onClick={openModal}>投稿</button>
      <Modal show={show} setShow={setShow} content={<CreatePostContents />}/>
    </div>
  );
}

/* スレッド作成の中身 */
function CreatePostContents() {

  const [post, setPost] = useState("");

  function sendPost() {
    const header = createHeader(post);
      // スレッド情報
    const { threadId } = useParams();
    fetch(
      "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads"
      + threadId + "/posts",
      header
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
          onChange={(e) => setTitle(e.target.value)}
        />
      </form>
      <input type="button" value="投稿" onClick={sendPost} disabled={post.length === 0} />
    </div>
  );
}

export default CreatePost;
