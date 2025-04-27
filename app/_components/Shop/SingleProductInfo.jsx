'use client';
import Image from 'next/legacy/image';
import { useContext } from "react";
import { Context } from '../../_context';
//Import Css
import styles from './SingleProductInfo.module.css';
//Import Sections
import RatingView from '../Common/RatingView'
import Button from '../Common/Button';
//Import Js
export default function SingleProductInfo({dataProduct}) {
    const {handleAddToCart} = useContext(Context);
    return(
        <>
            <div className="section__indent-top">
                <div className="sm:grid sm:grid-cols-2 sm:grid-flow-col sm:gap-[30px] lg:gap-[65px]">
                    {dataProduct.srcimg ? (
                        <div className={`${styles.propd__colimg} relative`}>
                            <Image
                                src={dataProduct.srcimg}
                                width="535"
                                height="674"
                                blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAAFeAQMAAABkQZK+AAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAACJJREFUaN7twQENAAAAwiD7p7bHBwwAAAAAAAAAAAAAACDqMTgAAXbCiqsAAAAASUVORK5CYII='
                                placeholder="blur"
                                layout="responsive"
                                objectFit="cover"
                                loading='lazy'
                                alt={dataProduct.title}
                            />
                        </div>
                    ):null}
                    <div className={`${styles.propd__colinfo}`}>
                        {dataProduct.sku ? (
                            <div>
                                SKU: <span className='base__color'>{dataProduct.sku}</span>
                            </div>
                        ):null}
                        {dataProduct.label ? (
                            <div className={`${styles.propd__label} inline-flex items-center capitalize`}>
                                {dataProduct.label}
                            </div>
                        ):null}
                        {dataProduct.title ? (
                            <h1 className={`${styles.propd__title}`}>{dataProduct.title}</h1>
                        ):null}
                        {dataProduct.rating ? (
                            <div className={`${styles.propd__rating}`}>
                                <RatingView
                                    dataTotal={dataProduct.rating}
                                    dataClass="rating__lg"
                                />
                            </div>
                        ):null}
                        <div className={`${styles.propd__price} flex`}>
                            {dataProduct.price && !dataProduct.price__old && !dataProduct.price__new ? (
                                <>
                                    ${dataProduct.price}
                                </>
                            ):null}
                            {dataProduct.price__old && dataProduct.price__new ? (
                                <>
                                    <del className={`${styles.price__old}`}>
                                        ${dataProduct.price__old}
                                    </del>&nbsp;
                                    <div className={`${styles.price__new} base__color3`}>
                                        ${dataProduct.price__new}
                                    </div>
                                </>
                            ):null}
                        </div>
                        {dataProduct.advantage ? (
                            <div className={`${styles.propd__indent_top}`}>
                                <ul className={`list__type1`}>
                                    {dataProduct.advantage.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ):null}
                        <div className={`${styles.propd__indent_top}`}>
                            <div className={`inline-flex gap-[20px]`}>
                                <Button
                                    className="btn__type2"
                                    onClick={() => handleAddToCart(dataProduct)}
                                >Add to Cart</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		</>
    )
}
