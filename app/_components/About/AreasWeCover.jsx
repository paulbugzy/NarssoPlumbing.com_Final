'use client';
import Image from 'next/legacy/image';
import Link from 'next/link'
import SectionTitle from '../Common/SectionTitle';
import {dataAreasCover} from './AreasWeCoverData';
import styles from './AreasWeCover.module.css';

const areaLength = dataAreasCover.length / 2;
const colPart2Data = dataAreasCover.slice(areaLength);
const colPart1Data = dataAreasCover.slice(0, areaLength);
const CaruselCoupon = () => {
	return (
		<div className="section__inner">
			<div className="container container__fluid-lg">
				<div className="md:flex gap-[30px] relative">
					<div className="md:basis-7/12">
						<div className={`${styles.img_bg} absolute`}>
							<Image
								src='/images/extra-bg01.png'
								width={695}
								height={342}
								quality={0}
								className="tt-extra-bg02"
								alt='map'
							/>
						</div>
						<div className={`md-max:hidden grid grid-cols-2 xl:gap-[50px] lg:gap-[30px] lg-max:gap-[20px] lg:mr-[40px]`}>
							<ul className={styles.location__list}>
								{colPart1Data.map(({ id, county, state, link }) => (
									<li key={id}><a href={link}>
										<span>{county},</span> {state}</a>
									</li>
								))}
							</ul>
							<ul className={styles.location__list}>
								{colPart2Data.map(({ id, county, state, link }) => (
									<li key={id}><a href={link}>
										<span>{county},</span> {state}</a>
									</li>
								))}
							</ul>
						</div>
					</div>
					<div className="md:basis-5/12">
						<SectionTitle
							dataSubtitle="we work in"
							dataTitle="Areas We Cover"
							dataAddClass="blocktitle__topNone"
						/>
						<div className={`${styles.responsive__list} md:hidden grid grid-cols-2 xl:gap-[50px] lg:gap-[30px] lg-max:gap-[20px] lg:mr-[40px]`}>
							<ul className={styles.location__list}>
								{colPart1Data.map(({ id, county, state, link }) => (
									<li key={id}><a href={link}>
										<span>{county},</span> {state}</a>
									</li>
								))}
							</ul>
							<ul className={styles.location__list}>
								{colPart2Data.map(({ id, county, state, link }) => (
									<li key={id}><a href={link}>
										<span>{county},</span> {state}</a>
									</li>
								))}
							</ul>
						</div>
						<p className={`${styles.location__text} no-resize-text`}>
							Working with a trusted company to provide you with plumbing and HVAC services can go a long way towards helping you feel confident in the quality of the pipes, sewer lines, and heating and cooling system in your home or business.
						</p>
						<Link
							href="contact-us/coverage"
							className={`${styles.item__btn} inline-block btn lg:mt-[33px] lg-max:mt-[19px]`}
							><span>All Locations</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
};
export default CaruselCoupon;