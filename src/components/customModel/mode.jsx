


export default function ModalShow({ id, header, footer, children }) {
    return (
      <div id={id || "Modal"} className="modal">
        <div className="content">
          {/* Header Section */}
          <div className="header">
            <span className="close-modal-icon">&times;</span>
            <h3>{header || "Custom Header"}</h3>
          </div>
  
          {/* Body Section */}
          <div className="body">{children || "Custom Body Content"}</div>
  
          {/* Footer Section */}
          <div className="footer">{footer || "Custom Footer"}</div>
        </div>
      </div>
    );
  }