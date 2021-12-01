import SideVideos from "./SideVideos"

function ListVideos({videos, onVideoSelect}) {

    const videoLists = videos.map(video =>(
        <SideVideos onVideoSelect={onVideoSelect} key={video.id.videoId} video={video}/>
    ))

    return (
        <div>
            {videoLists}
        </div>
    )
}

export default ListVideos
