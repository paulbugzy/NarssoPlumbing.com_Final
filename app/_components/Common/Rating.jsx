import { useState } from 'react';
import styles from './Rating.module.css';
function Rating({onClickStars}){
	const [rating, setRating] = useState(null);
	return(
		<>
			<div className={`${styles.form__rating} inline-block`}>
				{[...Array(5)].map((_, index)=>{
					return (
						<span
							key={index}
							className={`icon-56786 ${index+1<=rating ? 'selected' : ''}`}
							onClick={() => {
								setRating(index + 1);
								onClickStars(index + 1);
							}}
						/>
					)
				})}
				<style jsx global>{`
					.selected{
						color:  var(--base-color) !important;
					}
				`}</style>
			</div>
		</>
	)
};
export default Rating;