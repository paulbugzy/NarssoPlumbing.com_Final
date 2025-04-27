function RatingView({dataTotal, dataClass}){
	return(
		<>
			{dataTotal ? (
				<div className={`${dataClass || 'rating__md'}  rating`}>
					{[ ...Array(dataTotal)].map((dataTotal, index) => {
						return <i key={index} className="icon-56786"></i>
					})}
				</div>
			):null}
			<style jsx global>{`
				.rating{
					color: var(--base-color3);
					line-height:0;
				}
				.rating__md > *{
					margin-left: 1.5px;
					margin-right: 1.5px;
				}
				.rating__md{
					font-size: 11px;
				}
				@media (max-width: 1024px){
					.rating__lg{
						font-size: 15px;
					}
					.rating__lg > *{
						margin-left: 1.5px;
						margin-right: 1.5px;
					}
				}
				@media (min-width: 1025px){
					.rating__lg{
						font-size: 18px;
					}
					.rating__lg > *{
						margin-left: 3px;
						margin-right: 3px;
					}
				}
			`}</style>
		</>
	)
};
export default RatingView;