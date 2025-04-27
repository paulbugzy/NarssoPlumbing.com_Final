'use client';
import Button from '../Common/Button';
import SectionTitle from '../Common/SectionTitle';
import styles from './TabInfo.module.css'
const TabInfo__item1 = ({onClickBtn}) => {
	return (
		<div className={`${styles.layout__content}`}>
			<SectionTitle dataTitle="Schedule" />
			<p>
				Contact us online or call us at <a href="tel:123456789"><strong className="base__color3">123 456 789</strong></a> to schedule an appointment. We&apos;ll call you to confirm your time and send you a confirmation email with a picture of your plumber, so you know who&apos;s coming to your door.
			</p>
			<Button
				className="btn__top"
				onClick={(e) => {
					onClickBtn();
				}}
			>
				Schedule Repair
			</Button>
		</div>
	)
};
export default TabInfo__item1;