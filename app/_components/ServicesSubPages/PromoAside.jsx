import styles from "./PromoAside.module.css";
const PromoAside = ({ dataTitle, dataTelefon, dataText }) => {
  return (
    <a
      href="tel:+1-847-242-1286"
      className={`${styles.promo__aside} block relative bg-no-repeat bg-right text-center lazyload`}
      data-bg="../images/services/promo_bgmap.png"
      title="Call NC Plumbing&rsquo;s 24 Hour Plumbers near Des Plaines, IL (847) 242-1286"
      aria-label={`Call NC Plumbing&rsquo;s 24 Hour Plumbers near Des Plaines, IL (847) 242-1286`}
    >
      {dataTitle ? (
        <h3 className={`${styles.promo__aside_title}`}>{dataTitle}</h3>
      ) : null}
      {dataText ? <p>{dataText}</p> : null}
      {dataTelefon ? (
        <address>
          <span className="icon-25453 relative"></span> {dataTelefon}
        </address>
      ) : null}
    </a>
  );
};
export default PromoAside;
