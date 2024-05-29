import React, { useState, useEffect } from 'react';

const ViewCount = ({ views }) => {
  const [view, setView] = useState(1000000);
  const [displayCount, setDisplayCount] = useState(null);

  useEffect(() => {
    let count = (views / view) - ((views % view) / view);
    if (count === 0) {
      setView(1000);
      count = (views / 1000) - ((views % 1000) / 1000);
    }
    setDisplayCount(count);
  }, [views, view]);

  return (
    <div className="title1" >
      {view === 1000000 ? (
        <p>{displayCount}M</p>
      ) : (
        <p>{displayCount}K</p>
      )}
    </div>
  );
};

export default ViewCount;
