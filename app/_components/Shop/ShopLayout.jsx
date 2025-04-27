'use client';
import { BiFilterAlt } from 'react-icons/bi';
import styles from './ThumbprodFilter.module.css';
const ThumbprodFilter = ({pageIndex, itemPerPage, totalItem, onChangeSort, onClickAside}) => {
	return (
		<div className={`${styles.filter__holder} flex flex-wrap justify-between items-center gap-[15px]`}>
			<div
				className={`${styles.filters__toggle} flex items-center cursor-pointer gap-[5px] base__color lg:hidden font-bold`}
				onClick={(e) => {
					onClickAside(true);
				}}
			>

				<div className={`${styles.filters__toggle_icon}`}>
					<BiFilterAlt />
				</div>
				<div className={`${styles.filters__toggle_text}`}>Filter</div>
			</div>
			<div className={`${styles.form__select} form__select`}>
				<select id="sort" name="sort" onChange={(e) => onChangeSort(e.target.value) }>
					<option value="all">Default sorting</option>
					<option value="byPopularity">Sort by popularity</option>
					<option value="lowToHigh">Sort by price: low to high</option>
					<option value="highToLow">Sort by price: high to low</option>
				</select>
				<label htmlFor="sort" className="hidden">Change Sort</label>
			</div>
			<div className="lg-max:hidden filters__info">
				Showing {pageIndex} – {itemPerPage} of {totalItem} results
			</div>
		</div>
	)
};
export default ThumbprodFilter;