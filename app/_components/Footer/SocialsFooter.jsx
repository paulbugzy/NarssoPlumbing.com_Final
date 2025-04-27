//Import Database
import {socials} from "../../_dataGeneralSite/dataSocials";
//Import Css
import styles from './SocialsFooter.module.css';
export default function SocialsFooter() {
	if (!socials) return null;
	return (
		<div className={`${styles.fsocial} inline-flex flex-nowrap item-center align-center`}>
			<ul className={`inline-flex`}>
				{socials.map(({ id, icon, path, ariaLabel, title }) => (
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
