import styles from "./CoverageLayout.module.css";
import SectionTitle from "../Common/SectionTitle";
import Image from "next/legacy/image";
import { dataAreasCover } from "./CoverageLayoutData";
import imageLayout from "../../../public/images/coverage_img01.jpg";
import imageLayout2 from "../../../public/images/coverage_img02.jpg";
const areaLength = dataAreasCover.length / 3;
const areaLength__squared = areaLength + areaLength;
const colPart1Data = dataAreasCover.slice(0, areaLength);
const colPart2Data = dataAreasCover.slice(areaLength, areaLength__squared);
const colPart3Data = dataAreasCover.slice(areaLength__squared);
function CoverageLayout(props) {
  return (
    <>
      <div
        className="section__inner bg-no-repeat bg-center lazyload tablet-bg-none"
        data-bg="/images/section-map-contact.png"
      >
        <div className="container container__fluid-lg">
          <div
            className={`md:flex md:gap-[40px] md-max:gap-[50px] md-max:flex-col items-start`}
          >
            <div className="md:basis-6/12">
              <div className={`${styles.indent__top}`}>
                <SectionTitle
                  dataSubtitle="Service Areas"
                  dataTitle="Service Areas"
                  dataTextUnder="Plumbing"
                  dataAddClass="blocktitle__left blocktitle__topNone"
                />
                <strong className="base__color relative">
                  5-Star Rated Plumbing Services Near You – by the trusted
                  plumbers at Narsso Construction and Plumbing.
                </strong>
                <p className="indent__top">
                  At Narsso Construction and Plumbing, we proudly provide
                  residential, commercial, and 24-hour emergency plumbing
                  services across a wide range of Chicagoland communities. Since
                  2015, our team has been delivering top-rated plumbing
                  solutions with quality craftsmanship, honest
                  communication, and industry-leading customer service as our service standards.
                </p>
                <p className="indent__top">
                  Choosing a reliable plumbing company is about more than just
                  fixing a problem—it&rsquo;s about feeling confident in the
                  safety, efficiency, and longevity of your home or commercial
                  plumbing systems. That&rsquo;s why we&rsquo;re committed to
                  serving our communities with the highest standards of
                  workmanship and care.
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
          <div
            className={`${styles.list_type3__indent} sm:grid-cols-3 sm:grid sm:grid-flow-col sm:gap-[30px]`}
          >
            <ul className={`${styles.list_type3}`}>
              {colPart1Data.map(({ id, county, state, link }) => (
                <li key={id}>
                  <a href={link}>
                    <strong>{county},</strong> <span>{state}</span>
                  </a>
                </li>
              ))}
            </ul>
            <ul className={`${styles.list_type3}`}>
              {colPart2Data.map(({ id, county, state, link }) => (
                <li key={id}>
                  <a href={link}>
                    <strong>{county},</strong> <span>{state}</span>
                  </a>
                </li>
              ))}
            </ul>
            <ul className={`${styles.list_type3}`}>
              {colPart3Data.map(({ id, county, state, link }) => (
                <li key={id}>
                  <a href={link}>
                    <strong>{county},</strong> <span>{state}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default CoverageLayout;
