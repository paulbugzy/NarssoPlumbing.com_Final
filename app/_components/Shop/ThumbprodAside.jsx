'use client';
import { useState } from 'react';
import Link from 'next/link'
import Image from 'next/legacy/image';
import styles from './ThumbprodAside.module.css';

const MIN = 0;
const MAX = 500;
//Import js
import ReactSlider from 'react-slider'
import {priceFormatting} from '../../../public/js/utilitie';
//Import Sections
import RatingView from '../Common/RatingView';
import Button from '../Common/Button';
const ThumbprodAside = ({productCategories, productTags, productRecent, onClickCategory, onClickTag, onClickPrice}) => {
	const [ values, setValues ] = useState([MIN, MAX])
	return (
		<div className={styles.aside__holder}>
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
							<a href="#">Show all categories</a>
						</li>
						{productCategories.map((val, id) => (
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
				<div className={styles.aside__title}>Price</div>
				<div className={styles.aside__content}>
					<div className="price_slider__holder">
						Price: ${values[0]} &mdash; ${values[1]}
						<div className="price_slider__row">
							<ReactSlider
								className="price_slider"
								value={values}
								min={MIN}
								max={MAX}
								onChange={setValues}

								thumbClassName="price_slider__thumb"
								trackClassName="price_slider__track"
								ariaLabel={['Lower thumb', 'Upper thumb']}
								minDistance={10}
							/>
						</div>
						<Button
							type="button"
							className={'price_slider__btn'}
							onClick={(e) => {
								e.preventDefault();
								onClickPrice(values)
							}}
						>Filter</Button>
					</div>
					<style jsx global>{`
						.price_slider__row{
							margin-top:23px;
						}
						.price_slider__btn{
							margin-top:37px;
						}
						.price_slider__track{
							background-color:var(--base-color);
							height:5px;
						}
						.price_slider__thumb{
							width:14px;
							height:14px;
							background-color:var(--base-color);
							border-radius:50%;
							margin-top:-4px;
							cursor: grab;
							border:none;
							outline:none;
							box-shadow:none;
						}
					`}</style>
				</div>
			</div>
			<div className={styles.aside__item}>
				<div className={styles.aside__title}>Products</div>
				<div className={styles.aside__content}>
					<div className='asideproduct__wrapper'>
						{productRecent.map(({ id, title, price, price__old, price__new, srcimg, label, rating }, index) => (
							<div className={`${styles.asideproduct__item} flex`} key={index}>
								{srcimg ? (
									<div className={`${styles.asideproduct__img} relative`}>
										<Image
											src={srcimg}
											width="65px"
											height="81px"
											objectFit="cover"
											blurDataURL='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
											alt={title}
										/>
									</div>
								):null}
								<div className={`${styles.asideproduct__content}`}>
									{title ? (
										<h5 className={`font-bold`}>
											<Link href='/shop/{id}' className='inline-block hover_currrent'  as={`/shop/${id}`}>
												{title}
											</Link>
										</h5>
									):null}
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
						))}
					</div>
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
						{productTags.map((val, id) => (
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
		</div>
	)
};
export default ThumbprodAside;
