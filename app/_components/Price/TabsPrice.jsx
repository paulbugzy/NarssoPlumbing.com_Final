'use client';
import React, { useState } from 'react';
//Loading data into tabs
import TabsPrice__item1 from "./TabsPrice__item1";
import TabsPrice__item2 from "./TabsPrice__item2";
const tabsData = [
	{
		id: 1,
		title: 'Hourly Rate Plumbing',
		srcLayout: TabsPrice__item1,
		open: 'tabs__nav_active'
	 },
	 {
		id: 2,
		title: 'Fixed Price Plumbing',
		srcLayout: TabsPrice__item2
	 },
];
const TabsPrice = () => {
	const [currentNav, setCurrentNav] = useState('1');
	const [currentLayout, setcurrentLayout] = useState(TabsPrice__item1);

	return (
		<div className="container container__fluid-lg">
			<div className="tabs__nav tabs__lg unselectable">
				{tabsData.map(({ id, title, srcLayout, open }) => (
					<div key={id} className={`
						${currentNav == id && 'tabs__nav_active'} tabs__nav_item`}
						onClick={() => { setCurrentNav(id); setcurrentLayout(srcLayout);}
					}>
						<span className="tabs__nav_link">{title}</span>
					</div>
				))}
			</div>
			<div className="tabs__container no-resize-text">
				{(() => {
					return currentLayout;
				})()}
			</div>
		</div>
	)
};
export default TabsPrice;