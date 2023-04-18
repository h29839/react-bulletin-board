import React, { useState } from "react";

function CreateThread() {
  const [show, setShow] = useState(false);
  function openModal() {
    setShow(true);
  }

  return (
    <div>
      <button onClick={openModal}>スレッド作成</button>
      <Modal show={show} setShow={setShow} />
    </div>
  );
}

function Modal({ show, setShow }) {
  function closeModal() {
    setShow(false);
  }

  if (show) {
    return (
      <div id="overlay" onClick={closeModal}>
        <div id="content" onClick={(e) => e.stopPropagation()}>
        <button onClick={closeModal}>閉じる</button>
          <CreateThreadModal />
        </div>
      </div>
    );
  } else {
    return null;
  }
}

function CreateThreadModal() {
  const [title, setTitle] = useState("");

  function SendTitle() {
    const header = CreateObj(title);
    fetch(
      "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads",
      header
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  function CreateObj(obj) {
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
      <input type="button" value="投稿" onClick={SendTitle} />
    </div>
  );
}

export default CreateThread;
