import styles from './ListEmail.module.css';
const imgData = [
	{
		id: 1,
		title: 'Service Requests',
		text:'needhelp@company.com',
	},
	{
		id: 2,
		title: 'Accounts Payable & Receivable',
		text:'payinfo@company.com',
	},
	{
		id: 3,
		title: 'Sales Manager & Consulting',
		text:'sales@company.com',
	},
];
const ListEmail = (props) => {
	return (
	  <>
		<ul className={`${styles.list__email} mt-[25px]`}>
			{imgData.map(({ id, title, text }) => (
				<li key={id}>
					<i className="icon-646094"></i>
					<strong>{title}:</strong>
					<a href={`mailto:${text}`} target="_blank" rel="noreferrer noopener">{text}</a>
				</li>
			))}
		</ul>
	  </>
	);
  }
  export default ListEmail;