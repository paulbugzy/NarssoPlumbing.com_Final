import styles from './GoogleMap.module.css';
const GoogleMap = () => (
	<>
		<div id="map"
			className={`lazyload relative ${styles.map} bg-cover bg-center`}
			data-bg="../images/map-footer.jpg"
		>
			<iframe src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
				title="Google maps"
				loading="lazy"
				className="lazyload size-full outline-none"
				data-src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.5820008392016!2d-77.45701318432829!3d38.75035326320268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b65b93b943fb07%3A0xc8712e829da92b9e!2sHistoric%20District%2C%208494%20Signal%20Hill%20Rd%2C%20Manassas%2C%20VA%2020110%2C%20USA!5e0!3m2!1sen!2sua!4v1605172763191!5m2!1sen!2sua"
				allowFullScreen=""
				aria-hidden="false">
			</iframe>
		</div>
	</>
);
export default GoogleMap;
