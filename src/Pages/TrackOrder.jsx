import React, { useState, useEffect } from 'react';

export default function TrackOrder() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
//   useEffect(() => {
//     // Update the document title using the browser API
//     document.title = `You clicked ${count} times`;
//   });
document.title = `You clicked ${count} times`;
  return (
    <div>
      <p>You clicked {count} time</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
        
      </button>
     
    </div>
  );
}