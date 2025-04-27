'use client';
import styles from './PromoFullWidt.module.css'
import Image from 'next/legacy/image';
const PromoFullWidth = ({dataIcon, dataTitle, dataText, dataBgSrc, dataMaxWidth, dataOffsetLayout, dataAddClass}) => (
	<>
		<div className={`${styles.fullwidthPromo} ${dataAddClass || 'fullwidthPromo__inner'} relative fullwidthPromo`}>
			{dataBgSrc ? (
				<Image
					src={dataBgSrc}
					alt={dataTitle}
					layout='fill'
					objectFit="cover"
				/>
			):null}
			<div style={{maxWidth: dataMaxWidth + 'px', top: dataOffsetLayout}} className={`relative text-center mx-auto fullwidthPromo__offset`}>
				{dataIcon ? (
					<div  className={styles.fullwidthPromo__Icon}>
						<i className={`
							${dataIcon}
							inline-flex
							justify-center
							content-center
							items-center
							rounded-[50%]
						`}></i>
					</div>
				):null}
				{dataTitle ? (
					<div className={`${styles.fullwidthPromo__Title}`}>{dataTitle}</div>
				):null}
				{dataText ? (
					<p>{dataText}</p>
				):null}
			</div>
		</div>
		<style jsx global>{`
			@media (min-width: 1025px){
				.fullwidthPromo__inner{
					padding: 140px 15px 140px;
				}
				.fullwidthPromo__inner_tab{
					padding: 143px 15px 140px;
					margin-bottom:-50px;
				}
				.fullwidthPromo__inner_tab .fullwidthPromo__offset{
					top:-25px;
				}
				.fullwidthPromo__inner_box{
					padding: 118px 15px 242px;
				}
			}
			@media (max-width: 1024px) and (min-width: 768px){
				.fullwidthPromo__inner{
					padding: 60px 15px;
				}
				.fullwidthPromo__inner_tab{
					padding: 60px 15px 94px;
					margin-bottom:-37px;
				}
				.fullwidthPromo__inner_tab .fullwidthPromo__offset{
					top:-18.5px;
				}
				.fullwidthPromo__inner_box{
					padding: 60px 15px 172px;
				}
			}
			@media (max-width: 767px){
				.fullwidthPromo__inner{
					padding: 50px 15px;
				}
				.fullwidthPromo__inner_tab{
					padding: 50px 15px 84px;
					margin-bottom:-30px;
				}
				.fullwidthPromo__inner_tab .fullwidthPromo__offset{
					top:7.5px;
				}
				.fullwidthPromo__inner_box{
					padding: 50px 15px 162px;
				}
			}
		`}</style>
	</>
);
export default PromoFullWidth;