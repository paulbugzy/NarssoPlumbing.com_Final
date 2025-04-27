'use client';
import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function FormRequestQuote({wrapperClass}){
	const [startDate, setStartDate] = useState(null);
	const initialFormData = {
		name: "",
		email: "",
		phone: "",
		address: "",
		services: "",
		meeting_time: ""
	};
	const [formData, setFormData] = useState(initialFormData);

	const handleChange = (event) => {
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};
	const handleData = (value) => {
		setFormData((lastFormData) => {
			return{
				...lastFormData,
				meeting_time: value
			}
		});
	};
	const handleSubmit = async (event) => {
		event.preventDefault();
		if (!formData.name || !formData.email) return;
		try {
			const response = await fetch("/api/emailSend/requestQuote/", {
				method: "POST",
				body: JSON.stringify({ ...formData }),
			});
			setFormData(initialFormData);
			const { data } = await response.json();
			if (data){
				toast.success(`Email was successfully sent!`);
			};
			setStartDate(null);
		} catch (error) {
			toast.error("Something went wrong", error);
		}
	};
	return(
		<>
			<form
				onSubmit={handleSubmit}
				className={wrapperClass ? `${wrapperClass} form` : "form"}

			>
				<h6 className='ttsubtitle ttsubtitle__topNone'>
					Request a Quote
				</h6>
				<div className="form__holder">
					<input
						type="text"
						autoComplete='name'
						className="form__control"
						placeholder="Your name"
						name='name'
						value={formData.name}
						onChange={handleChange}
						required
					/>
				</div>
				<div className='md:grid md:grid-cols-2 md:grid-flow-col gap-[15px]'>
					<div className="form__holder">
						<input
							type="text"
							autoComplete='email'
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
							className="form__control"
							placeholder="Phone"
							name='phone'
							value={formData.phone}
							onChange={handleChange}
						/>
					</div>
				</div>
				<div className="form__holder">
					<input
						type="text"
						className="form__control"
						placeholder="Address"
						name='address'
						value={formData.address}
						onChange={handleChange}
					/>
				</div>
				<div className="form__holder">
					<div className="form__select">
						<label htmlFor="services">
							<select
								id="services"
								name="services"
								value={formData.services}
								onChange={handleChange}
							>
								<option value="Service">Service</option>
								<option value="Service 02">Service 02</option>
								<option value="Service 03">Service 03</option>
								<option value="Service 04">Service 04</option>
								<option value="Service 05">Service 05</option>
							</select>
						</label>
					</div>
				</div>
				<div className="form__holder">
					<i className="icon-833593 form__IconLeft"></i>
					<DatePicker
						selected={startDate}
						value={formData.selected}
						className="form__control DatePicker__iconLeft"
						onChange={(date) => {
							setStartDate(date);
							handleData(date);
						}}
						showTimeSelect
						timeIntervals={15}
						timeCaption="time"
						dateFormat="MMMM d, yyyy h:mm"
						placeholderText="Date or Time of visit"
						label="Date or Time of visit"
					/>
				</div>
				<button className={`btn btn__type2 mt-[15px] inline-flex`}>
					<span>Submit Request</span>
				</button>
			</form>
			<ToastContainer
				position="bottom-left"
				autoClose={2000}
			/>
		</>
	)
};
export default FormRequestQuote;