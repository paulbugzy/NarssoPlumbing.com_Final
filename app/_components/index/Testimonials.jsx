
'use client';
import { useState } from "react"
import styles from './Testimonials.module.css'
import SectionTitle from '../Common/SectionTitle'
import YoutubeVideo from '../Common/YoutubeVideo'
import Modal from '../Common/Modal'
import {ReviewsCaruselData} from '../Testimonials/ReviewsCaruselData'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation, EffectCreative } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-creative';

const Testimonials = () => {
	const [openModal, setOpenModal] = useState(false);
	const [youtubeVideoCode, setYoutubeVideoCode] = useState(false);
	return (
		<>
			<div className={`${styles.testimonials__holder} relative testimonials__holder`}>
				<div className={`${styles.testimonials__bg_separator} relative`}>
					<div className={`${styles.testimonials__bg} relative bg-no-repeat lazyload`} data-bg="images/testimonials/index_map.png">
						<div className={`${styles.testimonials__box} relative`}>
							<Swiper
								loop={true}
								grabCursor={true}
								modules={[Pagination, Autoplay, Navigation, EffectCreative]}
								autoplay={{
									delay: 6500
								}}
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
									prevEl: '#jsswiper__prev',
									nextEl: '#jsswiper__next',
								}}
								pagination={{ clickable: true }}

								>
								{ReviewsCaruselData.map(({ id, srcimg, subtitle, title, text, signature__title, signature__text, stars, youtubeVideoCode }) => (
									<SwiperSlide key={id}>
										<div className={`relative md:flex md:justify-end md:items-stretch`}>
										<div className={`${styles.btn__round_icon} obj__put-in obj__inner-center unselectable`}>
											<div
												className="btn__round_icon icon-808557 obj__inner-center"
												onClick={(e) => {
													setOpenModal(true);
													setYoutubeVideoCode(youtubeVideoCode);
												}}
											>
												<span></span>
											</div>
										</div>
										<div className={`${styles.testimonials__img} lazyload`} data-bg={srcimg}></div>
										<div className={`${styles.testimonials__content} relative z-[1]`}>
											<div className={`${styles.testimonials__max_width} md:relative`}>
												<SectionTitle
													dataSubtitle={subtitle}
													dataTitle={title}
													dataAddClass="text-left"
													dataMaxWidth="357px"
												/>
												{stars ? (
													<div className={styles.reviews__rating}>
														{[ ...Array(stars)].map((start, index) => {
															return <i key={index} className="icon-56786"></i>
														})}
													</div>
												):null}
												{text ? (
													<p className='indent__top xl:text-md'>
														{text}
													</p>
												):null}
												{signature__title && signature__text ? (
													<div className={`${styles.reviews__caption} text-sm`}>
														<strong className='base__color lg:text-base'>- {signature__title},</strong> {signature__text}
													</div>
												):null}
											</div>
										</div>
									</div>
									</SwiperSlide>
								))}
							</Swiper>
							<div id='jsswiper__prev' className='jsswiper__btn jsswiper__prev obj__inner-center lg-max:invisible'>
								<i className="icon-545682"></i>
							</div>
							<div id='jsswiper__next' className='jsswiper__btn jsswiper__next obj__inner-center lg-max:invisible'>
								<i className="icon-545682"></i>
							</div>
							<Modal
								openModal={openModal}
								onClose={() => setOpenModal(false)}
								dataModalSize="modal__sizeLg"
								dataModalClass="modal__noinner"
							>
								<YoutubeVideo dataYoutubeVideoCode={youtubeVideoCode} />
							</Modal>
						</div>
					</div>
				</div>
			</div>
			<style jsx global>{`
				.testimonials__holder .swiper-slide{
					opacity:0 !important;
				}
				.testimonials__holder .swiper-slide-active,
				.testimonials__holder .swiper-slide-visible{
					opacity:1 !important;
				}
				@media (min-width: 768px){
					.testimonials__holder .swiper-pagination{
						justify-content: start;
						width:37.3%;
						right:0;
						bottom:116px;
						z-index:3;
						position:absolute;
					}
				}
				@media (max-width: 1800px) and (min-width: 768px){
					.testimonials__holder .swiper-pagination{
						width:45%;
					}
				}

				@media (max-width: 1229px) and (min-width: 768px){
					.testimonials__holder .swiper-pagination{
						width:calc(45% - 25px);
						bottom:35px;
					}
				}
				@media (max-width: 1024px) and (min-width: 768px){
					.testimonials__holder .swiper-pagination{
						width:45%;
					}
				}
				@media (max-width: 767px){
					.testimonials__holder .swiper,
					.testimonials__holder .swiper-creative .swiper-slide{
						overflow: inherit;
					}
					.testimonials__holder .obj__put-in{
						height:265px;
					}
					.testimonials__holder .swiper-pagination{
						justify-content: start;
						width:100%;
						left:15px;
						bottom:35px;
						z-index:3;
						position:absolute;
					}
				}
			`}</style>
		</>
	)
};
export default Testimonials;