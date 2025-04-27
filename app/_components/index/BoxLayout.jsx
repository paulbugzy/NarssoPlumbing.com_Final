import styles from './BoxLayout.module.css';
const BoxLayout = (props) => {
	return (
		<>
			{props.dataSrcData.map(({ id, icon, title, text }) => (
				<div key={id} className={styles.boxlayout__item}>
					<div className={`${styles.boxlayout__icon} icon-694055 relative`}>
						<i className={icon}></i>
					</div>
					<h6 className={`${styles.boxlayout__title} ttsubtitle_sm`}>{title}</h6>
					<p>{text}</p>
				</div>
			))}
		</>
	)
};
export default BoxLayout;