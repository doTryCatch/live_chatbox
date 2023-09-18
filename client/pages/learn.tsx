import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const maxCount = 5; // Change this value to set the number of iterations

  useEffect(() => {
    if (count < maxCount) {
      console.log(`Iteration ${count + 1}`);
      // You can place your logic here that you want to run multiple times

      // Increment the count in the state
      setCount(count + 1);
    }
  }, []);

  return (
    <div className='text-white'>
        {count}
    </div>
  );
}

export default MyComponent;
