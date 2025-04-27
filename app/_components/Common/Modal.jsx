'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap'
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';
//Import Js
import {disableScroll, initCustomScroll} from '../../../public/js/utilitie';
const Modal = ({ openModal, onClose, children, dataModalTitle, dataModalSize, dataModalClass }) => {
	const elModal__body = useRef()
	const elModal__wrapper = useRef()
	const ref = useRef();

	useEffect(() => {
		if(openModal){
			handleOpenModal();
			initCustomScroll(ref.current);
		};
	})
	useEffect(() => {
		disableScroll(openModal);
	}, [openModal])
	const handleOpenModal = () => {
		gsap.to(elModal__wrapper.current, {
			opacity: 1,
			duration:0.2,
		});
		gsap.to(elModal__body.current, {
			opacity: 1,
			rotateX: 0,
			duration:0.2,
			perspective: "600px",
			translateY: 0,
		});
	}
	useEffect(() => {
		const handlescape = e => {
			if(e.keyCode === 27) onClose();
		}
		document.addEventListener("keydown", handlescape);
		return() => document.removeEventListener("keydown", handlescape)
	}, [onClose])
	const modalContent = openModal ? (
		<div ref={elModal__wrapper} className={`
			${styles.modal__wrapper} ${styles[dataModalClass]}  ${openModal ? styles.modal__open : ''}
			modal__wrapper flex items-center justify-center fixed size-full bottom-0 left-0
		`}>
			<div
				className={`
				${styles.modal__overlay}
				modal__overlay absolute size-full top-0 left-0
			`}
				onClick={onClose}
			></div>
			<div  aria-modal aria-hidden role="dialog"
				ref={elModal__body}
				className={`
					${styles.modal__body} ${styles[dataModalSize]}
					modal__body relative  w-full main-bg
				`}
			>
				<button
					className={`
						${styles.modal__close} icon-748122 z-[2]  modal__close
						absolute obj__inner-center cursor-pointer outline-none focus:outline-none
					`}
					data-dismiss="modal"
					aria-label="Close"
					onClick={onClose}
				>
					<label aria-hidden="true">Close</label>
				</button>
				<div ref={ref} className={`${styles.modal__layout}  modal__layout`}>
					<div  className={`${styles.modal__scroll}`}>
						{dataModalTitle ? (
							<h6 className={`${styles.modal__title}`}>
								{dataModalTitle}
							</h6>
						):null}
						{children}
					</div>
				</div>
			</div>
		</div>
	) : null;
	if(openModal){
		handleOpenModal()
		return  ReactDOM.createPortal(
			modalContent,
			document.body
		)
	}
};
export default Modal;