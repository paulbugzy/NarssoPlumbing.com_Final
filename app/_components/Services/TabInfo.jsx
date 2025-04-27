'use client';
import React, { useState, Suspense, lazy } from 'react';
import Image from 'next/legacy/image';
import styles from './TabInfo.module.css';
const Modal = lazy(() => import('../Common/Modal'));
const FormModal = lazy(() => import('../Common/FormModal'));

//Loading data into tabs
import TabInfo__item1 from "./TabInfo__item1";
import TabInfo__item2 from "./TabInfo__item2";
import TabInfo__item3 from "./TabInfo__item3";
const tabsData = [
	{
		id: 1,
		title: 'Schedule',
		srcLayout: 'TabInfo__item1',
	},
	{
		id: 2,
		title: 'Pricing',
		srcLayout: 'TabInfo__item2',
	},
	{
		id: 3,
		title: 'Feedback',
		srcLayout: 'TabInfo__item3',
	}
];
const TabInfo = () => {
	const [currentNav, setCurrentNav] = useState('1');
	const [currentLayout, setcurrentLayout] = useState('TabInfo__item1');
	const [openModal, setOpenModal] = useState(false);
	return (
		<div className='mt-[-33px] section__inner-bottom'>
			<div className="container container__fluid-lg">
				<div className="md:flex md:gap-[40px] lg:gap-[70px] md:justify-start">
					<div className="md:basis-1/2">
						<div className={`img__fixed-height relative`}>
							<Image
								src='/images/services/tab02-img01.jpg'
								layout='fill'
								objectFit='cover'
								quality={0}
								className="md-max:layout-[fill]"
								alt='Schedule'
							/>
						</div>
					</div>
					<div className="md:basis-1/2 only-md:mt-[50px] sm-max:mt-[35px]">
						<div className={`tabs__nav tabs__sm tabs__xs tabs__nav_left unselectable`}>
							{tabsData.map(({ id, title, srcLayout, open }) => (
								<div key={id} className={`${currentNav == id && 'tabs__nav_active'} tabs__nav_item`}
									onClick={() => { setCurrentNav(id); setcurrentLayout(srcLayout);}
								}>
									<span className="tabs__nav_link">{title}</span>
								</div>
							))}
						</div>
						<div className={`${styles.tabs__container2}`}>
							{currentLayout === "TabInfo__item1" && (
								<TabInfo__item1 onClickBtn={() => setOpenModal(true)} />
							)}
							{currentLayout === "TabInfo__item2" && (
								<TabInfo__item2 onClickBtn={() => setOpenModal(true)} />
							)}
							{currentLayout === "TabInfo__item3" && (
								<TabInfo__item3 onClickBtn={() => setOpenModal(true)} />
							)}
						</div>
						<Suspense>
							<Modal
								openModal={openModal}
								onClose={() => setOpenModal(false)}
								dataModalSize="modal__sizeLg"
								dataModalTitle="Schedule Service Online"
							>
								<FormModal closeModal={(value) => setOpenModal(value)} />
							</Modal>
						</Suspense>
					</div>
				</div>
			</div>
		</div>
	)
};
export default TabInfo;