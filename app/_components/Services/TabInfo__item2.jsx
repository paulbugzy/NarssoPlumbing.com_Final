'use client';
import Button from '../Common/Button';
import SectionTitle from '../Common/SectionTitle';
import styles from './TabInfo.module.css'
const TabInfo__item2 = ({onClickBtn}) => {
	return (
		<div className={`${styles.layout__content}`}>
			<SectionTitle dataTitle="Pricing" />
			<p>
			We&apos;ll come to your home and figure out where the clog is, so we know how best to clear it. No matter where the clog is located, we&apos;ll give you the most economical option to clear it, along with straightforward pricing.
			</p>
			<Button
				className="btn__top"
				onClick={(e) => {
					onClickBtn();
				}}
			>Schedule Repair</Button>
		</div>
	)
};
export default TabInfo__item2;