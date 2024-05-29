import React,{useEffect} from 'react'
import { useSearchParams } from 'react-router-dom'
import './index.css'
import { useDispatch } from 'react-redux';
import { setsuggestion } from '../Components/homeSlice';
import LiveComment from './LiveComment';
import CommentContainer from './CommentContainer';

const VideoFinal = () => {
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
  const [searchParams]=useSearchParams()
  console.log(searchParams.get('v'))
  const videoId=`https://www.youtube.com/embed/${searchParams.get('v')}?&autoplay=1&fullscreen=1`
  return (
    <>
    <div className="finalpage" >
      <iframe className="video" src={videoId} title="YouTube video player"
      allow="accelerometer;autoplay;clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      <div className='finalpage2'>
      <LiveComment/>
       <CommentContainer/></div>
    </div>
    </>
  )
}

export default VideoFinal
