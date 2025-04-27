'use client';
import { useState, lazy, Suspense } from "react"
//Import Style
import styles from './Header.module.css'
//Import Component
import SocialsHeader from "./SocialsHeader"
import Information from "../Header/Information"
import Logo from "../Header/Logo"
import Telephone from "../Header/Telephone"
import NavBar from "../Header/NavBar"
import ToggleBar from "../Header/ToggleBar"
import Button from '../Common/Button'
const Modal = lazy(() => import('../Common/Modal'))
const FormModal = lazy(() => import('../Common/FormModal'))
const Header = () => {
	const [openModal, setOpenModal] = useState(false);
	return (
		<>
			<header className={`${styles.header__wrapper} lock-padding`} id="js-header">
				<div className={`${styles.hinfo__wrapper} grid`}>
					<Information />
					<SocialsHeader />
				</div>
				<div className={`${styles.hlayout} relative grid`} id="js-init-sticky">
					<Logo />
					<div className={`${styles.hlayout__col} ${styles.hlayout__corner} ${styles.hlayout__bg} relative flex items-center justify-center`}>
						<NavBar />
					</div>
					<div className={`${styles.hlayout__col} ${styles.hlayout__bg} ${styles.hlayout__objects} inline-flex items-center`}>
						<Telephone />
						<Button
							className="btn md-max:hidden"
							onClick={(e) => {
								setOpenModal(true);
							}}
						>
							Schedule Online
						</Button>
						<ToggleBar />
						<Suspense>
							<Modal
								openModal={openModal}
								onClose={() => setOpenModal(false)}
								dataModalSize="modal__sizeLg"
								dataModalTitle="Schedule Service Online"
							>
								<FormModal closeModal={(value) => setOpenModal(value)} />
							</Modal>
						</Suspense>
					</div>
				</div>
			</header>
			<style jsx global>
				{`
					.sticky-header{
						position: fixed;
						top: 0;
						left: 0;
						width: 100%;
						z-index: 21;
						box-shadow: 0 20px 30px rgb(26 54 85 / 10%);
					}
					@media (min-width: 1101px) {
						.sticky-header .logo__wrapper{
							min-width: 250px;
						}
						.sticky-header .logo__icon{
							width: 51px;
						}
						.sticky-header .logo__text{
							font-size: 27px;
							margin-top: 2px;
						}
						.sticky-header .ttlogo{
							top: 10px;
							left: 25px;
						}
						.sticky-header .wave_container{
							bottom: 4px;
						}
					}
					@media (max-width: 1100px){
						.sticky-header .logo__wrapper{
							min-width: 145px;
						}
						.sticky-header .logo__icon{
							width: 33px;
						}
						.sticky-header .logo__text{
							font-size: 20px;
							margin-top: 2px;
						}
						.sticky-header .ttlogo{
							top: 8px;
							left: 15px;
						}
						.sticky-header .wave_container{
							bottom: 3px;
						}
					}
					@media (max-width: 767px){
						.sticky-header .logo__wrapper{
							min-width: 135px;
						}
						.sticky-header .logo__icon{
							width: 30px;
						}
						.sticky-header .logo__text{
							font-size: 18px;
							margin-top: 2px;
						}
						.sticky-header .ttlogo{
							top: 5px;
							left: 15px;
						}
					}
				`}
			</style>
		</>
	)
};
export default Header;