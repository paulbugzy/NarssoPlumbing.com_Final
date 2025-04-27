'use client';
import { useState, lazy, Suspense } from "react"
//Import Css
import styles from './MainSlider.module.css'
//Import Sections
const YoutubeVideo = lazy(() => import('../Common/YoutubeVideo'))
const Modal = lazy(() => import('../Common/Modal'))
//Import Data
import {MainSliderData} from './MainSliderData'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, EffectCreative } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-creative';
// Layout Swiper
const MainSlider = () => {
	const [openModal, setOpenModal] = useState(false);
	const [youtubeVideoCode, setYoutubeVideoCode] = useState(false);
	if (!MainSliderData) return null;
	return (
		<>
			<div className={`${styles.mainslider__wrapper} relative overflow-hidden`}>
				<Swiper
					className="hero-slider"
					loop={true}
					speed={600}
					autoplay={{
						delay: 3200,
						pauseOnMouseEnter: true,
						disableOnInteraction: false
					}}
					grabCursor={true}
					effect={'creative'}
					creativeEffect={{
						"prev": {
							"translate": ["-20%", 0, -1],
						},
						"next": {
							"translate": ["100%", 0, 0],
						}
					}}
					spaceBetween={0}
					slidesPerView={1}
					navigation={{
						prevEl: '#jsmain__prev',
						nextEl: '#jsmain__next',
					}}
					modules={[Autoplay, Navigation, EffectCreative]}
				>
					{MainSliderData.map((props) => (
						<SwiperSlide key={props.id} className={`overflow-hidden`}>
							<div className={`${styles.mainslider__item} relative w-full`}>
								<div className={styles.mainslider__bg}>
									<picture>
										<source srcSet={props.bgimg_sm_webp} media="(max-width: 767px)" type="image/webp" />
										<source srcSet={props.bgimg_sm_jpg} media="(max-width: 767px)" type="image/jpg" />
										<source srcSet={props.bgimg_md_webp} media="(max-width: 1024px)" type="image/webp" />
										<source srcSet={props.bgimg_md_jpg} media="(max-width: 1024px)" type="image/jpg" />
										<source srcSet={props.bgimg_lg_webp} type="image/webp" />
										<source srcSet={props.bgimg_lg_jpg} type="image/jpg" />
										<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABzAAAALtAQMAAAB9yGCfAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAANdJREFUeNrswYEAAAAAgKD9qRepAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABg9uBAAAAAAADI/7URVFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVWlPTgkAAAAABD0/7U3DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAW6P5AAHjDpFrAAAAAElFTkSuQmCC"
											className="size-full block object-cover"
											alt={props.title}
										/>
									</picture>
								</div>
								<div className={`${styles.mainslider__img} ${styles.mainslider__img_custom1} absolute mainslider__img bottom-0 left-0`}>
									<picture>
										{props.srcimg_lg_webp ? (
											<source media="(min-width: 1025px)" srcSet={props.srcimg_lg_webp} type="image/webp" />
										):null}
										{props.srcimg_lg_png ? (
											<source media="(min-width: 1025px)" srcSet={props.srcimg_lg_png} type="image/png" />
										):null}
										{props.srcimg_md_webp ? (
											<source media="(min-width: 768px)" srcSet={props.srcimg_md_webp} type="image/webp" />
										):null}
										{props.srcimg_md_png ? (
											<source media="(min-width: 768px)" srcSet={props.srcimg_md_png} type="image/png" />
										):null}
										<img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
											alt={props.title}
										 />
									</picture>
								</div>
								{props.layout === 'type1' ? (
									<div className={`${styles.mainslider__content} obj__inner-center obj__put-in z-[2] type__animation`}>
										<div className={`${styles.type1__limiter} relative`}>
											<div className={`${styles.type1__title} relative text-left`}>
												{props.youtubeVideoCode ? (
													<div
														className={`${styles.btn__round} btn__round_icon obj__inner-center icon-808557 unselectable`}
														onClick={() => {
															setOpenModal(true);
															setYoutubeVideoCode(props.youtubeVideoCode);
														}}
													>
														<span></span>
													</div>
												):null}
												<div className={`${styles.type1__title_text} relative`}>
													{props.title}
												</div>
											</div>
											<p className={`${styles.type1__text} text-left`}>
												{props.text}
											</p>
										</div>
									</div>
								):null}
								{props.layout === 'type2' ? (
									<div className={`${styles.mainslider__content} obj__inner-center obj__put-in z-[2] type__animation`}>
										<div className={styles.type2__limiter}>
											<div className={`${styles.type2__title}`}>
												{props.title}
											</div>
											<hr />
											<p className={`${styles.type2__text}`}>
												{props.text}
											</p>
										</div>
									</div>
								):null}
							</div>
						</SwiperSlide>
					))}
				</Swiper>
				<Suspense>
					<Modal
						openModal={openModal}
						onClose={() => setOpenModal(false)}
						dataModalSize="modal__sizeXl"
						dataModalClass="modal__noinner"
					>
						<YoutubeVideo dataYoutubeVideoCode={youtubeVideoCode} />
					</Modal>
				</Suspense>
				<div className={`${styles.jsswiper__btn_holder} jsswiper__btn_holder absolute z-[2]`}>
					<div id='jsmain__prev' className='jsswiper__btn jsswiper__prev obj__inner-center'>
						<i className="icon-545682"></i>
					</div>
					<div id='jsmain__next' className='jsswiper__btn jsswiper__next obj__inner-center'>
						<i className="icon-545682"></i>
					</div>
				</div>
				<style jsx global>{`
					.mainslider__img{
						opacity:0;
						transition: opacity 0.3s  cubic-bezier(0.770, 0.125, 0.265, 1.040);
					}
					.swiper-slide-active .mainslider__img,
					.swiper-slide-visible .mainslider__img{
						opacity:1;
					}
					.type__animation{
						will-change: transform, opacity;
						opacity: 0;
						filter: blur(7px);
						transition: 0.1s transform 0.15s, opacity 0.35s linear 0.35s, filter 0.4s linear 0.35s;
					}
					.swiper-slide-active .type__animation{
						opacity: 1;
						filter: blur(0px);
					}
					@media (hover: hover) {
						.type__animation{
							will-change: transform, opacity;
							opacity: 0;
							filter: blur(7px);
							transition: 0.1s transform 0.15s, opacity 0.35s linear 0.35s, filter 0.4s linear 0.35s;
						}
						.swiper-slide-active .type__animation{
							opacity: 1;
							filter: blur(0px);
						}
					}
					@media (hover: none) {
						.type__animation{
							will-change: transform, opacity;
							opacity: 0;
							filter: blur(7px);
							transition: 0.1s transform, opacity 0.2s linear 0.3s, filter 0.25s linear 0.3s;
						}
						.swiper-slide-active .type__animation{
							opacity: 1;
							filter: blur(0px);
						}
					}
				`}</style>
			</div>
		</>
	)
};
export default MainSlider;