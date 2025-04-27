import styles from './CoverageLayout.module.css';
import SectionTitle from '../Common/SectionTitle';
import Image from 'next/legacy/image';
import {dataAreasCover} from './CoverageLayoutData';
import imageLayout from '../../../public/images/coverage_img01.jpg';
import imageLayout2 from '../../../public/images/coverage_img02.jpg';
const areaLength = dataAreasCover.length / 3;
const areaLength__squared = areaLength + areaLength;
const colPart1Data = dataAreasCover.slice(0, areaLength);
const colPart2Data = dataAreasCover.slice(areaLength, areaLength__squared);
const colPart3Data = dataAreasCover.slice(areaLength__squared);
function CoverageLayout(props){
	return(
		<>
			 <div className="section__inner bg-no-repeat bg-center lazyload tablet-bg-none" data-bg="/images/section-map-contact.png">
                <div className="container container__fluid-lg">

                    <div className={`md:flex md:gap-[40px] md-max:gap-[50px] md-max:flex-col items-start`}>
                        <div className="md:basis-6/12">
							<div className={`${styles.indent__top}`}>
								<SectionTitle
									dataSubtitle="Coverage"
									dataTitle="Locations We Cover"
									dataTextUnder="Coverage"
									dataAddClass="blocktitle__left blocktitle__topNone"
								/>
								<strong className="base__color relative">
									Our multiple service locations make it easy to deliver prompt – Same Day Service.
								</strong>
								<p className="indent__top">
									Working with a trusted company to provide you with plumbing and HVAC services can go a long way towards helping you feel confident in the quality of the pipes, sewer lines, and heating and cooling system in your home or business. We are proud to offer our services to the following communities:
								</p>
							</div>
                        </div>
                        <div className={`${styles.img__box} md:basis-6/12 relative`}>
							<Image
								src={imageLayout}
								loading={`eager`}
								width="585"
								height="346"
								layout="responsive"
								objectFit="cover"
								alt="Coverage"
							/>
							<div className={`${styles.img__label} absolute`}>
								<Image
									src={imageLayout2}
									loading={`eager`}
									width="134"
									height="171"
									objectFit="cover"
									alt="Locality We Cover"
								/>
							</div>
                        </div>
                    </div>
                    <div className={`${styles.list_type3__indent} sm:grid-cols-3 sm:grid sm:grid-flow-col sm:gap-[30px]`}>
                        <ul className={`${styles.list_type3}`}>
                            {colPart1Data.map(({ id, county, state, link }) => (
                                <li key={id}><a href={link}>
                                    <strong>{county},</strong> <span>{state}</span></a>
                                </li>
                            ))}
                        </ul>
                        <ul className={`${styles.list_type3}`}>
                            {colPart2Data.map(({ id, county, state, link }) => (
                                <li key={id}><a href={link}>
                                    <strong>{county},</strong> <span>{state}</span></a>
                                </li>
                            ))}
                        </ul>
						<ul className={`${styles.list_type3}`}>
                            {colPart3Data.map(({ id, county, state, link }) => (
                                <li key={id}><a href={link}>
                                    <strong>{county},</strong> <span>{state}</span></a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
		</>
	)
};
export default CoverageLayout;