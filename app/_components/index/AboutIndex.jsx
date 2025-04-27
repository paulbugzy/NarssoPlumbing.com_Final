import styles from './AboutIndex.module.css';
import SectionTitle from '../Common/SectionTitle';
import BoxIcon from '../Common/BoxIcon';
import {BoxIconData} from '../Common/BoxIconData';
const AboutIndex = () => {
	return (
		<>
			<div className="container container__fluid-lg section__inner">
				<div className={`sm:flex sm:items-start lg-max:gap-[30px] relative`}>
					<div className="basis-1/2">
						<div className={`${styles.img__align} relative`}>
							<picture>
								<source srcSet="/images/img-01.jpg" type="image/jpg" />
								<source srcSet="/images/img-01.webp" type="image/webp" />
								<img
									width={565}
									height={514}
									className="object-cover"
									loading="lazy"
									src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
									alt='100% Satisfaction Guarantee'
								/>
							</picture>
							<div className={`${styles.img__label} obj__inner-center flex-col absolute`}>
								<picture>
									<source srcSet="/images/home__form-label_bg.png" type="image/png" />
									<source srcSet="/images/home__form-label_bg.webp" type="image/webp" />
									<img
										src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
										className="size-full block object-cover absolute t-[0] l-[0]"
										alt='100% Satisfaction Guarantee'
										loading="lazy"
									/>
								</picture>
								<div className={`${styles.img__label_icon} icon-1701875`}></div>
								<div className={`${styles.img__label_text1} font-bold`}>100<sub className='relative'>%</sub></div>
								<div className={`${styles.img__label_text2}`}>
									Satisfaction Guarantee
								</div>
							</div>
						</div>
					</div>
					<div className="basis-1/2 sm-max:mt-[35px]">
						<SectionTitle
							dataSubtitle="about company"
							dataTitle={"Nobody Wows Clients \n Like We Do"}
							dataMaxWidth="468px"
						/>
						<p>
						Our team proudly offers an on-time guarantee and a 100% customer satisfaction guarantee. It&apos;s why we make sure that our licensed plumbers are highly trained and fully equipped to meet your home&apos;s diverse
plumbing service needs.
						</p>
						<ul className='list__type1 lg:mt-[33px] lg-max:mt-[19px]'>
							<li>First Class Quality Service at Affordable Prices</li>
							<li>Immediate 24/ 7 Emergency Service</li>
						</ul>
						<div className={`${styles.boxicon__wrapper} relative mt-[19px] grid grid-cols-2 lg:gap-[30px] lg-max:gap-[20px] lg:mr-[0px]`}>
							<BoxIcon dataSrcData={BoxIconData} />
						</div>
					</div>
				</div>
			</div>
		</>
	)
};
export default AboutIndex;