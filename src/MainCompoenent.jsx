import React, { useEffect } from 'react';
import SuggestionList from './SuggesstionList';
import Videos from './Videos';
import { useDispatch } from 'react-redux';
import { setsuggestion } from '../Components/homeSlice';


const MainComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = () => {
      dispatch(setsuggestion(false));
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [dispatch]);


  return (
    <div>
      <SuggestionList />
      <Videos />
    </div>
  );
};

export default MainComponent;
