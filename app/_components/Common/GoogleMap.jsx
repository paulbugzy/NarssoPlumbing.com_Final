import styles from "./GoogleMap.module.css";
const GoogleMap = () => (
  <>
    <div
      id="map"
      className={`lazyload relative ${styles.map} bg-cover bg-center`}
      data-bg="../images/map-footer.jpg"
    >
      <iframe
        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
        title="Our plumbing service areas on Google maps"
        loading="lazy"
        className="lazyload size-full outline-none"
        data-src="https://www.google.com/maps/d/u/0/embed?mid=15dtGx8frI_V55jb3b-fV09s-1s-vdhs&ehbc=2E312F"
        allowFullScreen=""
        aria-hidden="false"
      ></iframe>
    </div>
  </>
);
export default GoogleMap;
