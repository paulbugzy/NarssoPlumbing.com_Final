import styles from './Accordion.module.css';
function Accordion(props){
	return(
		<>
			<div className="accordion js-accordeon">
				{props.dataSrcData.map(({id, title, content, open}) => (
					<details
						key={id}
						className={`${styles.accordion__item}  accordion__item `}
						{...open ? {open: true}: {}}
					>
						<summary
							className={`${styles.accordion__title}
							accordion__title relative cursor-pointer duration-200 font-bold unselectable no-resize-text`}
						>
							 {title}
						</summary>
						<div className={`${styles.accordion__content} accordion__content no-resize-text`}>
							{content}
						</div>
					</details>
				))}
			</div>
		</>
	)
};
export default Accordion;