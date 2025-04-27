//Demo icons: public/fonts-icon/demo.html
//Icon settings:public/fonts-icon/selection.json
//Icon changing service: https://icomoon.io/app/#/select
import styles from './BoxIcon.module.css';
const BoxIcon = (props) => {	
	return (
	  <>
		{props.dataSrcData.map(({ id, icon, title, title__small, text }) => (
			<div key={id} className={`${styles.boxicon__item} md:flex relative`}>		
				{icon ? (
					<div className={`${styles.boxicon__icon} ${icon} relative`}>
						<i className="icon-694055"></i>
					</div>
				):null}
				<div className={styles.boxicon__cont}>
					{title ? (
						<div className={styles.boxicon__title}>
							{title}<sub>{title__small}</sub>
						</div>
					):null}
					{text ? (
						<div className={styles.boxicon__text}>{text}</div>
					):null}
				</div>
			</div>
		))}
	  </>
	);
  }
  export default BoxIcon;