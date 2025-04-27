'use client';
import React, { useState } from "react";
import Image from 'next/legacy/image';
import styles from './ReviewsVideo.module.css';
import EmbedVideo from '../Common/EmbedVideo';
import SectionTitle from '../Common/SectionTitle';
import Button from '../Common/Button';
import Modal from "../Common/Modal";
import FormModal from "../Common/FormModal";
import {dataReviewsVideo} from './ReviewsVideoData';
import { BsYoutube } from 'react-icons/bs';
// Carusel
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Thumbs } from 'swiper/modules';
import 'swiper/css';
import "swiper/css/free-mode";
import "swiper/css/thumbs";
// import required modules
const ReviewsVideo = () => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	const [openModal, setOpenModal] = useState(false);
	return (
		<>
			<div className="section__indent">
				<div className="container container__fluid-lg">
					<div className="md:flex gap-[30px]">
						<div className={`md:basis-1/2`}>
							<SectionTitle
								dataSubtitle="video reviews"
								dataTitle="Satisfied Clients Videos About Our Work"
								dataTextUnder="Video"
								dataAddClass="blocktitle__left"
							/>
							<p>
								Check out our testimonials videos and five-star reviews to see what our current customers say, then give us a call. Below you will find a collection of testimonials that have been published by our commercial and domestic plumbing clients.
							</p>
							<Button
								className='btn__top'
								onClick={(e) => {
									setOpenModal(true);
								}}
							>Get Service Now</Button>
							<Modal
								openModal={openModal}
								onClose={() => setOpenModal(false)}
								dataModalSize="modal__sizeLg"
								dataModalTitle="Schedule Service Online"
							>
								<FormModal />
							</Modal>
						</div>
						<div className={`md:basis-1/2 relative md:min-w-[50%] only-md:mt-[40px] sm-max:mt-[35px]`}>
							<Swiper
								loop={true}
								spaceBetween={10}
								navigation={true}
								modules={[FreeMode, Thumbs]}
								thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
								className={`mySwiper2 ${styles.carusel__large}`}
							>
								{dataReviewsVideo.map(({ id, large__img, video__src}) => (
									<SwiperSlide key={id} className="relative cursor-pointer">
										<EmbedVideo
											dataSrc={video__src}
											dataPoster={large__img}
										/>
									</SwiperSlide>
								))}
							</Swiper>
							<Swiper
								onSwiper={setThumbsSwiper}
								spaceBetween={15}
								slidesPerView={4}
								freeMode={true}
								watchSlidesProgress={true}
								modules={[FreeMode, Thumbs]}
								className={`mySwiper ${styles.carusel__thumbs}`}
							>
								{dataReviewsVideo.map(({ id, thumbs__img}) => (
									<SwiperSlide key={id} className="relative cursor-pointer">
										<div className={`${styles.video__icon} video__icon obj__put-in obj__inner-center z-[1]`}>
											<BsYoutube className="relative z-1" />
										</div>
										<Image
											src={thumbs__img}
											width={132}
											height={74}
											quality={0}
											layout="responsive"
											objectFit="cover"
											alt="img"
										/>
									</SwiperSlide>
								))}
							</Swiper>
						</div>
					</div>
				</div>
			</div>
			<style jsx global>{`
				.swiper-slide-thumb-active .video__icon{
					background-color: rgba(102,102,102,.0);
				}
			`}</style>
		</>
	)
};
export default ReviewsVideo;