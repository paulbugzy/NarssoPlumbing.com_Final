'use client';
import Link from 'next/link'
import Image from 'next/legacy/image';
import styles from './BlogAside.module.css';
import DatePost from '../Common/DateRecentPost';
const BlogAside = ({postCategories, postTags, postRecent, onClickCategory, onClickTag, onSearch}) => {
	return (
		<>
			<div className={styles.aside__item}>
				<div className={styles.aside__title}>Search</div>
				<div className={`${styles.aside__content} relative`}>
					<input
						className='form__control'
						type="text" autoComplete='off'
						placeholder="Search Post"
						onChange={(e) => {
							onSearch(e.target.value);
						}}
					/>
					<button className='form__iconInnerRight icon-2089805'></button>
				</div>
			</div>
			<div className={styles.aside__item}>
				<div className={styles.aside__title}>Categories</div>
				<div className={styles.aside__content}>
					<ul className="list__type1">
						<li
							key={'show_all_categories'}
							onClick={(e) => {
								e.preventDefault();
								onClickCategory('all');
							}}
						>
							<a href='#'>Show all categories</a>
						</li>
						{postCategories.map((val, id) => (
							<li
								key={id}
								onClick={(e) => {
									e.preventDefault();
									onClickCategory(val)
								}}
								><a href="#">{val}</a>
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className={styles.aside__item}>
				<div className={styles.aside__title}>Tags</div>
				<div className={styles.aside__content}>
					<ul className="list__type2">
						<li
							key={'show_all_tags'}
							onClick={(e) => {
								e.preventDefault();
								onClickTag('all');
							}}
						>
							<a href="#">Show all tag</a>
						</li>
						{postTags.map((val, id) => (
							<li
								key={id}
								onClick={(e) => {
								 	e.preventDefault();
									onClickTag(val);
								}}
							>
								<a href="#">{val}</a>
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className={styles.aside__item}>
				<div className={styles.aside__title}>Recent Posts</div>
				<div className={styles.aside__content}>
					{postRecent.map(({ _id, title, srcimg, updatedAt }) => (
						<div key={_id} className={`${styles.asidePost__item}`}>
							{srcimg ? (
								<Link href='/blog/{_id}'  as={`/blog/${_id}`} className={`${styles.asidePost__img} relative`}>
									<Image
										src={srcimg}
										width="254px"
										height="160px"
										layout="responsive"
										objectFit="cover"
										blurDataURL='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
										alt={title}
									/>
								</Link>
							):null}
							<div className={`${styles.asidePost__data} icon-694055 inline-block relative`}>
								<div className={`${styles.asidePost__dataHolder} flex-col obj__inner-center absolute z-[2]`}>
									<DatePost dateString={updatedAt} />
								</div>
							</div>
							<h4 className={`${styles.asidePost__title} ttsubtitle_sm`}>
								<Link href='/blog/{_id}' as={`/blog/${_id}`}>{title}</Link>
							</h4>
						</div>
					))}
				</div>
			</div>
		</>
	)
};
export default BlogAside;
