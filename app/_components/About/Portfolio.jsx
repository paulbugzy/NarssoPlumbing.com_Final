'use client';
import { useState } from 'react';
import SectionTitle from '../Common/SectionTitle';
import styles from './Portfolio.module.css';
import Modal from "../Common/Modal"
import ModalGallery from "../Common/ModalGallery"
import Portfolio__item from "./Portfolio__item";
//Loading data into tabs
import {dataPortfolio} from './PortfolioDate';
import {dataPortfolio2} from './Portfolio2Date';
const tabsData = [
	{
		id: 1,
		title: 'Residential',
		importArray: dataPortfolio,
		open: 'tabs__nav_active',
	},
	{
		id: 2,
		title: 'Commercial',
		importArray: dataPortfolio2,
		open: 'tabs__nav_active',
	}
];
const Portfolio = () => {
	const [currentNav, setCurrentNav] = useState('1');
	const [currentLayout, setCurrentLayout] = useState(dataPortfolio);

	const [openModal, setOpenModal] = useState(false);
	const [dataItemActive, setDataItemActive] = useState(false);

	return (
		<>
			<div className="section__indent">
				<div className="relative">
					<div className="container container__fluid-xl">
						<div className={`${styles.row__custom} md:flex md:gap-[30px]`}>
							<div className={`md:basis-2/5 lg:basis-1/2`}>
								<SectionTitle
									dataSubtitle="latest projects"
									dataTitle="Our Portfolio & Gallery"
									dataAddClass="blocktitle__left"
								/>
							</div>
							<div className={`md:basis-3/5 lg:basis-1/2 ${styles.notes02}`}>
								<p className='relative z-10 no-resize-text'>
									In the pictures below you will see examples, not only of the wide range of work we have undertaken in the past but you will be able to see the quality craftsmanship provided by our skilled engineers.
								</p>
								<div className={`${styles.notes02__under}`}>Gallery</div>
							</div>
						</div>
					</div>
				</div>
				<div className={`tabs__wrapper tabs__wrapper-navmd`}>
					<div className="container container__fluid-xl section__inner-bottom">
						<div className={`tabs__nav tabs__md  tabs__nav_left unselectable ${styles.tabsIndentNegative}`}>
							{tabsData.map(({ id, title, importArray }) => (
								<div key={id} className={`
									${currentNav == id && 'tabs__nav_active'} tabs__nav_item`}
									onClick={() => {setCurrentNav(id); setCurrentLayout(importArray);}
								}>
									<span className="tabs__nav_link">{title}</span>
								</div>
							))}
						</div>
						<div className="tabs__container">
							<Portfolio__item
								dataArray={currentLayout}
								passValue={(value) => setOpenModal(value)}
								onClickId={(id) => setDataItemActive(id)}
							/>
						</div>
					</div>
				</div>
			</div>
			<Modal
				openModal={openModal}
				onClose={() => setOpenModal(false)}
				dataModalSize="modal__sizeLg"
				dataModalClass="modal__noinner"
			>
				<ModalGallery
					dataModalArray={currentLayout}
					dataItemActive={dataItemActive}
				/>
			</Modal>
		</>
	)
};
export default Portfolio;