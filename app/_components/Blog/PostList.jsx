import { useState } from "react"
import Image from 'next/legacy/image'
import Link from 'next/link'
//Import Sections
import YoutubeVideo from '../Common/YoutubeVideo'
import Modal from '../Common/Modal'
import DatePost from '../Common/DatePost';
//Import CSS
import styles from './PostList.module.css'
const PostList = (props) => {
	const [openModal, setOpenModal] = useState(false);
	const [youtubeVideoCode, setYoutubeVideoCode] = useState(false);
    const { _id, title, srcimg, description, updatedAt, youtubeCode, blockquote__text, blockquote__title, blockquote__subtitle } = props.data;
	return (
		<>
			<div key={_id} className={`${styles.post} relative`}>
				{srcimg  ? (
					<div className={`${styles.post__imgholder} overflow-hidden relative`}>
						{srcimg ? (
							<div className={`${styles.post__img} relative`}>
								<Image
									src={srcimg}
									width="780"
									height="449"
									layout="responsive"
									objectFit="cover"
									loading={`eager`}
									blurDataURL='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
									alt={title}
								/>
								{youtubeCode ? (
									<div
										className={`${styles.btn__round_icon} btn__round_icon obj__indent-center obj__inner-center icon-808557 unselectable`}
										onClick={() => {
											setOpenModal(true);
											setYoutubeVideoCode(youtubeCode);
										}}
									>
										<span></span>
									</div>
								):null}
							</div>
						):null}
					</div>
				):null}
				{updatedAt ? (
					<div className={`${styles.post__data} overflow-hidden relative flex whitespace-nowrap`}>
						<div className="whitespace-nowrap">
							<i className={`${styles.post__data_icon} icon-9927001`}></i>
							<DatePost dateString={updatedAt} />
						</div>
					</div>
				):null}
				<div className={styles.post__layout}>
					{title ? (
						<h2 className={`${styles.post__title}`}>
							<Link href='/blog/{_id}'  as={`/blog/${_id}`}>
								<span>{title}</span>
							</Link>
						</h2>
					):null}
					{description ? (
						<p>
							{description}
						</p>
					):null}
					{blockquote__text ? (
						<blockquote className={`${styles.blockquote} ${styles.blockquote__top} relative`}>
							<div className={`${styles.blockquote__line} ${styles.blockquote__inner} relative`}>
								{blockquote__text ? (
									<p>The infamous toilet paper shortage occurring all over America is a natural consequence of the quarantine. It’s also probably not ending any time soon. Unless you luck out, you may.</p>
								):null}
								{blockquote__title ? (
									<p className={`indent__top`}>
										<strong className="base__color">- {blockquote__title}, </strong>
										<span className="text-sm">{blockquote__subtitle}</span>
									</p>
								):null}
							</div>
						</blockquote>
					):null}
					<Link href='/blog/{_id}' className={`${styles.post__btnmore} btn`} as={`/blog/${_id}`}><span>Read more</span></Link>
				</div>
			</div>
			<Modal
				openModal={openModal}
				onClose={() => setOpenModal(false)}
				dataModalSize="modal__sizeLg"
				dataModalClass="modal__type2"
			>
				<YoutubeVideo dataYoutubeVideoCode={youtubeVideoCode} />
			</Modal>
		</>
	)
};
export default PostList;