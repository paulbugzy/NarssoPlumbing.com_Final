//Import Sections
import PageTitle from "../../_components/Common/PageTitle"
import CoverageLayout from '../../_components/Coverage/CoverageLayout';
export default function Coverage() {
  return (
    <>
        <PageTitle dataTitle="Coverage" />
        <main id="tt-pageContent" className="overflow-hidden">
            <CoverageLayout />
        </main>
    </>
  )
}

