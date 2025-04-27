//Import Database
import {socials} from "../../_dataGeneralSite/dataSocials";
//Import Css
import styles from './SocialsHeader.module.css';
export default function SocialsHeader() {
	if (!socials) return null;
	return (
		<div className={`${styles.hsocial} flex flex-nowrap item-center align-center`}>
			<div className={`${styles.social__title}  font-bold  whitespace-nowrap`}>Follow us:</div>
			<ul className={`${styles.social__list} inline-flex`}>
				{socials.map(({ id, icon, path, title, ariaLabel }) => (
					<li key={id}>
						<a
							href={path}
							className={`inline-flex justify-center relative`}
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
	);
  }
