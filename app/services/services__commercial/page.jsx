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
import {ComercialListData} from "../../_components/ServicesCommercial/ComercialListData";
import {dataServicesInclude} from '../../_components/ServicesCommercial/ServicesIncludeData';
import imageLayout from '../../../public/images/services/services_img01.jpg';

export default function ServicesCommercial() {
	return (
		<>
			<PageTitle dataTitle="Commercial Services" />
			<main id="tt-pageContent" className="overflow-hidden">
					<div className="section__indent ">
						<div className="container container__fluid-xl">
							<div className="md:flex md:gap-[30px] lg:gap-[60px] no-resize-text">
								<div className="lg:basis-2/3 md:basis-7/12">
									<SectionTitle
										dataSubtitle="commercial services"
										dataTitle="Need a Plumber for Your Commercial Property?"
										dataMaxWidth="630px"
									/>
									<div className="leading-none">
										<Image
											src={imageLayout}
											width={735}
											height={511}
											quality={0}
											loading={`eager`}
											alt='commercial services'
										/>
									</div>
									<p className={`${styles.indent__top2}`}>
										Whether you are a property manager, a real estate developer, or a commercial building owner, you are likely aware of just how important the plumbing system is to the operations of your property. When something stops working properly, it can create difficulty and stress for everyone involved. This is not the ideal situation, but if it occurs, we can guide you through it effectively and efficiently.
									</p>
									<h4 className="ttsubtitle ttsubtitle__top">Industries We Work Across are:</h4>
									<p>
									From hotels to schools, we serves all sizes and types of commercial locations. We have the necessary equipment and training to provide top-quality services wherever you need them.
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
												<li><a href="#">Manufacturing Business’s</a></li>
												<li><a href="#">Retail</a></li>
												<li><a href="#">Aged Care</a></li>
												<li><a href="#">Hospitals</a></li>
												<li><a href="#">Prisons</a></li>
											</ul>
										</div>
									</div>
									<h4 className="ttsubtitle ttsubtitle__top">Extensive Experience for Plumbing</h4>
									<p>
										Customers love us for our quality craftsmanship, our professionalism, and our dedication to knowing and meeting all necessary plumbing codes to keep everyone safe. We take on all types of new commercial plumbing projects, including additions and renovations, new construction installations, and new multi-family installations. For a new construction, we handle plumbing services such as:
									</p>
									<ListWithTitle
										dataLayout={dataServicesInclude}
										dataAddClass="grid md-max:gap-[16px] md:gap-[16px] indent__top"
									/>
									<PromoLayout
										dataText="Request a bid for your next residential plumbing project from our professional, experienced plumbing company today!"
										dataScrImg="../images/services/promo01-img01.png"
										dataScrImg2="../images/services/promo01-img01.webp"
									/>
								</div>
								<div className={`${styles.aside__wrapper} lg:basis-1/3 md:basis-5/12 md-max:mt-[40px] sm-max:mt-[35px] no-resize-text`}>
									<div>
										<div className={`ttsubtitle`}>
											Commercial Services
										</div>
										<div className={`${styles.aside__content}`}>
											<ServicesListAside dataList={ComercialListData} />
										</div>
									</div>
									<div>
										<div className={`ttsubtitle`}>
											Ask Question
										</div>
										<div className={`${styles.aside__content}`}>
											<FormAside />
										</div>
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
					<div className="section__inner no-resize-text bg-no-repeat bg-center lazyload" data-bg="../images/extra-bg01.png">
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

