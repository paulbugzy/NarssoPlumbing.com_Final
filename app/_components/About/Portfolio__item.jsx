import Image from 'next/legacy/image';
import styles from './Portfolio.module.css';
const Portfolio__item = ({dataArray, onClickId, passValue}) => {
	return (
		<div className={`grid md-max:grid-cols-2 md:grid-cols-3 md-max:gap-[15px] md:gap-[30px]`}>
			{Array.isArray(dataArray) ?
				dataArray.map(({ id, title, img__path}) => (
					<div key={id} className={`${styles.gallery__item} relative`}>
						<div
							className={`${styles.gallery} ttgallery glightbox relative block cursor-pointer`}
							onClick={() => {
								passValue(true);
								onClickId(id);
							}}
						>
							<div className={`${styles.gallery__img} relative z-0`}>
								<Image
									src={img__path}
									width={370}
									height={274}
									quality={0}
									alt={title}
								/>
								<div className={`${styles.gallery__icon} icon-2089805 flex justify-center content-center items-center absolute rounded-[50%]`}></div>
							</div>
							<div className={`${styles.gallery__title} relative flex justify-start content-center items-center z-10`}>
								{title}
							</div>
						</div>
					</div>
				))
				: 0
			}
		</div>
	)
};
export default Portfolio__item;