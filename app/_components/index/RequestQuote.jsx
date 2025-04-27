//css
import styles from './RequestQuote.module.css'
//img
import Image from 'next/legacy/image';
import FormRequestQuote from "../Common/FormRequestQuote";
const RequestQuote = () => (
	<>
		<div className={`${styles.section__indent_negative} container container__fluid-lg`}>
			<div className="sm:flex sm:gap-[30px] lg:gap-[40px] xl:gap-[65px] form__box">
				<div className={`${styles.form__bg} absolute`}>
					<Image
						src="/images/home__form_bg.png"
						width={1174}
						height={177}
						layout="responsive"
						quality={0}
						alt="Happy Clients"
					/>
				</div>
				<div className={`${styles.col__form}`}>
					<FormRequestQuote />
				</div>
				<div className={`${styles.col__img} sm-max:mt-[35px]`}>
					<div className={`${styles.form__img} relative`}>
						<Image
							src="/images/home__form-img.jpg"
							width="384"
							height="466"
							layout="responsive"
							quality={0}
							alt="Happy Clients"
						/>
						<div className={`${styles.form__label} lazyload absolute`} data-bg="images/home__form-label_bg.png">
							<div className={`${styles.form__label_icon} icon-1545289`}></div>
							<div className={`${styles.form__label_text1} font-bold`}>5,400</div>
							<div className={`${styles.form__label_text2}`}>
								Happy Clients
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</>
);
export default RequestQuote;