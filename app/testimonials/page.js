//Import Sections
import PageTitle from "../_components/Common/PageTitle"

import ReviewsCarusel from '../_components/Testimonials/ReviewsCarusel'
import Reviews from '../_components/Testimonials/Reviews'
import ReviewsVideo from '../_components/Testimonials/ReviewsVideo'
import ReviewsForm from '../_components/Testimonials/ReviewsForm'

//Page Layout
export default function Testimonials() {
  return (
    <>
		<PageTitle dataTitle="Testimonials" />
		<main id="tt-pageContent" className="overflow-hidden">
    		<ReviewsCarusel />
			<Reviews />
			<ReviewsVideo />
			<ReviewsForm />
		</main>
    </>
  )
}