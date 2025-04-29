import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./FormModal.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const FormModal = ({ closeModal }) => {
  const [startDate, setStartDate] = useState(null);
  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    address: "",
    services: "",
    message: "",
    meeting_time: ""
  };
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleData = (value) => {
    setFormData((lastFormData) => {
      return {
        ...lastFormData,
        meeting_time: value
      };
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formData.name || !formData.email) return;
    try {
      const response = await fetch("/api/emailSend/modalScheduleOnline/", {
        method: "POST",
        body: JSON.stringify({ ...formData })
      });
      setFormData(initialFormData);
      const { data } = await response.json();
      if (data) {
        toast.success(`Email was successfully sent!`);
        closeModal(false);
      }
      setStartDate(null);
    } catch (error) {
      toast.error("Something went wrong", error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <p className={`${styles.textIndent}`}>
          Our local plumbers are natives of the same areas we service, which is
          why we&rsquo;re proud of our commitment to excellence in craftsmanship
          and service, as well as honesty and fair pricing.
          <br />
          <br />
          Whether it&rsquo;s a leaky faucet or a clogged drain, our experienced
          plumbers are just a Estimate Request, Callback Request, or Phone Call
          away—whichever suits you best.
        </p>
        <div className="form__holder">
          <input
            type="text"
            autoComplete="name"
            className="form__control"
            placeholder="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            aria-label="Your Name"
          />
        </div>
        <div className="sm:grid sm:grid-cols-2 sm:grid-flow-col sm:gap-[15px]">
          <div className="form__holder">
            <input
              type="text"
              autoComplete="email"
              className="form__control"
              placeholder="E-mail"
              name="email"
              value={formData.email}
              onChange={handleChange}
              aria-label="E-mail"
            />
          </div>
          <div className="form__holder">
            <input
              type="text"
              className="form__control"
              placeholder="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              aria-label="Phone"
            />
          </div>
        </div>
        <div className="form__holder">
          <input
            type="text"
            className="form__control"
            placeholder="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            aria-label="Address"
          />
        </div>
        <div className="form__holder">
          <textarea
            rows="3"
            className="form__control"
            placeholder="Briefly describe your plumbing project"
            name="message"
            value={formData.message}
            onChange={handleChange}
            aria-label="Briefly describe your plumbing project"
          ></textarea>
        </div>
        <div className="form__holder">
          <DatePicker
            selected={startDate}
            value={formData.selected}
            className="form__control DatePicker__iconLeft w-full"
            onChange={(date) => {
              setStartDate(date);
              handleData(date);
            }}
            showTimeSelect
            timeIntervals={15}
            timeCaption="time"
            dateFormat="MMMM d, yyyy h:mm"
            placeholderText="Preferred Date / Time (We'll do our best to accommodate)"
            label="Preferred Date / Time (We'll do our best to accommodate)"
            aria-label="Preferred Date / Time (We'll do our best to accommodate)"
          />
          <i
            className={`${styles.input__icon} icon-833593 pointer-events-none`}
          ></i>
        </div>
        <button className="btn">
          <span>Submit Request</span>
        </button>
      </form>
      <ToastContainer autoClose={2000} />
    </>
  );
};
export default FormModal;
