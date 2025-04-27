'use client';
import React, { useState, useRef, useEffect  } from 'react'
import { usePathname } from "next/navigation"
import dynamic from 'next/dynamic'
import Spinner from '../Common/Spinner'
//Import styles
import styles from './ToggleBar.module.css'
//Import Js
import Modal from "../Common/Modal"
import FormModal from "../Common/FormModal"
import {disableScroll, initCustomScroll} from '../../../public/js/utilitie'

const ToggleBar = () => {
	const [openModal, setOpenModal] = useState(false);
	const ToggleBarLayout = dynamic(() => import('./ToggleBarLayout'), {
		loading: () => <Spinner />,
	})
	const [menuActive, setMenuActive] = useState(false);
	const [showComponent, SetShowComponent] = useState(false);
	const pathname = usePathname();
  	useEffect(() => {
        setMenuActive(false)
    }, [pathname])
	const ref = useRef();
	useEffect(() => {
		disableScroll(menuActive);
	}, [menuActive]);
	return (
	  <>
		<div className={`${menuActive ? styles.toggleBar__open : ''} toggleBar__holde`}>
			<div
				onClickCapture={(e) => {
					setMenuActive(!menuActive);
					SetShowComponent(true);
					initCustomScroll(ref.current);
				}}
				className={`
					flex justify-center content-center items-center cursor-pointer unselectable
					${styles.toggleBar__btn}
					${menuActive ? styles.toggleBar__btnOpen : ''}
				`}
				aria-hidden="true">
					<span className={`${styles.toggleBar__btnicon} inline-block relative pointer-events-none`}></span>
			</div>
			<div ref={ref} className={`${styles.toggleBar__dropdown} toggleBar__dropdown`}>
				{showComponent && <ToggleBarLayout
					onClickClose={(value) => setMenuActive(value)}
					onClickModal={(value) => setOpenModal(value)}
				/>}
			</div>
			<Modal
                openModal={openModal}
                onClose={() => setOpenModal(false)}
                dataModalSize="modal__sizeLg"
                dataModalTitle="Schedule Service Online"
            >
                <FormModal />
            </Modal>
			<div
				className={`
					toggleBar__dropdownBg
					${styles.toggleBar__dropdownBg}
					${menuActive ? styles.toggleBar__dropdownBg_open : ''}
				`}
				onClickCapture={(e) => {
					setMenuActive(false)
				}}
			></div>
		</div>
		<style jsx global>
			{`
				@media (min-width: 1101px){
					.toggleBar__holde .toggleBar__objHidden_desktop{
						display: none;
					}
				}
				@media (max-width: 1100px){
					.toggleBar__holde .toggleBar__objHidden_mobile{
						display: none;
					}
				}
				@media (max-width: 1100px) and (min-width: 768px){
					#js-init-sticky.sticky-header .toggleBar__dropdownBg{
						top: 70px;
						height: calc(100% - 70px);
					}
				}
				@media (max-width: 1100px) and (min-width: 768px){
					#js-init-sticky .toggleBar__dropdownBg{
						top: 112px;
						height: calc(100% - 112px);
					}
				}
				@media (max-width: 767px){
					#js-init-sticky.sticky-header .toggleBar__dropdownBg{
						top: 59px;
						height: calc(100% - 59px);
					}
				}
				@media (max-width: 767px){
					#js-init-sticky .toggleBar__dropdownBg{
						top: 69px;
						height: calc(100% - 69px);
					}
				}
			`}
		</style>
	  </>
	);
}
export default ToggleBar;