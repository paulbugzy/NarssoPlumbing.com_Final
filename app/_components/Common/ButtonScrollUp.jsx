'use client';
import React, { useEffect } from 'react';
import styles from './ButtonScrollUp.module.css';
import {scrollTop} from '../../../public/js/utilitie'
const ButtonScrollUp = () => {
	useEffect(() => {
		scrollTop();
	}, []);
	return (
		<>
			<div id="js-backtotop" className={`${styles.backToTop} icon-694055 fixed backToTop cursor-pointer`}></div>
			<style jsx global>{`
				.disable__scroll .backToTop{
					opacity: 0;
				}
				@media (min-width: 768px) {
					.backToTop.tt-show {
						bottom: 50px;
					}
				}
				@media (max-width: 767px) {
					.backToTop.tt-show {
						bottom: 40px;
					}
				}
			`}</style>
		</>
	)
};
export default ButtonScrollUp;