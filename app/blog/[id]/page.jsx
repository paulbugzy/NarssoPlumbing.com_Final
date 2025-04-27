import Image from 'next/legacy/image';
//Import Css
import styles from '../../_components/Blog/Singlepost.module.css';
import styles2 from '../../_components/Blog/Blog.module.css';
//Import Sections
import PageTitle from "../../_components/Common/PageTitle";
import Socials from "../../_components/Common/Socials";
import AdminInfo from '../../_components/Blog/AdminInfo';
//Import Database
import { getPost } from '../../libs/data_post.js'
//Page Layout
const postData = {
	postAdmin: {
		srcimg: "/images/blog/admin-avatar.jpg",
		title: "About Admin",
		description: "If you want to use your traditional thermostat, you have to interface with the device directly. When you get there, you’ll find your options are quite limited."
	}
}
const SinglePost = async ({params}) => {
	const {id} = params;
	const post = JSON.parse(JSON.stringify(await getPost(id)));
	return (
	  <>
		  <PageTitle
				dataSubTitle={`Blog`}
				dataSubTitleSrc={`/blog`}
				dataTitle={`${post.title}`}
			/>
		  	<main id="tt-pageContent">
			  <div className="section__inner">
			  		<div className={`container container__fluid-xl`}>
						<div className='md:flex md:items-start'>
							<div className={`${styles2.holder__colleft} ${styles.colInnerBox}`}>
								 <div className={`${styles.singlepost} relative ${!post.srcimg && styles.postNotImg}`}>
									{post.srcimg ? (
										<div className={`${styles.singlepost__img} relative overflow-hidden`}>
											<Image
												src='/images/about_img01.jpg'
												width="780"
												height="449"
												blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAAFUAQMAAADvakB3AAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAACJJREFUaN7twYEAAAAAw6D7Ux9hAtUAAAAAAAAAAAAAACAcLnwAAWOAc2cAAAAASUVORK5CYII='
												layout="responsive"
												objectFit="cover"
												alt={postData.title}
											/>

										</div>
									):null}
									<div className={`${styles.singlepost__cont}`}>
										{postData.title ? (
											<h2 className={`${styles.singlepost__title}`}>
												{post.title}
											</h2>
										):null}
										{post.description ? (
											<p>
												{post.description}
											</p>
										):null}
										{post.blockquoteTitle ? (
											<blockquote className={`${styles.blockquote} ${styles.blockquote__top} relative`}>
												<div className={`${styles.blockquote__line} ${styles.blockquote__inner} relative`}>
													{post.blockquoteText ? (
														<p>{post.blockquoteText}</p>
													):null}
													{post.blockquoteTitle ? (
														<p className={`indent__top`}>
															<strong className="base__color">- {post.blockquoteTitle}, </strong>
															<span className="text-sm">{post.blockquoteSubTitle}</span>
														</p>
													):null}
												</div>
											</blockquote>
										):null}
										{post.title2 ? (
											<h5 className='ttsubtitle ttsubtitle__top'>
												{post.title2}
											</h5>
										):null}
										{post.subtext2 ? (
											<p>
												{post.subtext2}
											</p>
										):null}
										{post.title3 ? (
											<h5 className='ttsubtitle ttsubtitle__top'>
												{post.title3}
											</h5>
										):null}
										{post.subtext3 ? (
											<p>
												{post.subtext3}
											</p>
										):null}
									</div>
								</div>
							</div>
							<div className={`${styles2.holder__colright} ${styles.holder__colright} sticky`}>
								<AdminInfo postData={postData} />
								<div className={`${styles.singlepost__meta} flex`}>
									<Socials />
								</div>
							</div>
						</div>
					</div>
				</div>
		  	</main>
	  </>
	)
}
export default SinglePost