
import Image from 'next/legacy/image';
import styles from './Signature.module.css';
const Signature = ({dataSrcImg, dataTitle}) => {	
	return (		
		<div className={`${styles.signature} inline-flex content-center items-stretch`}>
			<div className={`${styles.signature__img} leading-none`}>
				<Image
					src={dataSrcImg}
					width={239}
					height={70}
					alt={dataTitle}
				/>
			</div>
			<div className={`${styles.signature__title} flex items-center content-center relative`}>{dataTitle}</div>
		</div>		
	)
};
export default Signature;