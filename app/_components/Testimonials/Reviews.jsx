'use client';
import styles from './Reviews.module.css';

import { useState } from "react";
import {dataReviews} from '../Testimonials/ReviewsData';

import SectionTitle from '../Common/SectionTitle'
import RatingView from '../Common/RatingView'
import Button from '../Common/Button';
const Reviews = () => {
	const [visible, setVisible] = useState(4);
	const showMoreItems = (event) => {
		event.target.remove();
		setVisible(Infinity)
	};
	return (
		<>
			<div className="section__indent">
				<div className="container container__fluid-lg">
					<SectionTitle
						dataSubtitle="customer say"
						dataTitle="Reviews from Our Customers"
						dataTextUnder="Testimonials"
						dataText="Hear what our happy customers have to say about us. Our plumbing contractors are experienced, reliable, and professional."
						dataAddClass="text-center"
						dataMaxWidth="600px"
					/>
					<div className={`grid md:grid-cols-2 gap-[30px] `}>
						{dataReviews.slice(0,visible).map(({id, title, text, signature__title, signature__text, stars}) => (
							<div key={id} className={`${styles.reviews__item} relative main-bg no-resize-text`}>
								<div className={`${styles.reviews__icon} icon-2997 absolute z-[3]`}></div>
								<h6 className={`${styles.reviews__title} ttsubtitle_sm`}>{title}</h6>
								{text ? (
									<p>
										{text}
									</p>
								):null}
								{signature__title && signature__text ? (
									<div className={styles.reviews__caption}>
										<strong className='base__color'>- {signature__title},</strong> <span className='text-sm'>{signature__text}</span>
									</div>
								):null}
								{stars ? (
									<div className={styles.reviews__rating}>
										<RatingView dataTotal={stars} />
									</div>
								):null}
							</div>
						))}
					</div>
					<div className='text-center lg:mt-[50px] lg-max:mt-[28px]'>
						<Button onClick={showMoreItems}>More Testimonials</Button>
					</div>
				</div>
			</div>
		</>
	)
};
export default Reviews;