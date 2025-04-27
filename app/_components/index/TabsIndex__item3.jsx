import Image from 'next/legacy/image';
import SectionTitle from '../Common/SectionTitle';
import ListWithTitle from '../Common/ListWithTitle';
//Import Data
export const dataPriority = [
	{
		id: 1,
		title: 'Accountability:',
		text: 'We are accountable to each other and the community we have sworn to serve.',
	},
	{
		id: 2,
		title: 'Innovation:',
		text: 'We encourage the advancement of our services and programs through inquiry, evaluation, problem solving and continual improvement.',
	},
	{
		id: 3,
		title: 'Professional Excellence:',
		text: 'We are dedicated to the pursuit of excellence and the demonstration of high professional standards.',
	}
]
const TabsIndex__item3 = () => {
	return (
		<>
			<div className="md:grid-cols-2 md:grid  md:grid-flow-col md:gap-[30px]">
				<div className={`basis-1/2 md-max:mt-[-8px]`}>
					<SectionTitle
						dataSubtitle="mission statement"
						dataTitle="Our Mission & Vision"
						dataMaxWidth="422px"
					/>
					<ListWithTitle
						dataLayout={dataPriority}
						dataAddClass="grid md-max:gap-[16px] md:gap-[6px]"
					/>
				</div>
				<div className={`basis-1/2 sm-max:mt-[35px] only-md:mt-[40px] md:mt-[7px]`}>
					<div className='img__fixed-height'>
						<Image
							src='/images/home__tabimg02.jpg'
							layout='fill'
							quality={0}
							objectFit='cover'
							alt='Our Approach'
						/>
					</div>
				</div>
			</div>
			<div className={`relative sm-max:mt-[35px] only-md:mt-[40px] md:mt-[55px] grid md:grid-cols-2 lg:grid-cols-3 lg:gap-[30px] lg-max:gap-[20px]`}>
				<div className={`basis-1/3`}>
					<div className='ttsubtitle_sm'>Our Vision</div>
					<p>
						We strive as a company to provide quality and value-added complete facility solutions. We measure our success by company growth and the retention of customers.
					</p>
				</div>
				<div className={`basis-1/3`}>
					<div className='ttsubtitle_sm'>Our Principles</div>
					<p>
					Honesty, Integrity, Innovation, Reliability, Respect, Empowerment, Staff Diversity, Teamwork, Dedication, Commitment, Customer Satisfaction.
					</p>
				</div>
				<div className={`basis-1/3`}>
					<div className='ttsubtitle_sm'>Values</div>
					<ul className='list__type1'>
						<li>Exceed customer expectations</li>
						<li>Open accountability at every level</li>
						<li>Servant leadership</li>
					</ul>
				</div>
			</div>
		</>
	)
};
export default TabsIndex__item3;