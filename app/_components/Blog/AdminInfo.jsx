import Image from 'next/legacy/image';
import styles from './AdminInfo.module.css';
const AdminInfo = ({postData}) => {
	return (
		<div className={`${styles.personal} base__bg md:text-center no-resize-text no-resize-text`}>
			{postData.postAdmin.srcimg ? (
				<div className={`${styles.personal__img} inline-flex rounded-full overflow-hidden`}>
					<Image
						src={postData.postAdmin.srcimg}
						width="131"
						height="131"
						objectFit="cover"
						quality={0}
						alt={postData.postAdmin.title}
					/>
				</div>
			):null}
			<div className={`${styles.personal__cont}`}>
				<div className={`ttsubtitle_sm`}>
					{postData.postAdmin.title}
				</div>
				<p>
					{postData.postAdmin.description}
				</p>
			</div>
		</div>
	)
};
export default AdminInfo;