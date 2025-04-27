'use client';
import Image from 'next/legacy/image';
import Link from 'next/link';
import styles from './NewsLayout.module.css';
import SectionTitle from '../Common/SectionTitle';
import {newsStaticData} from './NewsStaticData';
import {newsCaruselData} from './NewsCaruselData';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
const NewsLayout = () => {
	return (
		<div className="base__bg">
			<div className="container container__fluid-lg section__inner">
				<div className="sm:flex sm:flex-nowrap gap-[30px]">
					<div className={`sm-max:w-full only-md:w-1/2 only-lg:w-1/2 lg:w-2/3`}>
						<SectionTitle
							dataSubtitle="latest news"
							dataTitle="From the Blog"
							dataTextUnder="News"
							dataAddClass="blocktitle__left blocktitle__under-align"
						/>
						<div className={styles.news_static}>
							{newsStaticData.map(({ id, data, title, srclink, text}) => (
								<div key={id} className={styles.news_static__item}>
									<h4 className={`${styles.news_static__data} text-sm`}>
										<i className={`${styles.news_static__data_icon} icon-9927001 inline-block`}></i>
										{data}
									</h4>
									<div className={`${styles.news_static__title} ttsubtitle_sm`}>
										<Link href={srclink || "#"} aria-label="Go to the blog" title="Go to the blog">
											{title}
										</Link>
									</div>
									<p>
										{text}
									</p>
								</div>
							))}
						</div>
					</div>
					<div className={`sm-max:mt-[35px] sm-max:w-full only-md:w-1/2 only-lg:w-1/2 lg:w-2/3`}>
						<Swiper
							grabCursor={true}
							spaceBetween={30}
							pagination={{clickable: true}}
							modules={[Pagination,Autoplay]}
							autoplay={{
								delay: 4500
							}}
							className="pagination__indent-top pagination__align-left"
							breakpoints={{
								576: {slidesPerView: 1},
								1025: {slidesPerView: 2}
							}}
						>
							{newsCaruselData.map(({id, srcimg, dataMonth, dataNumber, title, srclink, text}) => (
								<SwiperSlide key={id}>
									<div className={`${styles.news_carusel__img} news_carusel__img obj__indent-centerBefore relative overflow-hidden` }>
										<Link href={srclink} aria-label="Go to the blog" title="Go to the blog">
											<Image
												src={srcimg}
												width="370"
												height="300"
												layout="responsive"
												objectFit="cover"
												quality={0}
												alt={title}
											/>
										</Link>
									</div>
									<div className={`${styles.news_carusel__content} relative z-[1]`}>
										<div className={`${styles.news_carusel__data} icon-694055 relative inline-block`}>
											<div className="obj__indent-center text-center">
												<div className={styles.news_carusel__data_text1}>{dataMonth}</div>
												<div className={styles.news_carusel__data_text2}>{dataNumber}</div>
											</div>
										</div>
										<h4 className={`${styles.news_carusel__title} ttsubtitle_sm`}>
											<Link href={srclink} aria-label="Go to the blog" title="Go to the blog">
												{title}
											</Link>
										</h4>
										<p>
											{text}
										</p>
										<Link
											href={srclink}
											className={`${styles.news_carusel__link} icon-545682 inline-block`}
											aria-label="Go to the blog" title="Go to the blog"
										></Link>
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
export default NewsLayout;