"use client";
import Image from 'next/legacy/image';
import Link from 'next/link';
import { useContext } from "react";
import { Context } from '../_context';
//Import Css
import styles from './cart.module.css';
//Import Sections
import PageTitle from "../_components/Common/PageTitle"
import SectionTitle from '../_components/Common/SectionTitle';
import Counter from '../_components/Common/Counter';
//Import Js
import {priceFormatting, cartTotalPriceAll, cartTotalPriceItem, handlePay} from '../../public/js/utilitie';
//Import Icon
import { RiDeleteBinLine } from "react-icons/ri";
export default function Cart() {
    const {cartItems, removeFromCart, changeQuantityItem} = useContext(Context);
    const totalProduct = cartItems.length;
    const totalPrice = cartTotalPriceAll(cartItems);
    return (
      <>
        <PageTitle dataTitle="Cart" />
        <main id="tt-pageContent" className="overflow-hidden">
            <div className="section__inner">
                <div className="container container__fluid-xl">
                    <SectionTitle
                        dataSubtitle="Let's make a purchase"
                        dataTitle="SHOPPING CART"
                        dataTextUnder="CART"
                        dataAddClass="text-center"
                        dataMaxWidth="570px"
                    />
                    {totalProduct === 0  ? (
                        <div className={`ttsubtitle md:text-center ${styles.cart__message}`}>
                            Your shopping bag is empty.
                        </div>
                    ) : (
                        <>
                            {cartItems.map((product) => (
                                <div key={product._id} className={`${styles.table__row} flex items-center`}>
                                    <div className={`${styles.table__img} flex-auto`}>
                                        {product.srcimg ? (
                                            <Link className={`relative block`} href='/shop/{_id}' as={`/shop/${product._id}`}>
                                                <Image
                                                    src={product.srcimg}
                                                    width="100px"
                                                    height="145px"
                                                    layout="responsive"
                                                    objectFit="cover"
                                                    alt={product.title}
                                                />
                                            </Link>
                                        ):null}
                                    </div>
                                    <div className={`${styles.table__wrapper} md-min:flex flex-auto items-center`}>
                                         <div className={`${styles.table__info} font-bold flex-auto`}>
                                            <Link className={`relative block`} href='/shop/{_id}' as={`/shop/${product._id}`}>{product.title}</Link>
                                        </div>
                                        <div className={`${styles.table__price} font-bold`}>
                                            {priceFormatting(product.price)}
                                        </div>
                                        <div className={`${styles.table__quantity}`}>
                                            <Counter
                                                dataValue={product.count || 1}
                                                onChange={(value) => {
                                                    changeQuantityItem(product._id, value);
                                                }}
                                            />
                                        </div>
                                        <div className={`${styles.table__total} md-min:text-right font-bold base__color`}>
                                            {priceFormatting(cartTotalPriceItem(product.count, product.price))}
                                        </div>
                                    </div>
                                    <div className={`${styles.table__remove} text-right cursor-pointer`} onClick={() => removeFromCart(product._id)}>
                                        <RiDeleteBinLine />
                                    </div>
                                </div>
                            ))}
                            <div className={`${styles.cart__subtotal} md-min:text-right`}>
                                <span className={`${styles.cart__subtotal_Title} base__color`}>
                                    SUBTOTAL:
                                </span>
                                <span className={`${styles.cart__subtotal_Value} base__color3`}>
                                    {priceFormatting(totalPrice)}
                                </span>
                            </div>
                            <button className="btn btn__top btn__invert" onClick={() => handlePay(cartItems)}>
                                <span>PROCEED TO CHECKOUT</span>
                            </button>
                        </>
                    )}
                </div>
            </div>
        </main>
      </>
    )
}
