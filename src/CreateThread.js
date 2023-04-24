import React, { useState } from "react";

/* スレッド作成 */
function CreateThread() {
  const [show, setShow] = useState(false);
  function openModal() {
    setShow(true);
  }

  return (
    <div className="Create-Thread">
      <button onClick={openModal}>スレッド作成</button>
      <Modal show={show} setShow={setShow} content={<CreateThreadContents />}/>
    </div>
  );
}

/* モーダル */
function Modal({ show, setShow, content }) {
  function closeModal() {
    setShow(false);
  }

  if (show) {
    return (
      <div id="overlay" onClick={closeModal}>
        <div id="content" onClick={(e) => e.stopPropagation()}>
        <button className="Back-Button" onClick={closeModal}>戻る</button>
          {content}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
/* モーダルの中身 */
function CreateThreadContents() {

  const [title, setTitle] = useState("");

  function sendTitle() {
    const header = createHeader(title);
    fetch(
      "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads",
      header
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.error("エラーが発生しました:", e);
      });
  }

  function createHeader(obj) {
    // 送信するJSONの形にする
    const data = {
      title: obj,
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
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </form>
      <input type="button" value="投稿" onClick={sendTitle} disabled={title.length === 0} />
    </div>
  );
}

export default CreateThread;
