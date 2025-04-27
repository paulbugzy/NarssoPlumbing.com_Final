import styles from './dashboard.module.css';
import { IoIosLogOut } from "react-icons/io";

import ServicesListAside from '../_components/ServicesSubPages/ServicesListAside';

import { SignOutButton } from '@clerk/nextjs';

const dataNavLayout = [
	{
		id: 1,
		text: `Products`,
        link: `/dashboard`
	},
	{
		id: 2,
		text: `Blog`,
        link: `/dashboard/blog`
	}
];
export default function RootLayout({ children }) {
    return (
        <main id="tt-pageContent" className="overflow-hidden">
			<div className="section__inner">
				<div className="container container__fluid-xl">
                    <div className={`flex md:gap-[30px] md-max:flex-col md-max:gap-[15px] relative`}>
                        <div className={`${styles.layout__col_left}`}>
                            <ServicesListAside dataList={dataNavLayout} />
                            <SignOutButton>
                                <button className={`${styles.layout__btn_custom} inline-flex justify-center items-center base__color font-bold duration-300`}>
                                    <IoIosLogOut />Logout
                                </button>
                            </SignOutButton>
                        </div>
                        <div className={`${styles.layout__col_content}`}>
                            {children}
                        </div>
                    </div>
                </div>
			</div>
		</main>
    )
}
