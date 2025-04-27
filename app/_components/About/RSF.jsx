import Image from 'next/legacy/image';
import styles from './RSF.module.css';
import {dataCol} from './RSFData';
const RSF = () => {
	return (
		<div className={`${styles.holder__section} relative`}>
			<div className={`${styles.holder_bg} absolute size-full top-0 left-0 z-0 lazyload`} data-bg="images/about_map.png"></div>
			<div className="container container__fluid-xl">
				<div className={`${styles.holder__item} relative grid gap-[35px] sm:grid-cols-2 md:grid-cols-3 no-resize-text`}>
					{dataCol.map(({ id, img__path, title, text }) => (
						<div key={id} className={`${styles.item} sm-max:flex`}>
							<div className={`${styles.item__img}`}>
								<Image
									src={img__path}
									width={104}
									height={120}
									quality={0}
									alt={title}
								/>
							</div>
							<div className={`${styles.item__content}`}>
								<h5 className={`${styles.item__title}`}>{title}</h5>
								<p className={`${styles.item__text}`}>
									{text}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
};
export default RSF;