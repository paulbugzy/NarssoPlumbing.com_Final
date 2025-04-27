import SectionTitle from '../Common/SectionTitle';
import styles from "./TabsPrice.module.css"
const tableData = [
	{
		id: 1,
		title: 'Plumbing, Drainlaying',
		value: '$125 per hour*',
	},
	{
		id: 2,
		title: 'Gasfitting, Leak Detection',
		value: '$149 per hour*',
	},
	{
		id: 3,
		title: 'Apprentice Work',
		value: '$55 per hour*',
	},
	{
		id: 4,
		title: 'Drain Unblocking',
		value: '$265 per hour*',
	},
	{
		id: 5,
		title: 'Additional Time Plumbing',
		value: '$24.50 per hour*',
	},
	{
		id: 6,
		title: 'Additional Time Leak Detection',
		value: '$28.50 per hour*',
	},
	{
		id: 7,
		title: 'Additional Time Apprentice Work',
		value: '$13.75 per hour*',
	},
	{
		id: 8,
		title: 'Work at Height',
		value: '$170 per hour*',
	},
  ];
const TabsPrice__item1 = () => {	
	return (		
		<>	
			<div className="md:flex gap-[30px]">
				<div className="md:basis-1/2">
					<SectionTitle
						dataSubtitle="our pricelist"
						dataTitle="Hourly Rate Plumbing"
						dataAddClass="blocktitle__topNone"						
					/>
					<p>
						A plumber ranges from $45 to $200 per hour or more depending on the job, timing and location. According to project data from HomeAdvisor members, it ranges between $173 and $459 with an average cost of $316. Services may include drain cleaning, faucet replacement or installation, and toilet repair.
					</p>
					<ul className="list__type1 mt-[30px]">
						<li>Set a minimum number of hours for service calls.</li>
						<li>Add a trip fee of $50-$300</li>
						<li>Charge a service fee averaging $150.</li>
						<li>Offer flat rates for a few common issues.</li>
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
export default TabsPrice__item1;