'use client';
import { useState } from "react"
import styles from './ReviewsCarusel.module.css'
import SectionTitle from '../Common/SectionTitle'
import {ReviewsCaruselData} from './ReviewsCaruselData'
import RatingView from '../Common/RatingView'
import Modal from "../Common/Modal"
import YoutubeVideo from "../Common/YoutubeVideo"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCreative } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-creative';
// Layout Swiper
const ReviewsCarusel = () => {
	const [openModal, setOpenModal] = useState(false);
	const [youtubeVideoCode, setYoutubeVideoCode] = useState(false);
	if (!ReviewsCaruselData) return null;
	return (
		<>
			<div className="section__indent">
				<div className={`${styles.reviews_carusel} reviews_carusel relative`}>
					<Swiper
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
						autoplay={true}
						pagination={{ clickable: true }}
						modules={[Autoplay, EffectCreative, Pagination]}
						>
						{ReviewsCaruselData.map(({ id, srcimg, subtitle, title, text, signature__title, signature__text, stars, youtubeVideoCode }) => (
							<SwiperSlide key={id}>
								<div className={`${styles.testimonials__holder} main-bg relative md:flex md:justify-end md:items-stretch`}>
									<div
										className={`${styles.btn__round_icon} obj__put-in obj__inner-center unselectable`}
									>
										<div
											className="btn__round_icon icon-808557 obj__inner-center"
											onClick={(e) => {
												setOpenModal(true);
												setYoutubeVideoCode(youtubeVideoCode);
											}}
										><span></span></div>
									</div>
									<div className={`${styles.testimonials__img} lazyload`} data-bg={srcimg}></div>
									<div className={`${styles.testimonials__content} md:relative z-[1]`}>
										<div className={`${styles.testimonials__max_width} md:relative`}>
											<SectionTitle
												dataSubtitle={subtitle}
												dataTitle={title}
												dataAddClass="text-left"
												dataMaxWidth="418px"
											/>
											{stars ? (
												<div className={`${styles.reviews__rating}`}>
													<RatingView dataTotal={stars} dataClass="rating__lg" />
												</div>
											):null}
											{text ? (
												<p className='indent__top xl:text-md'>
													{text}
												</p>
											):null}
											{signature__title && signature__text ? (
												<div className={`${styles.reviews__caption} `}>
													<strong className='base__color'>- {signature__title},</strong> <span className='text-sm'>{signature__text}</span>
												</div>
											):null}
										</div>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
					<Modal
						openModal={openModal}
						onClose={() => setOpenModal(false)}
						dataModalSize="modal__sizeLg"
						dataModalClass="modal__noinner"
					>
						<YoutubeVideo
							dataYoutubeVideoCode={youtubeVideoCode}
						/>
					</Modal>
					<style jsx global>{`
						.reviews_carusel .swiper-slide{
							opacity:0 !important;
						}
						.reviews_carusel .swiper-slide-active,
						.reviews_carusel .swiper-slide-visible{
							opacity:1 !important;
						}
						.reviews_carusel .swiper-pagination{
							justify-content: start;
							float:right;
							width:50%;
							left:50%;
							padding-left:0.3%;
							bottom:116px;
							z-index:3;
							position:absolute;
						}
						@media (max-width: 1200px){
							.reviews_carusel .swiper-pagination{
								bottom:35px;
								left:52%;
							}
						}
						@media (max-width: 767px){
							.reviews_carusel .swiper,
							.reviews_carusel .swiper-creative .swiper-slide{
								overflow: inherit;
							}
							.reviews_carusel .obj__put-in{
								height:265px;
							}
							.reviews_carusel .swiper-pagination{
								bottom: 50px;
								left:0;
								justify-content: flex-start;
								margin-left: 15px;
							}
						}
					`}</style>
				</div>
			</div>
		</>
	)
};
export default ReviewsCarusel;