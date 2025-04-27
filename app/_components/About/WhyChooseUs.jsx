import SectionTitle from '../Common/SectionTitle';
import styles from './WhyChooseUs.module.css';
import {dataList} from './WhyChooseUsData';

const areaLength = dataList.length / 2;
const colPart2Data = dataList.slice(areaLength);
const colPart1Data = dataList.slice(0, areaLength);
const WhyChooseUs = () => {	
	return (
		<div className="section__indent">
			<div className={`${styles.layout02} relative`}>
				<div className={`${styles.layout02__bg} lazyload`} data-bg="images/about_img03.jpg"></div>
				<div className="container container__fluid-xl">
					<div className={`${styles.layout02__content} relative`}>
						<SectionTitle
							dataSubtitle="why choose us?"
							dataTitle="We Guarantee Quality With Every Service"
							dataTextUnder="Why Us?"						
							dataAddClass="blocktitle__left"
							dataMaxWidth="485px"
						/>
						<p>
							Our number one priority is providing outstanding customer service for each and every job, so that you walk away 100% satisfied each and every time.
						</p>
						<div className={`${styles.layout02__list} list__type1 grid sm:grid-cols-2 sm:gap-x-[30px] lg:max-w-[590px]`}>
							<ul>
								{colPart1Data.map(({ id, list__item }) => (
									<li key={id}>
										{list__item}
									</li>
								))}
							</ul>
							<ul>
								{colPart2Data.map(({ id, list__item }) => (
									<li key={id}>
										{list__item}
									</li>
								))}
							</ul>
						</div>					
					</div>
				</div>
			</div>
		</div>	
	)
};
export default WhyChooseUs;