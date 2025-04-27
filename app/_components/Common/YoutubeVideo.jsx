function YoutubeVideo({dataYoutubeVideoCode}){
	const autoplay = '?autoplay=1&muted=1';
	return(
		<>
			<div className="video-responsive">
				<iframe allow='autoplay' src={`https://www.youtube.com/embed/${dataYoutubeVideoCode}${autoplay}`}></iframe>
			</div>
		</>
	)
};
export default YoutubeVideo;
