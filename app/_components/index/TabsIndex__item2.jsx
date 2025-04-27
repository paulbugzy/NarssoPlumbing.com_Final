import SectionTitle from '../Common/SectionTitle';
import Signature from '../Common/Signature';
import BoxLayout from './BoxLayout'
import styles from './TabsIndex.module.css'
const colData = [
	{
		id: 1,
		icon: 'icon-780840',
		title: 'Experienced Team',
		text: 'Most of the employees have a great experience.'
	},
	{
		id: 2,
		icon: 'icon-2058768',
		title: 'Friendly Experts',
		text: 'We employ most courteous professionals.'
	},
	{
		id: 3,
		icon: 'icon-1179233',
		title: 'Fully Licensed',
		text: 'All of our technicians are fully licensed.'
	},
	{
		id: 4,
		icon: 'icon-1233103',
		title: 'Quality Every Time',
		text: 'We warranty reliable service with every job!'
	},
]
const colRightData = colData.filter(colData => colData.id % 2 == 0);
const colLeftData = colData.filter(colData => colData.id % 2 !== 0);
const TabsIndex__item2 = () => {
	return (
		<div className='md:flex md:gap-[30px]'>
			<div className={`basis-1/2 md-max:mt-[-8px]`}>
				<SectionTitle
					dataSubtitle="why choose us"
					dataTitle="Expect the Best with Our Service"
					dataMaxWidth="422px"
				/>
				<p>
					Our goal is to provide our customers with highly professional plumbing services. We pride ourselves on our reliable and friendly service that customers can trust. Our expert team are on call 24/7 for any plumbing emergency.
				</p>
				<ul className="list__type1 lg-max:mt-[19px] lg:mt-[33px]">
					<li>You approve the price before we start the job</li>
					<li>We treat your property like our own</li>
				</ul>
				<div className={styles.signature__indent}>
					<Signature
						dataSrcImg="/images/signature-img01.png"
						dataTitle="CEO & Founder"
					/>
				</div>
			</div>
			<div className="basis-1/2 flex
				lg:gap-[30px]  lg-max:gap-[15px]
				only-md:mt-[40px] sm-max:mt-[35px]">
				<div className={`basis-1/2 ${styles.custom__col}`}>
					<BoxLayout dataSrcData={colLeftData} />
				</div>
				<div className={`basis-1/2 ${styles.custom__col}`}>
					<BoxLayout dataSrcData={colRightData} />
				</div>
			</div>
		</div>
	)
};
export default TabsIndex__item2;