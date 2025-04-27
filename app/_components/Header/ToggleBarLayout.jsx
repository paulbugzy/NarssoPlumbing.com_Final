'use client';
import React, { useEffect } from 'react';
import Image from 'next/legacy/image';
import styles from './ToggleBarLayout.module.css'

//Import Sections
import MenuItem from './MenuItem';
import items from '../Header/MenuData';
import Button from '../Common/Button'
import Socials from "../Common/Socials"
//Import Js
import {menuMobile} from '../../../public/js/utilitie';
//Import Data
const infoBox = [
	{
		id: 1,
		icon: 'icon-786204',
		title: 'Head Office:',
		content: '8494 Signal Hill Road Manassas, VA, 20110'
	},
	{
		id: 2,
		icon: 'icon-126509',
		title: 'Phone Numbers:',
		address: '123 456 789'
	},
	{
		id: 3,
		icon: 'icon-9927001',
		title: 'Working Time:',
		content: '24 Hour Service - 7 Days a Week 365 Days'
	}
];

const ToggleBarLayout = ({onClickClose, onClickModal}) => {
    useEffect(() => {
		menuMobile();
	}, []);
    return (
        <>
            <div className={`${styles.toggleBar__bg} absolute z-[0]`}>
                <Image
                    src='/images/popup-wrapper.jpg'
                    width={396}
                    height={629}
                    quality={0}
                    alt='MapImg'
                />
            </div>
            {/* Mobile Menu */}
            <div id='jsMobileMenu' className='relative z-[2] w-[100%] unselectable'>
                <nav>
                    <ul className="desktopmenu__level1">
                        {items.map((item, index) =>
                            <MenuItem
                                key={index}
                                item={item}
                            />
                        )}
                    </ul>
                </nav>
                <div className="mobileMenu__back flex absolute top-[0] left-[0] w-full cursor-pointer pointer-events-auto items-center content-stretch" id="jsMobileMenu__back">Back</div>
            </div>
            {/* Toggle Bar Logo */}
            <div className={`toggleBar__objHidden_mobile inline-block text-center relative align-top`}>
                <div className={`${styles.toggleBar__logo_img} inline-block align-top`}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" enableBackground="new 0 0 512 512" viewBox="0 0 512 512">
                        <path d="M257.2 2c1 1.4 1.6 2.3 2.3 3 47.1 47.1 94 94.4 141.3 141.3 23.9 23.8 42.3 50.9 53.4 82.8C494 343.7 428.9 467.6 312 499.9c-76.6 21.2-159.4-3.6-211.9-63.1-27.4-31.2-44.9-67.2-50.2-108.3-9.6-74.4 13.7-137.3 69.3-187.9 1.1-1 2.3-2.1 3.4-3.2C166.7 93.3 210.8 49.1 254.9 5c.7-.7 1.3-1.6 2.3-3zM98 346.1c.3 1 .4 1.7.6 2.3 25.1 82.6 112.7 132.3 197 111.6 82.7-20.3 136.3-98.2 125.4-182.7-4.8-36.9-20.4-68.6-46.5-95-38.3-38.7-77-77.1-115.5-115.6-.6-.6-1.2-1.1-2.3-2.1-.7.9-1.2 1.8-1.8 2.4-34.7 34.8-69.4 69.5-104.2 104.2-.9.9-1.8 1.8-2.8 2.7-8.6 7.5-16.4 15.8-23.3 24.9-18.1 24-28.8 50.9-32.5 80.7-.5 4.5-.7 9-1.1 13.6.7.1 1 .2 1.4.2 31.3 0 62.6.1 93.8 0 8.9 0 15.2-6.6 15.4-15.5.1-5.6 0-11.2 0-16.8 0-.6-.2-1.1-.3-1.8-1.4 0-2.7.1-4 0-2.4-.2-4.3-1.8-4.5-3.9-.2-2.2 1.1-3.9 3.7-4.6.9-.2 1.9-.3 2.8-.3H222.9v-30.6c0-.7-.6-1.6-1.1-2-3.4-2.5-7.1-2.9-11.3-2.1-7.5 1.5-15 3.1-22.6 4-5.9.7-10.3-2.4-12.9-7.7-2.6-5.3-2.9-10.9-1.4-16.6.9-3.3 3.1-5.6 6.4-6.5 2-.6 4.2-.9 6.3-1 7.2-.1 14 1.5 20.5 4.4 4.1 1.9 8.3 2 12.3-.5 2-1.2 4.1-2.2 6.2-3.1 8.3-3.7 15.5-2.4 22.1 3.8.7.7 2 1.1 3 1.1 7.3 0 14.3-1.4 21.3-3.4 3.5-1 7.3-1.7 10.9-1.7 6.5-.1 10 3.6 10.4 10 .2 2.7.2 5.3.1 8-.3 8.4-3.8 11.8-12 12.4-7.2.5-14.2-.4-21.1-2.7-4.7-1.6-9.6-3-13.8 1.4-.1.1-.3.2-.4.2-1.5.4-1.8 1.5-1.8 2.9.1 9.2 0 18.4 0 27.7 0 .7.1 1.3.2 2.1h24.2c2.9 0 4.2 1.2 4.5 3.9.2 2.4-1.2 3.7-3.4 4.2-1.7.4-3.5.6-5.4.9v3.1c0 5.4.2 10.9-.1 16.3-.3 4.4 1.2 7.8 4.8 9.8 2.9 1.6 6.3 3 9.6 3.3 8.6.6 16.9 2.5 24.9 5.4 13 4.7 24.5 11.5 32.1 23.5 4 6.4 7.8 13 11.3 19.7 6.3 12.1 10.7 24.8 10.1 38.8-.1 2.1-.6 3-2.8 3.3-8.2 1.3-16.4 2.9-24.7 4.4-7.2 1.3-14.4 2.6-21.7 3.8-.2-.8-.3-1.3-.5-1.9-1.1-5.7-1.9-11.4-3.2-17-1.9-8-4.5-15.7-10-22.2-3.7-4.4-8.4-6.4-14-5.1-4.4 1.1-8.7 2.7-12.9 4.4-11.9 4.9-24 8.4-37 8.6-19.8.4-38.3-5.9-57-11.3-1-.3-2-.6-3-.6H99.7c-.4.3-.9.3-1.7.3z"></path>
                        <path d="M334.8 396.7c3.2 17 11.8 31.1 22.7 43.9 5.7 6.6 9.9 14.1 11.9 22.6 2.3 9.5 2.1 19-1.8 28.1-4.3 10.1-11.8 16.2-22.9 17.9-7.5 1.2-15 1-22.4-.4-11.5-2.1-20.4-11.5-22.9-24.5-3.3-16.9 1.7-31.4 12.7-44.2 7.7-9 14.2-18.8 18.5-30 1.6-4.2 2.7-8.7 4.2-13.4z"></path>
                    </svg>
                </div>
                <div className={`${styles.toggleBar__logo_text}`}>
                    Plumbio
                </div>
            </div>
            <p className={`toggleBar__objHidden_mobile relative ${styles.logo_popup_info}`}>
                Our team proudly offers an on-time guarantee and a 100% customer satisfaction guarantee.
            </p>
            <Button
                className={`${styles.popup_btn}`}
                onClick={(e) => {
                    onClickClose(false);
                    setTimeout(() => {
                        onClickModal(true);
                    })
                }}
            >
                Schedule Online
            </Button>

            {/* Info Items */}
            <div className={`${styles.toggleBar__item} relative`}>
                <div className='ttsubtitle'>Our Contacts</div>
                <div className={`${styles.infoBox__wrapper}`}>
                    {infoBox.map(({id, icon, title, content, address}) =>
                        <div key={id} className={`${styles.infoBox__item} flex items-center justify-start`}>
                            <div className={`${styles.infoBox__icon} icon-694055 relative`}>
                                <span className={`${icon} obj__indent-center`}></span>
                            </div>
                            <div className={`${styles.infoBox__cont}`}>
                                {title ? (
                                    <div className={`${styles.infoBox__title} base__color`}>
                                        {title}
                                    </div>
                                ):null}
                                {content ? (
                                    <p>{content}</p>
                                ):null}
                                {address ? (
                                    <address className={styles.infoBox__address}>{address}</address>
                                ):null}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className={styles.toggleBar__item}>
                <Socials />
            </div>
            {/* Btn Close */}
            <div
                className={`${styles.toggleBar__close} toggleBar__objHidden_mobile  obj__inner-center icon-748122 absolute`}
                onClick={(e) => {
                    onClickClose(false);
                }}
            >
                <label>Close</label>
            </div>
            <style jsx global>
				{`
                    @media (min-width: 1101px){
                        #jsMobileMenu{
                            display:none;
                        }
                    }
                    @media (max-width: 1100px){
                        #jsMobileMenu{
                            overflow: hidden;
                            padding-bottom: 12px;
                            padding-left: 11px;
                        }
                        #jsMobileMenu nav {
                            transition-duration: 300ms;
                            left: 0;
                            position: relative;
                        }
                        #jsMobileMenu nav > ul {
                            transition-duration: 300ms;
                        }
                        #jsMobileMenu nav > ul > li a {
                            display: inline-block;
                            font-size: 16px;
                            padding: 8px 25px 8px 0;
                            color: var(--base-color);
                            font-weight: bold;
                        }
                        @media (hover: hover) {
                            #jsMobileMenu nav > ul > li a:hover{
                                color: var(--base-color2);
                            }
                        }
                        #jsMobileMenu nav > ul > li a.is-active,
                        #jsMobileMenu nav > ul > li.itemParentActive > a{
                            color: var(--base-color2);
                        }
                        #jsMobileMenu nav > ul > li > ul {
                            top: 40px;
                        }
                        #jsMobileMenu nav > ul ul {
                            left: 100%;
                            width: 100%;
                            position: absolute;
                            opacity: 0;
                            top: 0;
                        }
                        #jsMobileMenu li.active > ul {
                            opacity: 1;
                            z-index: 2;
                        }
                        #jsMobileMenu li.has-submenu > a {
                            position: relative;
                            z-index: 1;
                            display: block;
                            width: calc(100% - 50px);
                        }
                        #jsMobileMenu .link__openSubmenu {
                            position: absolute;
                            display: block;
                            right: 0px;
                            margin-top: 2px;
                            width: 50px;
                            height: 36px;
                            text-align: center;
                            z-index: 2;
                            cursor: pointer;
                        }
                        #jsMobileMenu .link__openSubmenu:before {
                            content: "";
                            border: solid var(--base-color);
                            border-width: 0 2px 2px 0;
                            display: inline-block;
                            padding: 2px;
                            position: relative;
                            top: 3px;
                            -webkit-transform: rotate(-45deg);
                            transform: rotate(-45deg);
                            pointer-events: none;
                        }
                        #jsMobileMenu > ul > li > ul {
                            display: none;
                        }
                        #jsMobileMenu.submenuVisible .mobileMenu__back {
                            pointer-events: auto;
                            -webkit-transform: translateX(0%);
                            transform: translateX(0%);
                        }
                        .mobileMenu__back {
                            height: 40px;
                            padding: 4px 20px;
                            color: var(--base-text-color);
                            transition-duration: 300ms;
                            -webkit-transform: translateX(100%);
                            transform: translateX(100%);
                        }
                        .mobileMenu__back:before {
                            content: "";
                            position: absolute;
                            top: 50%;
                            left: 2px;
                            margin-top: -3px;
                            border: solid var(--base-color);
                            border-width: 0 2px 2px 0;
                            display: inline-block;
                            padding: 2px;
                            pointer-events: none;
                            -webkit-transform: translateY(-50%);
                            transform: translateY(-50%);
                            -webkit-transform: rotate(135deg);
                            transform: rotate(135deg);
                        }
                        @media (hover: hover) {
                            .mobileMenu__back:hover {
                                color: var(-base-color2);
                            }
                        }
                        @media (hover: hover) {
                            .mobileMenu__back:hover:before {
                                border-color: var(-base-color2);
                            }
                        }
                    }
                `}
			</style>
        </>
	);
}
export default ToggleBarLayout;