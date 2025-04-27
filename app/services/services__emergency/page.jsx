//Style
import styles from "../../_components/ServicesSubPages/ServicesSubPages.module.css"
//Import Sections
import PageTitle from "../../_components/Common/PageTitle";
import SectionTitle from '../../_components/Common/SectionTitle';
import LogoPartners from '../../_components/Common/LogoPartners';
//Import Layout
import Image from 'next/legacy/image';
import PromoLayout from '../../_components/ServicesSubPages/PromoLayout';
//Import Aside
import PromoAside from '../../_components/ServicesSubPages/PromoAside';
import BoxListAside from '../../_components/ServicesSubPages/BoxListAside';
import FormAside from '../../_components/ServicesSubPages/FormAside';
import ServicesListAside from '../../_components/ServicesSubPages/ServicesListAside';
//Import Data
import {ReasonsListData} from "../../_components/Services/AsideReasonsListData";
import {EmergencyListData} from "../../_components/ServicesEmergency/EmergencyListData";
import imageLayout from '../../../public/images/services/services_img02.jpg';
//Page Layout
export default function ServicesEmergency() {
  return (
    <>
        <PageTitle dataTitle="Emergency Services" />
        <main id="tt-pageContent" className="overflow-hidden">
			<div className="section__indent">
				<div className="container container__fluid-xl">
        			<div className="md:flex md:gap-[30px] lg:gap-[60px]">
						<div className="lg:basis-2/3 md:basis-7/12 no-resize-text">
							<SectionTitle
								dataSubtitle="emergency services"
								dataTitle="Our 24-Hour Commercial Emergency Plumbing Services"
								dataMaxWidth="630px"
							/>
							<div className="leading-none">
								<Image
									src={imageLayout}
									width={735}
									height={511}
									quality={0}
									loading={`eager`}
									alt='emergency services'
								/>
							</div>
							<p className={`${styles.indent__top2}`}>
							A plumbing problem can happen with little or no warning. Whether it occurs during business hours, in the middle of the night, or over the weekend, immediate repairs are necessary to avoid a costly disaster. Our team of experienced and professional plumbers are available to provide emergency services to your business anytime, day or night.
							</p>
							<h4 className="ttsubtitle ttsubtitle__top">Hot Water System Replacement</h4>
							<p>No one likes a cold shower! When your hot water system suddenly stops, it&apos;s no surprise that most people want a hot water system repair or replacement as soon as possible! Our 24/7 service is ready to fix your hot water problem. If you notice your home is running out of hot water, you have no hot water or there&apos;s water pooling around the base of your hot water system then you may need to have your hot water service repaired or replaced.</p>
							<h4 className="ttsubtitle ttsubtitle__top">Unblocking Drains</h4>
							<p>With over 25 years of knowledge we understand what it takes to unblock your drains and we&apos;re here to help. From major sewer blockages effecting your whole property or a blockage effecting your kitchen sink we have the diagnostic equipment to locate and unblock your drains in a fast and efficient manor, limiting the damage to your property. Whether you&apos;re a residential home with 1 toilet to a retail shopping centre with 100 toilets, we have the expertise and equipment needed to unblock your drains.</p>
							<h4 className="ttsubtitle ttsubtitle__top">Unblocking Toilets</h4>
							<p>
								If your toilet is blocked but the remainder of your drains seem to be operating correctly you may have an obstruction in your drain. This will cause toilet paper to build up behind the obstruction, triggering the toilet to block.
							</p>
							<p className="indent__top">
								We have the equipment required to locate the obstruction, we have small CCTV cameras and locators available that will identify the cause, helping us determine the best cause of action, which will save time and money. Often a simple plunge of your toilet is enough to clear the obstruction but for the more stubborn blockages we may need to remove your toilet or pressure jet your drain.
							</p>
							<h4 className="ttsubtitle ttsubtitle__top">Leaking Tap Repairs</h4>
							<p>
								If you&apos;re finding it difficult to turn your taps off and need to fix or replace some tapware in your home or business, then call us. We are experienced in all types of tapware maintenance and repairs including standard jumper valve washers, ceramic discs, mixer taps, quarter and half turn taps, timed flow taps and sensor taps. Regardless of the type of tap or the condition of the tap, we can help.
							</p>
							<h4 className="ttsubtitle ttsubtitle__top">Burst and Leaking pipes</h4>
							<p>
							Whether you have dripping taps, leaking toilet, leaking pipes, burst pipes, blocked toilets, dripping shower, dripping kitchen sink or leaking hot water pipe, we provide a reliable complete maintenance service for all your burst and leaking pipe needs.
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
									Emergency Services
								</div>
								<div className={`${styles.aside__content}`}>
									<ServicesListAside dataList={EmergencyListData} />
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

