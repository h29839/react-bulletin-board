
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

export default Modal;