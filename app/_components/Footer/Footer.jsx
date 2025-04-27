import styles from './Footer.module.css'
import RowCopyright from "./RowCopyright"
import RowInfo from "./RowInfo"
import RowLayout from "./RowLayout"
import GoogleMap from "../Common/GoogleMap"
const Footer = () => (
	<>
		<footer id="tt-footer">
			<GoogleMap  />
			<div className={`${styles.footerLayout} lazyload bg-no-repeat`} data-bg="../images/map-footer.png">
				<div className="container container__fluid-lg">
					<RowInfo />
					<RowLayout />
				</div>
			</div>
			<RowCopyright />
		</footer>
	</>
);
export default Footer;