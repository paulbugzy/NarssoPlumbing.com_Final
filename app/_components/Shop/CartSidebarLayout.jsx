"use client";

import { useContext } from "react";
import { Context } from '../../_context/';

import Image from 'next/legacy/image';
import Counter from '../Common/Counter';
import styles from './CartSidebarLayout.module.css';
import Link from 'next/link';
import {priceFormatting, cartTotalPriceAll, disableScroll, handlePay} from '../../../public/js/utilitie';

//Import Js
export default function CartSidebarLayout(){
    const {cartItems, removeFromCart, changeQuantityItem} = useContext(Context);
    const totalProduct = cartItems.length;
    const totalPrice = cartTotalPriceAll(cartItems);
	return (
		<>
            <div className={`${styles.cart__subtotal} flex`}>
                <div className={`${styles.cart__subtotal_Title} ttsubtitle_sm base__color`}>
                    MY BAG ({totalProduct})
                </div>
            </div>
            {totalProduct === 0  ? (
                <div className='ttsubtitle_sm'>
                    Your shopping bag is empty.
                </div>
            ) : (
                <>
                   {/* Cart List */}
                    <div className={`${styles.cart__list}`}>
                        {cartItems.map((el) => (
                            <div key={el._id} className={`${styles.cart__item} flex gap-[20px]`}>
                                {el.srcimg ? (
                                    <Link className={`${styles.cart__itemImg} relative block`} href='/shop/{_id}' as={`/shop/${el._id}`}>
                                        <Image
                                            src={el.srcimg}
                                            width="120px"
                                            height="145px"
                                            layout="responsive"
                                            objectFit="cover"
                                            alt={el.title}
                                        />
                                    </Link>
                                ):null}
                                <div className={`${styles.cart__itemInfo}`}>
                                    <div className={`${styles.cart__itemInfo}`}>
                                        <Link href='/shop/{el._id}' as={`/shop/${el._id}`} className={`${styles.cart__itemTitle} font-bold relative inline-block`}>
                                            {el.title}
                                        </Link>
                                        <div className={`${styles.cart__itemPrice} base__color font-bold`}>
                                            {priceFormatting(el.price)}
                                        </div>
                                    </div>
                                    <Counter
                                        dataValue={el.count || 1}
                                        onChange={(value) => {
                                            changeQuantityItem(el._id, value);
                                        }}
                                    />
                                    <br />
                                    <div
                                        className={`${styles.cart__itemRemove} base__color relative inline-block cursor-pointer inline-block`}
                                        aria-label="remove from cart"
                                        onClick={() => removeFromCart(el._id)}
                                    >Remove</div>
                                </div>
                            </div>
                        ))}
                   </div>
                   {/* Cart Total Info */}
                    <div className={`${styles.cart__subtotal} flex`}>
                        <div className={`${styles.cart__subtotal_Title} base__color`}>
                            SUBTOTAL
                        </div>
                        <div className={`${styles.cart__subtotal_Value} base__color3`}>
                            {priceFormatting(totalPrice)}
                        </div>
                    </div>
                    <button
                        className="btn btn__top btn__invert w-[100%]"
                        onClick={() => handlePay(cartItems)}
                    >
                        <span>PROCEED TO CHECKOUT</span>
                    </button>
                    <Link
                        onClick={() => disableScroll(false)}
                        href='cart' as={`/cart`}
                    >
                        <button className="btn mt-[20px] w-[100%]">
                           <span>VIEW SHOPPING BAG</span>
                        </button>
                    </Link>
                </>
            )}
		</>
	)
};
