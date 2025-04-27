import styles from './PromoLayout.module.css'
const PromoLayout = ({dataText, dataScrImg, dataScrImg2}) => {
	return (		
		<>
			<div className={`${styles.promo} bg-no-repeat bg-right-top lazyload promo relative flex items-stretch content-stretch`} data-bg="../images/services/promo_img01.png">			
				{dataText ? (
					<div className={`${styles.promo__content}`}>
						{dataText}
					</div>
				):null}
				{dataScrImg || dataScrImg2 ? (
					<div className={`${styles.promo__img} absolute`}>
						<picture>
							{dataScrImg2 ? (
								<source media="(min-width: 576px)" srcSet={dataScrImg2} type="image/webp" />
							):null}
							<source media="(min-width: 576px)" srcSet={dataScrImg} type="image/png" />
							<img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="" />
						</picture>
					</div>
				):null}
			</div>
		</>
	)
};
export default PromoLayout;
