'use client';
import Image from 'next/legacy/image';
import Button from '../Common/Button';
import SectionTitle from '../Common/SectionTitle';
import style from './TabServices.module.css'
const TabsIndex__item1 = ({onClickBtn}) => {
	return (
		<>
			<div className={`md:flex md:gap-[30px] lg:gap-[60px] md:flex-row-reverse`}>
				<div className="md:basis-1/2">
					<div className='img__fixed-height'>
						<Image
							className='img__fixed-height'
							src='/images/services/tab-img01.jpg'
							loading={`lazy`}
							layout='fill'
							objectFit='cover'
							quality={0}
							alt='100% Satisfaction Guarantee'
						/>
					</div>
				</div>
				<div className="md:basis-1/2 only-md:mt-[40px] sm-max:mt-[35px]">
					<SectionTitle
						dataTitle="Drain Cleaning Services"
						dataAddClass="blocktitle__topNone2"
					/>
					<p>
						Drain blockages are a common issue, and there can be a number or causes. It is often a problem that can cause disruption to your day and can end up costing a lot of money if you go to the wrong company.
					</p>
					<ul className='list__type1 list__top'>
						<li>Diagnosing the problem: $49 waived with repair</li>
						<li>Price: Starting at $200</li>
						<li>Average time to complete: 1 hour</li>
					</ul>
					<Button
						className={`${style.btn__top}`}
						onClick={(e) => {
							onClickBtn();
						}}
					>
						Schedule Service
					</Button>
				</div>
			</div>
		</>
	)
};
export default TabsIndex__item1;