//Demo icons: public/fonts-icon/demo.html
//Icon settings:public/fonts-icon/selection.json
//Icon changing service: https://icomoon.io/app/#/select
import styles from './BoxIcon2.module.css';
const BoxIcon = (props) => {	
	return (
	  <>
		{props.dataSrcData.map(({ id, icon, title, text }) => (
			<div key={id} className={`${styles.boxicon__item} flex relative`}>		
				{icon ? (
					<div className={`${styles.boxicon__icon} icon-694055 relative`}>
						<i className={`${icon} absolute`}></i>
					</div>
				):null}
				<div className={styles.boxicon__cont}>
					{title ? (
						<div className={styles.boxicon__title}>
							{title}
						</div>
					):null}
					{text ? (
						<p>{text}</p>
					):null}
				</div>
			</div>
		))}		
	  </>
	);
  }
  export default BoxIcon;