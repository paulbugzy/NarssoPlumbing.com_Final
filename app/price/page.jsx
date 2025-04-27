//Import Sections
import PageTitle from "../_components/Common/PageTitle"
import SectionTitle from '../_components/Common/SectionTitle'
import CaruselCoupon from "../_components/Price/CaruselCoupon"
import CaruselPlans from "../_components/Price/CaruselPlans"
import PromoFullWidth from '../_components/Common/PromoFullWidth'
import TabsPrice from "../_components/Price/TabsPrice"

//Page Layout
export default function Price() {
  return (
    <>
        <PageTitle dataTitle="Price" />
        <main id="tt-pageContent" className="overflow-hidden">
            <div className="section__indent">
				<div className="container container__fluid-lg">
					<SectionTitle
						dataSubtitle="special offers"
						dataTitle="Take Advantage of Our Specials!"
						dataTextUnder="Special"
						dataText="Mention the coupons below when you call for service or click to print and present to our technicians when they arrive."
						dataAddClass="text-center"
						dataMaxWidth="500px"
					/>
					<CaruselCoupon />
                </div>
            </div>
            <div className="section__indent">
				<div className="container container__fluid-lg">
					<SectionTitle
						dataSubtitle="money saving"
						dataTitle="Plumbing Service Plans"
						dataAddClass="text-center"
					/>
					<CaruselPlans />
                </div>
            </div>
            <div className="section__inner">
				<PromoFullWidth
					dataIcon="icon-price"
					dataTitle="A Nationwide Plumbing Force, on Hand All Day, Every Day"
					dataText="Plumbing Labor Services Price List"
					dataBgSrc="/images/bg-04.jpg"
					dataMaxWidth="815"
					dataAddClass="fullwidthPromo__inner_tab"
				/>
				<TabsPrice />
			</div>
        </main>
    </>
  )
}