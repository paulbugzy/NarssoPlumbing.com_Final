//Import Database
import {socials} from "../../_dataGeneralSite/dataSocials";
//Import styles
import styles from './Socials.module.css'
const Socials = () => {
	if (!socials) return null;
	return (
	  <>
		<div className={`${styles.social}`}>
			<div className={`social__title  whitespace-nowrap ttsubtitle`}>Follow us</div>
			<ul className={`inline-flex`}>
				{socials.map(({ id, icon, path, title, ariaLabel }) => (
					<li key={id}>
						<a
							href={path}
							className={`inline-flex justify-center items-center relative`}
							target="_blank"
							rel="noreferrer noopener"
							title={title}
							aria-label={`${ariaLabel} ${title}`}

						>
							{icon ? (
								<i className={`${icon}`} aria-hidden="true" />
							):null}
						</a>
					</li>
				))}
		  	</ul>
		</div>
	  </>
	);
  }
  export default Socials;
