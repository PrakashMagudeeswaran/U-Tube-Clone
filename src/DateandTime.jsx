import React, { useEffect, useState } from 'react';

const DateandTime = ({ published }) => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const datePublished = new Date(published);
    const dateNow = new Date();

    let calculatedTime = dateNow.getFullYear() - datePublished.getFullYear();
    if (calculatedTime > 0) {
      setTime(`${calculatedTime} year${calculatedTime > 1 ? 's' : ''} ago`);
      return;
    }

    calculatedTime = dateNow.getMonth() - datePublished.getMonth();
    if (calculatedTime > 0) {
      setTime(`${calculatedTime} month${calculatedTime > 1 ? 's' : ''} ago`);
      return;
    }

    calculatedTime = dateNow.getDate() - datePublished.getDate();
    if (calculatedTime > 0) {
      setTime(`${calculatedTime} day${calculatedTime > 1 ? 's' : ''} ago`);
      return;
    }

    calculatedTime = dateNow.getHours() - datePublished.getHours();
    if (calculatedTime > 0) {
      setTime(`${calculatedTime} hour${calculatedTime > 1 ? 's' : ''} ago`);
      return;
    }

    calculatedTime = dateNow.getMinutes() - datePublished.getMinutes();
    if (calculatedTime > 0) {
      setTime(`${calculatedTime} minute${calculatedTime > 1 ? 's' : ''} ago`);
      return;
    }

    setTime('Just now');
  }, [published]);

  return (
    <div className="title1">
      <p>{time}</p>
    </div>
  );
};

export default DateandTime;
