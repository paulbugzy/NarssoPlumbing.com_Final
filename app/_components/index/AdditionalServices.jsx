'use client';
import styles from './AdditionalServices.module.css';
import SectionTitle from '../Common/SectionTitle';
import Link from 'next/link'
import {dataServices} from './AdditionalServicesData';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
const AdditionalServices = () => {
	return (
		<div className={`${styles.section__custom_indent}`}>
			<div className={`${styles.holder__wrapper} relative overflow-hidden`}>
				<picture className={`${styles.holder__wrapper_img} pointer-events-none absolute`}>
					<source media="(min-width: 1201px)" srcSet="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-srcset="/images/home_additional_img01.webp" type="image/webp" />
					<source media="(min-width: 1201px)" srcSet="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-srcset="/images/home_additional_img01.png" type="image/png" />
					<source media="(min-width: 768px)" srcSet="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-srcset="/images/home_additional_img01-md.png" type="image/png" />
					<source media="(min-width: 768px)" srcSet="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-srcset="/images/home_additional_img01-md.webp" type="image/webp" />
					<img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyload" alt=""  />
				</picture>
				<div className={`${styles.holder__bg} relative z-[1]`}>
					<div className={`${styles.holder__bg_img} absolute z-[2]`}>
						<picture>
							<source media="(max-width: 575px)" srcSet="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-srcset="/images/home_additional_bgimg_sm.png" type="image/png" />
							<source media="(max-width: 575px)" srcSet="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-srcset="/images/home_additional_bgimg_sm.webp" type="image/webp" />
							<source media="(min-width: 1200px)" srcSet="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-srcset="/images/home_additional_bgimg.png" type="image/png" />
							<source media="(min-width: 1200px)" srcSet="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-srcset="/images/home_additional_bgimg.webp" type="image/webp" />
							<img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyload" alt=""  />
						</picture>
					</div>
					<div className={`${styles.holder2} relative z-[3]`}>
						<div className={`md:flex md:gap-[30px]`}>
							<div className={`md:basis-1/2 lg:basis-2/5`}>
								<SectionTitle
									dataSubtitle="what else do we offer"
									dataTitle="Additional Services"
									dataAddClass="blocktitle__left"
								/>
							</div>
							<div className={`md:basis-1/2 lg:basis-1/2`}>
								<p className={`${styles.holder__title_text} relative z-10`}>
									We&apos;re committed to providing fast, affordable, reliable, worry free plumbing and heating services.
								</p>
							</div>
						</div>
						<Swiper
							grabCursor={true}
							spaceBetween={30}
							pagination={{clickable: true}}
							modules={[Pagination,Autoplay]}
							autoplay={{
								delay: 5000
							}}
							className="pagination__indent-top pagination__align-left"
							breakpoints={{
								576: {
									slidesPerView: 2,
									spaceBetween:15
								},
								768: {
									slidesPerView: 3,
									spaceBetween:15
								},
								1025: {
									slidesPerView: 3,
									spaceBetween:30
								},
								1200: {slidesPerView: 2.6},
								1500: {slidesPerView: 3.6}
							}}
							>
							{dataServices.map(({id, icon, title, text, list, btn__text, btn__src}) => (
								<SwiperSlide key={id} className={`height__auto`}>
									<div className={`${styles.item__holder}`}>
										<div className={`${styles.item__icon} icon-694055`}>
											<i className={`${icon} obj__indent-center`}></i>
										</div>
										<h6 className={`${styles.item__title} ttsubtitle_sm`}>{title}</h6>
										<p>
											{text}
										</p>
										<ul className={`${styles.item__ul} list__type1`}>
											{list.map((item, index) => (
												<li key={index}>{item}</li>
											))}
										</ul>
										<Link href={btn__src} className={`${styles.item__btn} inline-block btn`}>
											<span>{btn__text}</span>
										</Link>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>
			</div>
		</div>
	)
};
export default AdditionalServices;