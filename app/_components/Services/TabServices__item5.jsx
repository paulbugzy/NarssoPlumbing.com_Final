'use client';
import Image from 'next/legacy/image';
import Button from '../Common/Button';
import SectionTitle from '../Common/SectionTitle';
import style from './TabServices.module.css'
const TabsIndex__item5 = ({onClickBtn}) => {
	return (
		<>
			<div className={`md:flex md:gap-[30px] lg:gap-[60px] md:flex-row-reverse`}>
				<div className="md:basis-1/2">
					<div className='img__fixed-height'>
						<Image
							src='/images/services/tab-img05.jpg'
							layout='fill'
							objectFit='cover'
							quality={0}
							loading={`lazy`}
							alt='100% Satisfaction Guarantee'
						/>
					</div>
				</div>
				<div className="md:basis-1/2 only-md:mt-[40px] sm-max:mt-[35px]">
					<SectionTitle
						dataTitle="Toilet Repair Services"
						dataAddClass="blocktitle__topNone2"
					/>
					<p>
					Our full suite of toilet installation and repair services include unclogging toilets, fixing and sealing off leaks, repairing flushing mechanisms, and installing new units.
					</p>
					<ul className='list__type1 list__top'>
						<li>Diagnosing the problem: $49 waived with repair</li>
						<li>Repair price: Starting at $199</li>
						<li>Average time to complete: 1 to 2 hours</li>
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
export default TabsIndex__item5;