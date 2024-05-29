


import DateandTime from './DateandTime'
import './index.css'
import ViewCount from './ViewCount'
const VideoCard = ({result}) => {

  return (
    
    <div className="mostpopular">
      <img src={result.snippet.thumbnails.medium.url} alt="thumbnail"/>
      <p className="title">{result.snippet.title}</p>
      <p className="title1" >{result.snippet.channelTitle}</p>
      { result.statistics?
      (<ViewCount
      views= {result.statistics.viewCount}/>) :null}
      <DateandTime
      published={result.snippet.publishedAt}/>
    </div>
  )
}

export default VideoCard
