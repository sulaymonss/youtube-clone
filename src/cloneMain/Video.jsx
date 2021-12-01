function Video({video: {id: {videoId}, snippet: {title, channelTitle, description}}}) {

    if(!videoId) return <p className="noResult">Search for videos you need!</p>
    const videoSrc = `https://www.youtube.com/embed/${videoId}`;

    return (
        <>
            <div className="videoIframe">
                <iframe src={videoSrc} allowFullScreen title="Video player" frameBorder="0"></iframe>
            </div>
            <div className="videoInfo">
                <h1 className="videoTitle">{title}</h1>
                <h3 className="channelTitle">{channelTitle}</h3>
                <p className="videoDesc">{description}</p>          
            </div>
        </>
    )
}

export default Video
