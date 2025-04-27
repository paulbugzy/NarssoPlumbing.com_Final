'use client';
import Image from 'next/legacy/image';
import SectionTitle from '../Common/SectionTitle';
import styles from './OurTeam.module.css';
import {dataTeamDirection} from './OurTeamDirectionData';
import {dataTeamRersonal} from './OurTeamPersonalData';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
const OurTeam = () => {
	return (
		<>
			<div className="section__indent">
				<div className="container container__fluid-lg">
					<SectionTitle
						dataSubtitle="our team"
						dataTitle="Your Professional Plumbing Technicians"
						dataTextUnder="Our Team"
						dataText="Our company is dedicated to providing exceptional customer service backed by years of experience, professionalism and knowledge."
						dataAddClass="text-center"
						dataMaxWidth="570px"
					/>
					<div className={`${styles.direction__wrapper} grid md:grid-flow-col md:grid-cols-2 gap-[30px]`}>
						{dataTeamDirection.map(({ id, title, subtitle, text, img__path, social__facebook, social__twitter }) => (
							<div key={id} className={`${styles.direction} relative grid`}>
								<div className={styles.direction__social}>
									<a href={social__facebook} className="icon-59439"></a>
									<a href={social__twitter} className="icon-733635"></a>
								</div>
								{img__path ? (
									<div className={styles.direction__img}>
										<Image
											src={img__path}
											width={195}
											height={195}
											quality={0}
											alt={title}
										/>
									</div>
								):null}
								<div className={`${styles.direction__content}`}>
									{title ? (
										<h6 className={`${styles.direction__title} ttsubtitle_sm`}>
											{title}
										</h6>
									):null}
									{subtitle ? (
										<div className={`${styles.direction__subtitle}`}>
											{subtitle}
										</div>
									):null}
									{text ? (
										<p className={`${styles.direction__text}`}>
											{text}
										</p>
									):null}
								</div>
							</div>
						))}
					</div>
					<div className="mt-[50px]">
						<Swiper
							modules={[Pagination, Autoplay]}
							autoplay={{
								delay: 2000
							}}
							pagination={{ clickable: true }}
							spaceBetween={30}
							slidesPerGroup={1}
							slidesPerView={1}
							className="pagination__indent-top"
							breakpoints={{
								320: {
									slidesPerView: 2,
									spaceBetween:15
								},
								575: {
									slidesPerView: 3,
									spaceBetween:15
								},
								1025: {
									slidesPerView: 4,
									spaceBetween:30
								},
							}}
							>
							{dataTeamRersonal.map(({ id, title, subtitle, img__path}) => (
								<SwiperSlide key={id} className="text-center">
									<div className={`${styles.personal} inline-block text-center`}>
										{img__path ? (
											<div className={`${styles.personal__img} relative obj__indent-centerBefore`}>
												<Image
													src={img__path}
													width={195}
													height={195}
													quality={0}
													alt={title}
												/>
											</div>
										):null}
										{title ? (
											<div className={styles.personal__title}>
												{title}
											</div>
										):null}
										{subtitle ? (
											<div className={styles.personal__subtitle}>
												{subtitle}
											</div>
										):null}
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>
			</div>
		</>
	)
};
export default OurTeam;