'use client';
//Import Sections
import PageTitle from "../_components/Common/PageTitle";
import SectionTitle from '../_components/Common/SectionTitle';
import Accordion from "../_components/Common/Accordion";
import FormAsqQuestion from "../_components/Common/FormAsqQuestion";
//Import dataAccordion
import {dataAccordion__faq1} from '../_components/Common/AccordionData__faq1';
import {dataAccordion__faq2} from '../_components/Common/AccordionData__faq2';
//Page Layout
export default function Faq() {
  return (
    <>
		<PageTitle dataTitle="FAQ" />
		<main id="tt-pageContent" className="overflow-hidden">
			<div className="section__indent">
				<div className="container container__fluid-lg">
					<SectionTitle
						dataSubtitle="let you know"
						dataTitle="Frequently Asked Questions"
						dataTextUnder="Questions"
						dataText="From emergency plumbing services to slab leak repair, we’ve put together
						a comprehensive run down of questions we hear most often."
						dataAddClass="text-center"
						dataMaxWidth="570px"
					/>
					<div className="md:flex md:gap-[30px]">
						<div className="md:basis-1/2">
							<Accordion dataSrcData={dataAccordion__faq1} />
						</div>
						<div className="md:basis-1/2 md-max:mt-[10px]">
							<Accordion dataSrcData={dataAccordion__faq2} />
						</div>
					</div>
				</div>
        	</div>
			<div className="section__inner">
				<div className="container container__fluid-lg">
					<SectionTitle
						dataSubtitle="your question"
						dataTitle="Asq Your Question"
						dataText="Many of us from time to time find the need to get an answer to some type of plumbing related situation."
						dataAddClass="text-center"
						dataMaxWidth="585px"
					/>
					 <FormAsqQuestion />
				</div>
			</div>
      </main>
    </>
  )
}