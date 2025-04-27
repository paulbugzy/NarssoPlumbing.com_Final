import styles from './RowCopyright.module.css'
const CopyrightHolder = (now) => (
	<>
		<div className={`${styles.footerCopyright} flex flex-wrap justify-center content-center items-center`}>&copy; {new Date().getFullYear()} Plumbio. All Rights Reserved.</div>
	</>
);
export default CopyrightHolder;