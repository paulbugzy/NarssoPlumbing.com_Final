"use client";

import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function FormContact({wrapperClass}) {
  const initialFormData = {
    name: "",
    phone: "",
    email: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formData.name || !formData.email) return;
    try {
    	const response = await fetch("/api/emailSend/contact/", {
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
    <>
		<form onSubmit={handleSubmit} className={wrapperClass ? `${wrapperClass} form` : "form"}>
			<h6 className='ttsubtitle'>
				Send Message
			</h6>
			<div className="form__holder">
				<input
					type="text"
					name="name"
					autoComplete='on'
					className="form__control"
					placeholder="Your Name *"
					value={formData.name}
					onChange={handleChange}
					required
				/>
			</div>
			<div className='sm:grid sm:grid-cols-2 sm:grid-flow-col sm:gap-[15px]'>
				<div className="form__holder">
					<input
						type="email"
						name="email"
						autoComplete='on'
						className="form__control"
						placeholder="E-mail *"
						value={formData.email}
						onChange={handleChange}
						required
					/>
				</div>
				<div className="form__holder">
					<input
						type="text"
						name="phone"
						autoComplete='on'
						className="form__control"
						placeholder="Phone"
						value={formData.phone}
						onChange={handleChange}
					/>
				</div>
			</div>
			<div className="form__holder">
				<textarea
					rows="8"
					placeholder="Message"
					className="form__control"
					name="message"
					value={formData.message}
					onChange={handleChange}
				></textarea>
			</div>
			<button className="btn btn__type2">
				<span>Send Message</span>
			</button>
		</form>
    	<ToastContainer autoClose={2000} />
    </>
  );
}