import Image from 'next/legacy/image';
import SectionTitle from '../Common/SectionTitle';

import BoxIcon2 from '../Common/BoxIcon2';
export const BoxIcon2Data = [
	{
		id: 1,
		icon: `icon-2891086`,
		title: `Plumbing Specialists`,
		text: `Our team will work intelligently to come up with the optimal solution and then execute it perfectly.`
	},
	{
		id: 2,
		icon: `icon-3731419`,
		title: `A Friendly Face`,
		text: `We'll always take the time to explain what you can do to keep your plumbing system as well as possible.`
	},
	{
		id: 3,
		icon: `icon-1365455`,
		title: `Industry Leaders`,
		text: `Our team manages to stay ahead of the crowd by always integrating new advances.`
	},
  ]
const TabsIndex__item1 = () => {
	return (
		<>
			<div className="md:grid-cols-2 md:grid  md:grid-flow-col md:gap-[30px]">
				<div className={`basis-1/2 md-max:mt-[-8px]`}>
					<SectionTitle
						dataSubtitle="what expect from us"
						dataTitle="Our Approach"
						dataMaxWidth="422px"
					/>
					<p>
						Our approach has been simple. Provide a competitive price using qualified plumbers with no hidden fees backed by a 100% guarantee on workmanship. Our plumbers are available now for any plumbing repairs or installation services for your home or business.
					</p>
						<ul className="list__type1 lg-max:mt-[19px] lg:mt-[33px]">
						<li>We offer options for pricing on every repair</li>
						<li>Expert, guaranteed workmanship</li>
					</ul>
				</div>
				<div className={`basis-1/2 sm-max:mt-[35px] only-md:mt-[40px] md:mt-[7px]`}>
					<div className='img__fixed-height'>
						<Image
							src='/images/home__tabimg01.jpg'
							layout='fill'
							quality={0}
							objectFit='cover'
							alt='Our Approach'
						/>
					</div>
				</div>
			</div>
			<div className={`relative sm-max:mt-[35px] only-md:mt-[40px] md:mt-[55px] grid md:grid-cols-2 lg:grid-cols-3 lg:gap-[30px] lg-max:gap-[20px]`}>
				<BoxIcon2 dataSrcData={BoxIcon2Data} />
			</div>
		</>
	)
};
export default TabsIndex__item1;