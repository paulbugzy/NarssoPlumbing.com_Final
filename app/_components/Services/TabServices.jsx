'use client';
import React, { useState, Suspense, lazy } from 'react';
const Modal = lazy(() => import('../Common/Modal'));
const FormModal = lazy(() => import('../Common/FormModal'));
//Loading data into tabs
import TabServices__item1 from "./TabServices__item1";
import TabServices__item2 from "./TabServices__item2";
import TabServices__item3 from "./TabServices__item3";
import TabServices__item4 from "./TabServices__item4";
import TabServices__item5 from "./TabServices__item5";
import TabServices__item6 from "./TabServices__item6";
const tabsData = [
	{
		id: 1,
		title: 'Drain Cleaning Services',
		srcLayout: 'TabServices__item1',
	},
	{
		id: 2,
		title: 'Faucet Repair Services',
		srcLayout: 'TabServices__item2',
	},
	{
		id: 3,
		title: 'Water Heater Services',
		srcLayout: 'TabServices__item3',
	},
	{
		id: 4,
		title: 'Sewer Installation',
		srcLayout: 'TabServices__item4',
	},
	{
		id: 5,
		title: 'Toilet Repair Services',
		srcLayout: 'TabServices__item5',
	},
	{
		id: 6,
		title: 'Leaking Tap Repairs',
		srcLayout: 'TabServices__item6',
	},
];
const TabsServices = () => {
	const [currentNav, setCurrentNav] = useState('1');
	const [currentLayout, setcurrentLayout] = useState('TabServices__item1');
	const [openModal, setOpenModal] = useState(false);
	return (
		<>
			<div className='tabs__wrapper tabs__wrapper-navmd-row2 section__inner-bottom'>
				<div className="container container__fluid-lg">
					<div className={`tabs__nav tabs__sm unselectable`}>
						{tabsData.map(({ id, title, srcLayout, open }) => (
							<div key={id} className={`${currentNav == id && 'tabs__nav_active'} tabs__nav_item`}
								onClick={() => { setCurrentNav(id); setcurrentLayout(srcLayout);}
							}>
								<span className="tabs__nav_link">{title}</span>
							</div>
						))}
					</div>
					<div className="tabs__container">
						{currentLayout === "TabServices__item1" && (
							<TabServices__item1 onClickBtn={() => setOpenModal(true)} />
						)}
						{currentLayout === "TabServices__item2" && (
							<TabServices__item2 onClickBtn={() => setOpenModal(true)} />
						)}
						{currentLayout === "TabServices__item3" && (
							<TabServices__item3 onClickBtn={() => setOpenModal(true)} />
						)}
						{currentLayout === "TabServices__item4" && (
							<TabServices__item4 onClickBtn={() => setOpenModal(true)} />
						)}
						{currentLayout === "TabServices__item5" && (
							<TabServices__item5 onClickBtn={() => setOpenModal(true)} />
						)}
						{currentLayout === "TabServices__item6" && (
							<TabServices__item6 onClickBtn={() => setOpenModal(true)} />
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
		</>
	)
};
export default TabsServices;