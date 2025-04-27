import styles from './ListWithTitle.module.css';
const ListWithTitle = ({dataLayout, dataAddClass}) => {
	return (
		<div className={`${styles.paragraph} ${dataAddClass} paragraph  `}>
			{dataLayout.map(({ id, title, text }) => (
				<div key={id} className={`${styles.paragraph__item} relative no-resize-text`}>
					<strong className='base__color'>{title}</strong> {text}
				</div>
			))}
		</div>
	)
};
export default ListWithTitle;