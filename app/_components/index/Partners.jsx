//css
import styles from './Partners.module.css'
//img
import Image from 'next/image';
//component
import LogoPartners from '../Common/LogoPartners';
import SectionTitle from "../Common/SectionTitle";
const Partners = () => (
	<div className='section__inner overflow-hidden'>
		<div className="container container__fluid-lg">
			<div className={`${styles.partners__wrapper} items-start`}>
				<LogoPartners
					wrapperClass="grid grid-cols-2 lg:mr-[40px] items-start lg:gap-[30px] lg-max:gap-[15px]"
				/>
				<div className={`${styles.partners__content} relative`}>
					<Image
						src="/images/extra-bg01.png"
							width={695}
							height={342}
							className="
								absolute
								top-0
								left-0
								mt-[-70px]
								max-w-[inherit]
								mg-max:mt-[-24px]
								mg-max:left:193px
							"
							loading="lazy"
							priority={false}
							alt="Our Partners"
					/>
					<div className='relative'>
						<SectionTitle
							dataSubtitle="we work with"
							dataTitle="Our Partners"
						/>
						Our suppliers are some of the world&apos;s most renowned. We also have our exclusive own-brand Instinct, which is fast gaining a reputation for quality and value.
					</div>
				</div>
			</div>
		</div>
	</div>
);
export default Partners;