import styles from './PageTitle.module.css';
import Image from 'next/legacy/image';
import Link from 'next/link';
const PageTitle = (props) => {
	return (
		<div className={`${styles.pageTitle__wrapper} relative`}>
			<div className={`${styles.pageTitle__box} flex items-center relative`}>
				<Image
					src="/images/pagetitle_bg01.jpg"
					quality={0}
					className={`${styles.pageTitle__bg} object-cover`}
					layout='fill'
					priority
					loading={`eager`}
					alt={props.dataTitle}
				/>
				<div className={`${styles.container__custom} container relative z-3`}>
					{props.dataTitle ? (
						<div className={styles.pageTitle__title}>
							{props.dataTitle}
						</div>
					):null}
					<ul className={`${styles.breadCrumbs} flex items-center flex-wrap unselectable`} aria-label="breadcrumb">
						<li><Link href="/">Home</Link></li>
						{props.dataSubTitle && props.dataSubTitleSrc ? (
							<li>
								<Link href={props.dataSubTitleSrc}>{props.dataSubTitle}</Link>
							</li>
						):null}
						{props.dataTitle ? (
							<li>
								{props.dataTitle}
							</li>
						):null}
					</ul>
				</div>
			</div>
		</div>
	);
}
export default PageTitle;