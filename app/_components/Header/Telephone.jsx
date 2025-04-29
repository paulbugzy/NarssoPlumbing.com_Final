import styles from "./Telephone.module.css";
export default function Telephone() {
  return (
    <div className={`${styles.tel__holder} whitespace-nowrap relative`}>
      <span className={`${styles.tel__text} md-max:hidden`}>
        Call for <b>24/7 Emergency Plumber</b>
      </span>
      <a
        href="tel:+1-847-242-1286"
        className={`${styles.tel__tel} flex`}
        title="Call the plumbers at NC Plumbing, servicing Chicago and the North and Northwest Suburbs at (847) 242-1286. 24 Hour Emergency Services avilable!"
        aria-label={`Call NC Plumbing&rsquo;s 24 Hour Plumbers near Des Plaines, IL (847) 242-1286`}
      >
        <i
          className={`${styles.tel__icon} icon-25453 relative inline-block`}
        ></i>
        (847) 242-1286
      </a>
    </div>
  );
}
