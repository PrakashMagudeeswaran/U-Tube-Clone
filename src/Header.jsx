import React, { useState} from 'react';
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { hamburgfunc, setkeyword, setsuggestion } from '../Components/homeSlice';
import useSearchAPI from '../customHooks/useSearchAPI';
import { HAMBURG_LINK, LOGO_LINK, USER_LINK } from '../Components/Links';
import useKeyword from '../customHooks/useKeyword';
import useHomeAPI from '../customHooks/useHomeAPI';

const Header = () => {

  const suggestion = useSelector((store) => store.home.suggestion);
  const suggestions = useSelector((store) => store.home.search);
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(hamburgfunc());
  };

  const searchSuggestions = (e) => {
    setQuery(e.target.value);
  };

  useSearchAPI(query);

  const handleSuggestionClick = (suggest) => {
    setQuery(suggest);
    dispatch(setsuggestion(false));
  };
  const handleClick=()=>{
  dispatch(setkeyword(`${query}`))
  setQuery('')
  }

  useKeyword();

  
 

  
 
  return (
    <>
      <div className="header">
        <div>
          <img
            onClick={handleToggle}
            className="left"
            src={HAMBURG_LINK}
            height="40px"
            alt="hamburger"
          />
          <img src={LOGO_LINK} height="40px" alt="logo" />
        </div>

        <div className="middle">
          <input
            onChange={searchSuggestions}
            onFocus={() => dispatch(setsuggestion(true))}
            value={query}
            type="text"
          />
          <button onClick={handleClick}>Search</button>
        </div>
        <img className="right" src={USER_LINK} height="40px" alt="user" />
      </div>

      {suggestion && suggestions && (
        <div  className="listwhole">
          {suggestions[1].map((suggest) => (
            <li
              key={suggest}
              onClick={() => handleSuggestionClick(suggest)}
              className="list"
            >
              {suggest}
            </li>
          ))}
        </div>
      )}
    </>
  );
};

export default Header;
