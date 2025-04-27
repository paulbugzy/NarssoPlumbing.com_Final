import Image from 'next/image'
import styles from './RowLayout.module.css'
import SocialsFooter from "../Footer/SocialsFooter"
const LayoutHolder = () => (
	<>
		<div className={`${styles.rowLayout} f-logo-layout text-center no-resize-text`}>
			<a href="index.html" className={`${styles.fLogo} inline-flex`}>
				<Image
					src='/images/f-logo.png'
					width={146}
					height={102}
					quality={0}
					alt='Plumbio'
				/>
			</a>
			<p>
				Our plumbing contractors provide courteous, friendly, affordable, and effective residential plumbing services.
			</p>
			<SocialsFooter />
		</div>
	</>
);
export default LayoutHolder;


