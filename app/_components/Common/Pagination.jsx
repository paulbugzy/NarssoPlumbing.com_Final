import styles from './Pagination.module.css';
function Pagination({itemPerPage, totalItem, paginate, value, clickPrevNext}){
	const pageNumbers = [];
	const maxPage = Math.ceil(totalItem / itemPerPage);
	for(let i = 1; i <= Math.ceil(totalItem / itemPerPage); i++ ){
		pageNumbers.push(i)
	}
	return(
		<div className={`${styles.pagination__holder} flex gap-[10px]`}>
			<button
				className={`icon-545682 obj__inner-center
					${styles.pagination__btn}
					${styles.pagination__prev}
					${value === 1 ? styles.hidden : ""}
				`}
				onClick={() => clickPrevNext('add')}
			></button>
			<ul className={`${styles.pagination__list} pagination__list flex gap-[10px]`}>
				{pageNumbers.map(number =>
					<li
						key={number}
						className={`obj__inner-center
							${styles.pagination__btn}
							${value === number ? styles.active : ""}
						`}
						onClick={() => paginate(number)}
					>
						{number}
					</li>
				)}
			</ul>
			<button
				className={`icon-545682 obj__inner-center
					${styles.pagination__btn}
					${value === maxPage ? styles.hidden : ""}
				`}
				onClick={() => clickPrevNext('minus')}
			></button>
		</div>
	)
};
export default Pagination;

