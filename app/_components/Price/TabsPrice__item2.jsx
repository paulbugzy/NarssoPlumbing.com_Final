import SectionTitle from '../Common/SectionTitle';
import styles from "./TabsPrice.module.css"
const tableData = [
	{
		id: 1,
		title: 'Fix a Leak',
		value: '$150-$700*',
	},
	{
		id: 2,
		title: 'Faucet / Shower Installation',
		value: '$150-$350*',
	},
	{
		id: 3,
		title: 'Water Heater Installation',
		value: '$750-$1,400*',
	},
	{
		id: 4,
		title: 'Water Heater Repair',
		value: '$200-$900*',
	},
	{
		id: 5,
		title: 'Unclogging a Drain',
		value: '$125-$300*',
	},
	{
		id: 6,
		title: 'Water Main Repair',
		value: '$300-$1,250*',
	},
	{
		id: 7,
		title: 'Sewer Line Cleaning',
		value: '$175-$450*',
	},
	{
		id: 8,
		title: 'Fix a Toilet',
		value: '$150-$300*',
	},
  ];
const TabsPrice__item2 = () => {	
	return (		
		<>	
			<div className="md:flex gap-[30px]">
				<div className="md:basis-1/2">
					<SectionTitle
						dataSubtitle="our pricelist"
						dataTitle="Fixed Rate Plumbing"
						dataAddClass="blocktitle__topNone"						
					/>
					<p>
					For larger plumbing jobs, providing a fixed price quotation gives our customers peace of mind and removes the uncertainty of not knowing what the bill will be. It also allows the customer to compare quotes from other plumbing companies.
					</p>
					<ul className="list__type1 mt-[30px]">
						<li>Hot water service replacement</li>
						<li>Bathroom, kitchen and laundry renovations</li>
						<li>Renewal of sewer drainage pipe</li>
						<li>Renewal of hot and cold water pipes</li>
					</ul>
				</div>
				<div className="md:basis-1/2 md-max:mt-[40px] sm-max:mt-[35px]">
					<table className={styles.table__price}>
						<tbody>
							{tableData.map(({ id, title, value }) => (
								<tr key={id}>
									<td>{title}</td>
									<td>{value}</td>
								</tr>
							))}							
						</tbody>
					</table>
					<div className={styles.table__notes}>* Do take note that there may be additional charges for supplies and equipment.</div>
				</div>
			</div>
		</>
	)
};
export default TabsPrice__item2;