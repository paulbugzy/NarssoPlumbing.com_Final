'use client';
import Image from 'next/legacy/image';
import Button from '../Common/Button';
import SectionTitle from '../Common/SectionTitle';
import style from './TabServices.module.css'
const TabsIndex__item3 = ({onClickBtn}) => {
	return (
		<>
			<div className={`md:flex md:gap-[30px] lg:gap-[60px] md:flex-row-reverse`}>
				<div className="md:basis-1/2">
					<div className='img__fixed-height'>
						<Image
							src='/images/services/tab-img03.jpg'
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
						dataTitle="Water Heater Services"
						dataAddClass="blocktitle__topNone2"
					/>
					<p>
					We offer 24-hour water heater repair and installation. Our technicians undergo in-depth technical training and are well-equipped to handle an array of plumbing services for both electric and gas water heaters.
					</p>
					<ul className='list__type1 list__top'>
						<li>Diagnosing the problem: $49 waived with repair</li>
						<li>Repair price: Starting at $119</li>
						<li>Average time to complete: 2 hours</li>
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
export default TabsIndex__item3;