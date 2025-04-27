'use client';
import { usePathname} from 'next/navigation';
import Link from 'next/link';
import styles from './ServicesListAside.module.css';
const ServicesListAside = ({dataList}) => {
	const pathname = usePathname();
	return (
		<ul className={`${styles.aside_nav}`}>
			{dataList.map(({ id, text, link }) => (
				<li key={id}>
					<Link href={link} className={pathname === link ? `${styles.is_active} pointer-events-none` : ''}>
						{text}
					</Link>
				</li>
			))}
		</ul>
	)
};
export default ServicesListAside;