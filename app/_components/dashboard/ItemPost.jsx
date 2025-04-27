import Image from 'next/legacy/image';
import Link from 'next/link';
import styles from './ItemProduct.module.css';
import { deletePost } from '../../libs/action_post'
const ItemPost = (props) => {
	const { id, title, srcimg } = props.data;
	return (
		<>
			<div className={`${styles.item__wrapper} flex gap-[15px] items-center`} key={id}>
				<div className="item__title flex sm-max:flex-col  gap-[15px] flex-auto items-center sm-max:items-start">
					{srcimg ? (
						<div className={`${styles.item__img}`}>
							<Image
								src={srcimg}
								width="270"
								height="340"
								blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAAFUAQMAAADvakB3AAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAACJJREFUaN7twYEAAAAAw6D7Ux9hAtUAAAAAAAAAAAAAACAcLnwAAWOAc2cAAAAASUVORK5CYII='
								placeholder="blur"
								objectFit="cover"
								layout="responsive"
								loading='lazy'
								alt={title}
							/>
						</div>
					):null}
					<h2 className='font-bold ttsubtitle_sm'>
						{title}
					</h2>
				</div>
				<div className="item__btn flex lg:flex-row lg-max:flex-col gap-[15px]">
					<Link href={`/dashboard/blog/${id}`} className='btn'><span>Update</span></Link>
					<form
						action={deletePost}
						className="flex flex-col gap-3"
					>
						<input hidden name='id' defaultValue={id} />
						<button type='submit' className='btn btn__type2'>
							<span>Delete</span>
						</button>
					</form>
				</div>
			</div>
		</>
	)
};
export default ItemPost;