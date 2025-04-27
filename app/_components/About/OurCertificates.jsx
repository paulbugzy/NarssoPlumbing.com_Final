'use client';
import { useState } from "react"
import Image from 'next/legacy/image'
import SectionTitle from '../Common/SectionTitle'
import styles from './OurCertificates.module.css'
import Modal from "../Common/Modal"
import ModalGallery from "../Common/ModalGallery"
import {dataCertificates} from './OurCertificatesDate'
// Import Swiper React components
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
const OurCertificates = () => {
	const [openModal, setOpenModal] = useState(false);
	const [dataItemActive, setDataItemActive] = useState(0);
	return (
		<>
			<div className="section__indent">
				<div className={`${styles.holder__inner} relative`}>
					<div className={`${styles.holder__bg} absolute z-[2]`}>
						<picture>
							<source media="(max-width: 575px)" srcSet="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-srcset="/images/home_additional_bgimg_sm.png" type="image/png" />
							<source media="(max-width: 575px)" srcSet="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-srcset="/images/home_additional_bgimg_sm.webp" type="image/webp" />
							<source media="(min-width: 1200px)" srcSet="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-srcset="/images/home_additional_bgimg.png" type="image/png" />
							<source media="(min-width: 1200px)" srcSet="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-srcset="/images/home_additional_bgimg.webp" type="image/webp" />
							<img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyload" alt=""  />
						</picture>
					</div>
					<div className={`${styles.holder__inner2} relative z-[3]`}>
						<div className={`${styles.row__custom} grid`}>
							<SectionTitle
								dataSubtitle="memberships & certifications"
								dataTitle="Our Certificates"
								dataAddClass="blocktitle__nomargin_mdmax"
							/>
							<p className="no-resize-text">
								Employers need to know that the service plumber they&#1370;re hiring is competent, qualified and well-rounded.
							</p>
						</div>

							<Swiper
								modules={[Pagination, Autoplay]}
								autoplay={{
									delay: 5000
								}}
								pagination={{ clickable: true }}
								spaceBetween={30}
								slidesPerGroup={1}
								slidesPerView={1}
								className="pagination__indent-top pagination__align-left"
								breakpoints={{
									500: {
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
									1200: {slidesPerView: 3.6}
								}}
							>
								{dataCertificates.map(({ id, img__path}) => (
									<SwiperSlide key={id}>
										<div
											className={`${styles.imgLightbox} relative block cursor-pointer`}
											onClick={(e) => {
												setOpenModal(true);
												setDataItemActive(id);
											}}
										>
											<Image
												src={img__path}
												width={335}
												height={434}
												quality={0}
												layout="responsive"
												alt="certificates"
											/>
										</div>
									</SwiperSlide>
								))}
							</Swiper>
							<Modal
								openModal={openModal}
								onClose={() => setOpenModal(false)}
								dataModalSize="modal__sizeLg"
								dataModalClass="modal__typeGallery"
							>
								<ModalGallery
									dataModalArray={dataCertificates}
									dataItemActive={dataItemActive}
								/>
							</Modal>

					</div>
				</div>
			</div>
		</>
	)
};
export default OurCertificates;