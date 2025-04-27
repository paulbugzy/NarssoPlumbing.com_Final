'use client';
import styles from './EmbedVideo.module.css';
import { VscDebugPause } from 'react-icons/vsc';
import { BsYoutube } from 'react-icons/bs';

import React, { useRef, useState } from "react";
function EmbedVideo({dataSrc, dataPoster, dataBtnSize='btnSize_md'}){
	{dataSrc}
	const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);
	const togglePlay = () => {
		isPlaying ? videoRef.current.pause() : videoRef.current.play();
        setIsPlaying(!isPlaying);
    };
	return(
		<>
			<video
				ref={videoRef}
				poster={dataPoster}
				muted loop playsInline
			>
				<source src={dataSrc} type="video/mp4" />
			</video>
			<button
				onClick={togglePlay}
				className={`
					${styles.video__icon} ${styles[dataBtnSize]}
					${!isPlaying ? styles.video__iconCustom : null}
					video__icon obj__put-in obj__inner-center z-[1]
				`}>
				{isPlaying ? <VscDebugPause /> : <BsYoutube />}
			</button>
		</>
	)
};
export default EmbedVideo;