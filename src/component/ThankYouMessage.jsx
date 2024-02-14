import React from "react";

const ThankYouMessage = ({ email, onCloseMessage }) => {
  return (
    <aside>
      <div className="thank">
        <img src="./check 2.svg" alt="" />
        <h2>Thanks for subscribing!.</h2>
        <p>A confirmation email has been sent to <span className="email">{email}</span>. Please open it and click the button inside to confirm your subscription.</p>
        <button type="button" onClick={onCloseMessage}>Dismiss message</button>
      </div>
    </aside>
  );
};

export default ThankYouMessage;
