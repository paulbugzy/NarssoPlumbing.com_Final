import PageTitle from "../_components/Common/PageTitle"

import AboutCompany from '../_components/About/AboutCompany'
import WhyChooseUs from '../_components/About/WhyChooseUs'
import RSF from '../_components/About/RSF'
import Portfolio from '../_components/About/Portfolio'
import OurTeam from '../_components/About/OurTeam'
import OurCertificates from '../_components/About/OurCertificates'
import AreasWeCover from '../_components/About/AreasWeCover'

export default function About() {
  return (
    <>
		<PageTitle dataTitle="About us" />
		<main id="tt-pageContent" className="overflow-hidden">
			<AboutCompany />
			<WhyChooseUs />
			<RSF />
			<Portfolio />
			<OurTeam />
			<OurCertificates />
			<AreasWeCover />
		</main>
    </>
  )
}

