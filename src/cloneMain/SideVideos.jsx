function SideVideos({video, onVideoSelect}) {
    return (
        <>
            <div className="videoItems" onClick={() => onVideoSelect(video)}>
                <img src={video.snippet.thumbnails.medium.url} alt="overlay" style={{marginRight: "20px"}} />
                <div className="videoTitle">
                    <b>{video.snippet.title}</b>
                </div>
            </div>
        </>
    )
}

export default SideVideos
