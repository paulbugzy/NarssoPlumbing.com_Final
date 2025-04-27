'use client';
import React, { useState } from 'react';
//Loading data into tabs
import TabsIndex__item1 from "./TabsIndex__item1";
import TabsIndex__item2 from "./TabsIndex__item2";
import TabsIndex__item3 from "./TabsIndex__item3";
const tabsData = [
	{
		id: 1,
		title: 'Our Approach',
		srcLayout: TabsIndex__item1,
	 },
	 {
		id: 2,
		title: 'Why Choose Us?',
		srcLayout: TabsIndex__item2,
		open: 'tabs__nav_active'
	 },
	 {
		id: 3,
		title: 'Mission & Vision',
		srcLayout: TabsIndex__item3,
	 },
];
const TabsIndex = () => {
	const [currentNav, setCurrentNav] = useState('2');
	const [currentLayout, setcurrentLayout] = useState(TabsIndex__item2);
	return (
		<div className="container container__fluid-lg">
			<div className="tabs__nav tabs__lg tabs__fullwidth unselectable">
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
export default TabsIndex;