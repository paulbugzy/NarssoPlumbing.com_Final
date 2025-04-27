'use client';
import {dataCoupon} from './CaruselCouponData';
import styles from './CaruselCoupon.module.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const CaruselCoupon = () => {
	return (
		<div className="container__fluid">
			<div className={`${styles.swiper__layout} pagination__indent`}>
				<div className="relative unselectable">
					<Swiper
						modules={[Pagination, Autoplay]}
						pagination={{ clickable: true }}
						spaceBetween={30}
						autoplay={{
							delay: 5000
						}}
						breakpoints={{
							769: {
								slidesPerGroup: 2,
								slidesPerView: 2,
								spaceBetween:15
							},
							1025: {
								slidesPerGroup: 2,
								slidesPerView: 2,
								spaceBetween:30
							}
						}}
					>
						{dataCoupon.map(({ id, subtitle, title, text, discounts__price, discounts__label, promotion__period}) => (
							<SwiperSlide key={id}>
								<div className={`
									${styles.coupon}
									lazyload height__auto
									flex flex-col items-end relative bg-no-repeat bg-{0 0} h-full
								`} data-bg="/images/coupon-bg.png">
									<div className={`${styles.coupon__discounts} grid justify-center content-center absolute`}>
										<div className={styles.coupon__discounts_text01}>{discounts__price}</div>
										<div className={styles.coupon__discounts_text02}>{discounts__label}</div>
									</div>
									<div className={styles.coupon__subtitle}>
										{subtitle}
									</div>
									<div className={styles.coupon__title}>
										{title}
									</div>
									<div className={styles.coupon__content}>
										{text}
									</div>
									<div className={`${styles.coupon__row} flex justify-between items-stretch w-[100%]`}>
										<div className={`${styles.coupon__notes} text-sm`}>
											* Expires: {promotion__period}
										</div>
										<a href="#" className={styles.coupon__print}>Print coupon</a>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</div>
	)
};
export default CaruselCoupon;