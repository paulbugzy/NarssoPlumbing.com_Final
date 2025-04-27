'use client';
import Image from 'next/legacy/image';
import Link from 'next/link';
import { useContext } from "react";
import { Context } from '../../_context';
import RatingView from '../Common/RatingView'
import { priceFormatting } from '../../../public/js/utilitie';
//Import Css
import styles from './Product.module.css';
//Page Layout
const Product = (props) => {
	const { _id, title, price, price__old, price__new, srcimg, label, rating } = props.data;
	const { handleAddToCart, cartItems } = useContext(Context);
	return (
		<div className={`${styles.thumbprod}`}>
			<div className="relative block">
				{label ? (
					<div className={`${styles.thumbprod__label} inline-flex absolute items-center font-bold capitalize z-[2] pointer-events-none`}>
						{label}
					</div>
				):null}
				{srcimg ? (
					<div className={`thumbprod__img unselectable`}>
						<Link className="relative block" href={`/shop/${_id}`} as={`/shop/${_id}`}>
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
						</Link>
						<button
							disabled={
								cartItems.findIndex(
								(item) => item._id === _id
							) !== -1}
							className={`${styles.thumbprod__addtocart} btn btn__type2  obj__indent-center disabled:opacity-50`}
							onClick={() => {
								handleAddToCart(props.data);
							}}
						><span>
							Add to Cart
						</span></button>
					</div>
				):null}
			</div>
			<div className="thumbprod__cont">
				<h2 className={`${styles.thumbprod__title} font-bold`}>
					<Link href={`/shop/${_id}`}  as={`/shop/${_id}`}>
						{title}
					</Link>
				</h2>
				{rating ? (
					<div className={`${styles.thumbprod__rating}`}>
						<RatingView dataTotal={rating} />
					</div>
				):null}
				<div className={`${styles.price}`}>
					{price__old && price__new ? (
						<>
							<div className={`${styles.price__old}`}>
								{priceFormatting(price__old)}
							</div>&nbsp;
							<div className={`${styles.price__new}`}>
								{priceFormatting(price__new)}
							</div>
						</>
					):null}
					{price && !price__old && !price__new ? (
						<>
							{priceFormatting(price)}
						</>
					):null}
				</div>
			</div>
		</div>
	)
};
export default Product;