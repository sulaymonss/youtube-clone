import './Style.css';
import { useState } from 'react';
import URL from './cloneMain/api/URL';
import Search from './cloneMain/Search';
import Video from './cloneMain/Video';
import ListVideos from './cloneMain/ListVideos';

function App() {

  const [videos, setVideos] = useState([])
  const [selectedVideos, setSelectedVideos] = useState({id: {}, snippet: {}})

  async function videoSubmit (searchTerm){
    const {data: {items : videos}} = await URL.get('search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyBE_6W1AexigqoztZxRWoPT_pNgQe5VD9Y',
        q: searchTerm
      }
    })
    
    setVideos(videos)
    setSelectedVideos(videos[0])

  }

  return (
    <>
      <div className="search">
        <Search onSubmit={videoSubmit}/>
      </div>
      <div className="videoMain">
        <div className="videoSec">
          <Video video={selectedVideos}/>
        </div>
        <div className="videoLists">
          <ListVideos videos={videos} onVideoSelect={setSelectedVideos}/>
        </div>
      </div>
    </>
  );
}

export default App;
