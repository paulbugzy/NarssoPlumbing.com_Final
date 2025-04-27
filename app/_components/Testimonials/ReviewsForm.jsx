'use client';
import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from './ReviewsForm.module.css';
import SectionTitle from '../Common/SectionTitle'
import Rating from '../Common/Rating'
export default function ReviewsForm(){
	const initialFormData = {
		name: "",
		email: "",
		phone: "",
		rated: "",
		review: "",
	};
	const [formData, setFormData] = useState(initialFormData);

	const handleChange = (event) => {
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};
	const handleStars = (value) => {
		setFormData((lastFormData) => {
			return{
				...lastFormData,
				rated: value
			}
		});
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (!formData.name || !formData.email) return;
		try {
			const response = await fetch("/api/emailSend/review/", {
				method: "POST",
				body: JSON.stringify({ ...formData }),
			});
			setFormData(initialFormData);
			const { data } = await response.json();
			if (data) toast.success(`Email was successfully sent!`);
		} catch (error) {
			toast.error("Something went wrong", error);
		}
	};
	return (
		<div className="section__inner">
			<div className="relative">
				<div className={`${styles.reviewsform__bgimg} relative lg-max:hidden`}>
					<picture>
						<source media="(min-width: 1025px)" srcSet="/images/testimonials/testimonials-map.webp" type="image/webp" />
						<source media="(min-width: 1025px)" srcSet="/images/testimonials/testimonials-map.png" type="image/png" />
						<img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="  className="lazyload" alt="" />
					</picture>
				</div>
				<div className="container container__fluid-lg">
					<div className="flex justify-center lg:justify-end only-lg:text-center">
						<div className={`md-max:basis-full md:basis-5/6 lg:basis-1/2 relative md:min-w-[50%]`}>
							<SectionTitle
								dataSubtitle="help us to get better"
								dataTitle="Write Your Review"
							/>
							<form onSubmit={handleSubmit}>
								<div className="form__holder">
									<input
										type="text"
										autoComplete='on'
										className="form__control"
										placeholder="Your name"
										name='name'
										value={formData.name}
										onChange={handleChange}
										required
									/>
								</div>
								<div className='sm:grid sm:grid-cols-2 sm:grid-flow-col sm:gap-[15px]'>
									<div className="form__holder">
										<input
											type="text"
											autoComplete='on'
											className="form__control"
											placeholder="E-mail"
											name='email'
											value={formData.email}
											onChange={handleChange}
											required
										/>
									</div>
									<div className="form__holder">
										<input
											type="text"
											autoComplete='on'
											className="form__control"
											placeholder="Phone"
											name='phone'
											value={formData.phone}
											onChange={handleChange}
										/>
									</div>
								</div>
								<div className="form__holder">
									<textarea
										rows="3"
										className="form__control"
										placeholder="Review"
										name="review"
										value={formData.message}
										onChange={handleChange}
									></textarea>
								</div>
								<Rating onClickStars={(value) => handleStars(value)} />
								<div className="mt-[22px] md-max:mt-[14px]">
									<button className="btn btn__type2">
										<span>Send Review</span>
									</button>
								</div>
							</form>
							<ToastContainer autoClose={2000} />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
};