'use client';
import {useState} from 'react'
import styles from './SingleProductTabs.module.css';
import Button from '../Common/Button';
import Rating from '../Common/Rating'
const SingleProductTabs = (props) => {
    const [toggle, setToggle] = useState(1);
    function updateToggle(id){
        setToggle(id)
    }
    return(
        <>
            <div className="section__indent-top-small">
                <div className={`tabs__wrapper tabs__wrapper_container tabs__wrapper-navsm tabs__sm ${styles.tabs__custom}`}>
                    <div className={`tabs__nav tabs__md  tabs__nav_left unselectable`}>
                        {props.dataProduct.description ? (
                            <div className={`tabs__nav_item ${styles.tabs__nav_item} ${toggle === 1 ? "tabs__nav_active" : false}`} onClick={()=>updateToggle(1)}>
                                <span className="tabs__nav_link">Description</span>
                            </div>
                        ):null}
                        {props.dataProduct.additional ? (
                            <div className={`tabs__nav_item ${styles.tabs__nav_item} ${toggle === 2 ? "tabs__nav_active" : false}`} onClick={()=>updateToggle(2)}>
                                <span className="tabs__nav_link">Additional information</span>
                            </div>
                        ):null}
                    </div>
                    <div className={`${styles.tabs__container} tabs__container no-resize-text`}>
                        {props.dataProduct.description ? (
                            <div className={toggle === 1 ? "tabs__show" : "tabs__hide"}>
                                {props.dataProduct.description}
                            </div>
                        ):null}
                        {props.dataProduct.additional ? (
                            <div className={toggle === 2 ? "tabs__show" : "tabs__hide"}>
                                <table className={`${styles.propd__table}`}>
                                    <tbody>
                                        {props.dataProduct.additional.map((item, index) => (
                                            <tr key={index}>
                                                <td>
                                                    {item.title}
                                                </td>
                                                <td>
                                                    {item.value}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ):null}
                    </div>
                </div>
            </div>
            <style jsx>{`
                .tabs__hide{
                    display:none;
                }
                .tabs__show{
                    display:block
                }
            `}</style>
		</>
    )
}
export default SingleProductTabs;
