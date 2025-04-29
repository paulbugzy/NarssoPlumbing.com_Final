import SectionTitle from "../Common/SectionTitle";
import CaruselServices from "../Common/CaruselServices";
const OurServicesIndex = () => {
  return (
    <>
      <div className="container container__fluid-lg section__indent-top ">
        <div className="md:flex md:gap-[30px] holder__title">
          <div className="md:basis-1/2">
            <SectionTitle
              dataSubtitle="Plumbing Services"
              dataTitle="From New Faucets to Gushing Pipes"
              dataTextUnder="Plumbing Services"
              dataAddClass="blocktitle__nomargin blocktitle__left"
              dataMaxWidth="430px"
            />
          </div>
          <div className="md:basis-1/2 relative">
            <p className="ttnotes no-resize-text">
              For homeowners and businesses in Des Plaines, Park Ridge, and
              throughout the North and Northwest suburbs, plumbing issues
              require fast, expert attention. From routine faucet installations
              to emergency pipe bursts, Narsso Construction and Plumbing
              provides reliable, professional plumbing solutions you can trust.
              Explore our services or call us for immediate help!
            </p>
          </div>
        </div>
      </div>
      <div className="container__fluid">
        <div className="lg__indent-x">
          <CaruselServices />
        </div>
      </div>
    </>
  );
};
export default OurServicesIndex;
