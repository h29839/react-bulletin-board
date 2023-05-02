import React, { useState } from "react";
import Modal from "./Modal";

/* スレッド作成コンポーネント */
function CreateThread() {
  const [showThreadModal, setShowThreadModal] = useState(false);
  function openModal() {
    setShowThreadModal(true);
  }

  return (
    <div className="Create-Thread">
      <button className="Button" onClick={openModal}>スレッド作成</button>
      <Modal show={showThreadModal} setShow={setShowThreadModal} content={<CreateThreadContents />}/>
    </div>
  );
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
      <input type="button" className="Button" value="作成する" onClick={sendTitle} disabled={title.length === 0} />
    </div>
  );
}

export default CreateThread;