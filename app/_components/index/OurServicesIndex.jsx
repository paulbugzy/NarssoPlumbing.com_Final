import SectionTitle from '../Common/SectionTitle';
import CaruselServices from '../Common/CaruselServices';
const OurServicesIndex = () => {
	return (
		<>
			<div className="container container__fluid-lg section__indent-top ">
				<div className="md:flex md:gap-[30px] holder__title">
					<div className="md:basis-1/2">
						<SectionTitle
							dataSubtitle="our services"
							dataTitle="From Leaking Faucet to Gushing Pipes"
							dataTextUnder="Services"
							dataAddClass="blocktitle__nomargin blocktitle__left"
							dataMaxWidth="430px"
						/>
					</div>
					<div className="md:basis-1/2 relative">
						<p className='ttnotes no-resize-text'>
							While certain plumbing issues, such as a minor toilet clog, can be quickly addressed with do-it-yourself methods, most plumbing problems require the assistance of a professional.
						</p>
					</div>
				</div>
			</div>
			<div className="container__fluid">
				<div className='lg__indent-x'>
					<CaruselServices />
				</div>
			</div>
		</>
	)
};
export default OurServicesIndex;