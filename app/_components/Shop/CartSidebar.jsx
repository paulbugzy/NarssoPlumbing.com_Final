"use client";
import styles from './CartSidebar.module.css'
import dynamic from 'next/dynamic';
import { useContext, useState, useEffect, useRef } from "react";
import { Context } from '../../_context/';
import Spinner from '../Common/Spinner';
//Import Js
import {disableScroll, initCustomScroll} from '../../../public/js/utilitie'
export default function CartSidebar(){
	const [showComponent, SetShowComponent] = useState(false);
	const CartSidebarLayout = dynamic(() => import('./CartSidebarLayout'), {
		loading: () => <Spinner />,
	});
	const ref = useRef();
	useEffect(() => {
		if(ref.current && showComponent){
			initCustomScroll(ref.current);
		}
		if(ref.current){
			disableScroll(showComponent);
		}
		const resizeListener = () => {
			SetShowComponent(false);
		};
		window.addEventListener('resize', resizeListener);
		return () => {
			window.removeEventListener('resize', resizeListener);
		}
	}, [showComponent]);
	const {cartItems} = useContext(Context);
	return (
		<>
			<div
				className={`${styles.cartSidebar__toggleBtn} fixed cursor-pointer z-[3] w-[170px] h-[170px]`}
				onClick={(e) => SetShowComponent(!showComponent)}
			>
				<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 902.86 902.86">
					<path d="M671.504 577.829 781.989 145.22H902.86v-68H729.174L703.128 179.2 0 178.697l74.753 399.129h596.751v.003zm14.262-330.641-67.077 262.64h-487.49L81.928 246.756l603.838.432zM578.418 825.641c59.961 0 108.743-48.783 108.743-108.744s-48.782-108.742-108.743-108.742H168.717c-59.961 0-108.744 48.781-108.744 108.742s48.782 108.744 108.744 108.744S277.46 776.858 277.46 716.897c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107 12.59-7.928 26.342-7.928 40.742.001 59.961 48.783 108.744 108.744 108.744zM209.46 716.897c0 22.467-18.277 40.744-40.743 40.744s-40.744-18.277-40.744-40.744c0-22.465 18.277-40.742 40.744-40.742 22.466 0 40.743 18.277 40.743 40.742zm409.702 0c0 22.467-18.277 40.744-40.743 40.744s-40.743-18.277-40.743-40.744c0-22.465 18.277-40.742 40.743-40.742s40.743 18.277 40.743 40.742z"/>
				</svg>
				<div className={`${styles.cartSidebar__btnValue} absolute z-[3] pointer-events-none`}>
					{cartItems.length}
				</div>
			</div>
			<div ref={ref} className={`${showComponent && styles.popupLayout__open} ${styles.popupLayout}`}>
				<div
					className={`
						${styles.toggleBar__close}
						toggleBar__objHidden_mobile  obj__inner-center icon-748122 absolute
						cursor-pointer top-0 right-0
					`}
					onClick={(e) => SetShowComponent(false)}
				>
				</div>
				{showComponent && <CartSidebarLayout
					onClickClose={(value) => SetShowComponent(value)}
				/>}
			</div>
			<div
				className={`
					${styles.dropdownBg} z-[21] fixed
					${showComponent ? styles.dropdownBg_open : null}
				`}
				onClick={(e) => SetShowComponent(false)}
			>
			</div>
		</>
	)
};