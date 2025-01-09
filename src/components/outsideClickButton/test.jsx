import { useState } from 'react';

export default function UseOutsideClickTest() {
  const [showContent, setShowContent] = useState(false);

  function handleClick() {
    setShowContent(!showContent);
  }

  return (
    <>
      {showContent ? (
        <div>
          <h1>This is random information</h1>
          <p>
            Please click outside this to close the Show Content button and hide
            the content you are reading.
          </p>
        </div>
      ) : (
        <button onClick={handleClick}>Show Content</button>
      )}
    </>
  );
}