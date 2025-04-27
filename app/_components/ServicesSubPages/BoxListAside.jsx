import styles from './BoxListAside.module.css';
const BoxListAside = ({dataTitle, dataList}) => {
	return (
		<div className={`${styles.boxlist__aside} relative`}>
			{dataTitle ? (
				<h3 className={`${styles.title} ttsubtitle`}>{dataTitle}</h3>
			):null}
			<ul className={`${styles.list}`}>
				{dataList.map(({ id, text }) => (
					<li key={id} className="flex relative">
						<span className={`${styles.list__icon} relative`}><strong>{id}</strong></span>
						<span className={`${styles.list__text}`}>{text}</span>
					</li>
				))}
			</ul>
		</div>
	)
};
export default BoxListAside;