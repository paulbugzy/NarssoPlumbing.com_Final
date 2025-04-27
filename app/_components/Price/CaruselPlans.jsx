'use client';
import {dataPlans} from './CaruselPlansData';
import styles from './CaruselPlans.module.css';
import Link from 'next/link';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
const CaruselPlans = () => {
	return (
		<div className={`${styles.swiper__layout} pagination__indent overflow-hidden relative swiper-grid-layout`}>
			<div className="relative">
				<Swiper
					modules={[Pagination, Autoplay]}
					spaceBetween={30}
					pagination={{ clickable: true }}
					autoplay={{
						delay: 3500
					}}
					breakpoints={{
						550: {
							slidesPerGroup: 2,
							slidesPerView: 2,
							spaceBetween:15
						},
						768: {
							slidesPerGroup: 3,
							slidesPerView: 3,
							spaceBetween:15
						},
						1025: {
							slidesPerGroup: 3,
							slidesPerView: 3,
							spaceBetween:30
						},
					}}
					className="overflow-inherit"
				>
					{dataPlans.map(({ id, icon, title, list, price, period, btn__text, btn__src }) => (
						<SwiperSlide key={id} className={`height__auto`}>
							<div className={`${styles.promo} mx-[auto] text-center`}>
								<div className={`${styles.promo__icon} ${icon} obj__indent-centerBefore relative mx-[auto]`}>
									<i className="icon-694055"></i>
								</div>
								<div className={`${styles.promo__title} ttsubtitle`}>
									{title}
								</div>
								<ul className={`${styles.promo__list} mx-[auto]`}>
									{list.map((item, index) => (
										<li key={index} className="relative text-left">{item}</li>
									))}
								</ul>
								<div className={`${styles.promo__price}`}>
									<div className={styles.promo__price__text01}>{price}</div>
									<div className={styles.promo__price__text02}>/{period}</div>
								</div>
								<Link href={btn__src}  as={btn__src} className="btn lg:mt-[30px] lg-max:mt-[20px] md-max:mt-[15px]"><span>{btn__text}</span></Link>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	)
};
export default CaruselPlans;