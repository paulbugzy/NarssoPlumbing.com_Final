//Style
import styles from "../../_components/ServicesSubPages/ServicesSubPages.module.css"
//Import Sections
import PageTitle from "../../_components/Common/PageTitle";
import SectionTitle from '../../_components/Common/SectionTitle';
import LogoPartners from '../../_components/Common/LogoPartners';
//Import Layout
import Image from 'next/legacy/image';
import PromoLayout from '../../_components/ServicesSubPages/PromoLayout';
import ListWithTitle from '../../_components/Common/ListWithTitle';
//Import Aside
import PromoAside from '../../_components/ServicesSubPages/PromoAside';
import BoxListAside from '../../_components/ServicesSubPages/BoxListAside';
import FormAside from '../../_components/ServicesSubPages/FormAside';
import ServicesListAside from '../../_components/ServicesSubPages/ServicesListAside';
//Import Data
import {ReasonsListData} from "../../_components/Services/AsideReasonsListData";
import {ServicesListData} from "../../_components/ServicesResidential/ServicesListData";
import {dataServicesInclude} from '../../_components/ServicesResidential/ServicesIncludeData';
import imageLayout from '../../../public/images/services/services_img03.jpg';
//Page Layout
export default function ServicesResidential() {
	return (
		<>
				<PageTitle dataTitle="Residential Services" />
				<main id="tt-pageContent" className="overflow-hidden">
				<div className="section__indent">
					<div className="container container__fluid-xl">
							<div className="md:flex md:gap-[30px] lg:gap-[60px]">
								<div className="lg:basis-2/3 md:basis-7/12 no-resize-text">
									<SectionTitle
										dataSubtitle="residential services"
										dataTitle="Need a Plumber for Your Residential Property?"
										dataMaxWidth="630px"
									/>
									<div className="leading-none">
										<Image
											src={imageLayout}
											width={735}
											height={511}
											quality={0}
											alt='residential services'
											loading={`eager`}
										/>
									</div>
									<p className={`${styles.indent__top2}`}>
										Are you planning to remodel your home or upgrade your plumbing system? We handle all types of residential plumbing services, including repairs and remodeling. Regardless of whether you need help with the entire project or just certain aspects, our team of experienced plumbers can help. Our top priority is providing you with quality plumbing work in a stress-free environment, so you don&apos;t have to worry about mess or disruption in your home. You can trust us for all of these residential plumbing needs:
									</p>
									<div className="sm:flex sm:gap-[30px] mt-[20px]">
										<div className="sm:basis-1/2">
											<ul className="list__type1">
												<li><a href="#">Shopping Centres</a></li>
												<li><a href="#">Secure Data Centres</a></li>
												<li><a href="#">Business Parks</a></li>
												<li><a href="#">Retirement Living</a></li>
												<li><a href="#">Schools</a></li>
												<li><a href="#">Commercial Real Estate Property </a></li>
											</ul>
										</div>
										<div className="sm:basis-1/2">
											<ul className="list__type1">
												<li><a href="#">Restaurants and Catering</a></li>
												<li><a href="#">Manufacturing Business&apos;s</a></li>
												<li><a href="#">Retail</a></li>
												<li><a href="#">Aged Care</a></li>
												<li><a href="#">Hospitals</a></li>
												<li><a href="#">Prisons</a></li>
											</ul>
										</div>
									</div>
									<h4 className="ttsubtitle ttsubtitle__top">Our Residential Plumbing Services include:</h4>
									<ListWithTitle
										dataLayout={dataServicesInclude}
										dataAddClass="grid md-max:gap-[16px] md:gap-[16px]"
									/>
									<h5 className="ttsubtitle ttsubtitle__top">Plumbing for Your Residential Remodeling Project</h5>
									<p>
										When you decide to remodel your home or invest in an addition, there are many aspects of the project that should be handled by a professional. While there may be some steps of the job you could attempt on your own, you are better off leaving it in the hands of experienced service professionals who know how to handle installations according to code.
									</p>
									<p className="indent__top">
										When you trust our family owned and operated company for the plumbing needs of your remodel, you can count on us to go the extra mile to ensure you are happy with the finished product. We aren&apos;t satisfied unless you are!
									</p>
									<PromoLayout
										dataText="Request a bid for your next residential plumbing project from our professional, experienced plumbing company today!"
										dataScrImg="../images/services/promo01-img01.png"
										dataScrImg2="../images/services/promo01-img01.webp"
									/>
								</div>
								<div className={`${styles.aside__wrapper} lg:basis-1/3 md:basis-5/12 md-max:mt-[40px] sm-max:mt-[35px] no-resize-text`}>
									<div>
										<div className={`ttsubtitle`}>
											Residential Services
										</div>
										<ServicesListAside dataList={ServicesListData} />
									</div>
									<div>
										<div className={`ttsubtitle`}>
											Ask Question
										</div>
										<FormAside />
									</div>
									<PromoAside
										dataTitle="Book A Plumber Now!"
										dataText="Get a Free, No-Obligation Quote Today"
										dataTelefon="123-456-789"
									/>
									<BoxListAside
										dataTitle={"6 Different Reasons \n You Should Hire Us"}
										dataList={ReasonsListData}
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="section__inner bg-no-repeat bg-center lazyload" data-bg="../images/extra-bg01.png">
						<div className="container container__fluid-xl no-resize-text">
							<SectionTitle
								dataSubtitle="we work with"
								dataTitle="Our Partners"
							/>
							<LogoPartners
								wrapperClass="grid sm-max:grid-cols-2 lg-max:grid-cols-3 lg:grid-cols-4 lg:gap-[30px] only-lg:gap-[20px]  only-md:gap-[20px] sm-max:gap-[15px] lg:mr-[40px] items-start"
							/>
						</div>
					</div>
				</main>
		</>
	)
}

