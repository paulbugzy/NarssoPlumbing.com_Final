import styles from './Information.module.css'
import {InformationData} from "./InformationData"
export default function Information(props){
	if (!InformationData) return null;
	return (
		<div className={`${styles.hinfo} flex flex-wrap items-center`}>
			{InformationData.map(({ id, text, icon, link, title, addclass }) => (
				<address key={id} className={addclass}>
					{title ? (
						<span className={styles.hinfo__title}>{title}</span>
					):null}
					{icon ? (
						<i className={`${icon} ${styles.hinfo__icon} relative inline-block`}></i>
					):null}
					{link ? (
						<a href={link} className={`${styles.hinfo__link} relative inline-block`}>&nbsp;{text}</a>
					):null}
					{text && !link ? (<>{text}</>):null}
				</address>
			))}
		</div>
	);
}