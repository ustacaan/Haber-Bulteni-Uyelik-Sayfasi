import React, { useState } from "react";
import ThankYouMessage from "./ThankYouMessage"; // Import the new component

export default function Age() {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showImages, setShowImages] = useState(true);

  function handleEmailChange(event) {
    setEmail(event.target.value);
    setIsValidEmail(true);
  }

  function handleCloseMessage (){
    setIsSubmitted(false);
    setShowImages(true);
    setEmail('');
  };

  function handleSubmit (event){
    event.preventDefault();

    if (!validateEmail(email)) {
      setIsValidEmail(false);
      return;
    }

    setIsSubmitted(true);
    setShowImages(false);
  };

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  return (
    <div className="section">
      {!isSubmitted ? (
        <aside>
          <h1>Stay updated!</h1>
        <p>Join 60,000+ product managers receiving <span className="sun"></span> monthly <span className="text"></span> updates on:</p>

        <li className="textItem">
          <p><img src="./check.svg" alt="" />Product discovery and building what matters</p>
          <p><img src="./check.svg" alt="" />Measuring to ensure updates are a success</p>
          <p><img src="./check.svg" alt="" />And much more!</p>
        </li>
      
        <form onSubmit={handleSubmit}>
          
          <div className="row">
            <h4>Email address</h4>
            {!isValidEmail && <p >Valid email required</p>}
          </div>
            
          <input
              type="email" name="email"
              placeholder="email@company.com"
              value={isValidEmail ? email : "ash#loremcompany.com"}
              onChange={handleEmailChange}
              style={{
                  borderColor: isValidEmail ? "" : "#FF5252)",
                  background: isValidEmail ? "" : "#F4F4F4",
                  color: isValidEmail ? "" : "#FF6155",
              }}
            />
            
            <button type="submit">Subscribe to monthly newsletter</button>
          
        </form>
        </aside>
      ) : (
        <ThankYouMessage email={email} onCloseMessage={handleCloseMessage} />
      )}

      {showImages && (
        <article>
          <img src="./letter.png" alt="" />
          <img src="./letter2.png" alt="" />
        </article>
      )}
    </div>
  );
}
