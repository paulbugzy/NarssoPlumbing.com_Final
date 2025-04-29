import styles from "./RowInfo.module.css";
const infoData = [
  {
    id: 1,
    icon: "icon-786204",
    title: "Service Area",
    text: "Chicago's North and Northwest Suburbs",
    link: "contact-us/coverage"
  },
  {
    id: 2,
    icon: "icon-126509",
    title: "Phone Numbers:",
    telephone: "(847) 242-1286",
    text: "Schedule Service",
    link: "tel:+1-847-242-1286"
  },
  {
    id: 3,
    icon: "icon-9927001",
    title: "Business Hours:",
    text: "Monday-Saturday: 7am-7pm  Emergency Plumber: 24/7",
    link: "contact-us"
  }
];
const InfoHolder = () => {
  if (!infoData) return null;
  return (
    <>
      <div
        className={`${styles.finfo__wrapper} 690-min:grid-cols-3 690-min:grid  690-min:grid-flow-col 690-min:gap-[30px]`}
      >
        {infoData.map(({ id, icon, title, text, telephone }) => (
          <div
            className={`${styles.finfo} relative text-center no-resize-text`}
            key={id}
          >
            <div
              className={`${styles.finfo__icon} icon-694055 text-center relative inline-block`}
            >
              <i className={`${icon} absolute z-[1]`}></i>
            </div>
            <div className={`${styles.finfo__title} text-center`}>{title}</div>
            {telephone ? <address>{telephone}</address> : null}
            <p className="mx-[auto]">{text}</p>
          </div>
        ))}
      </div>
    </>
  );
};
export default InfoHolder;
