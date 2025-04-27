import SectionTitle from './_components/Common/SectionTitle';
import Link from 'next/link';
const NotFoundPage = () => {
	return (
		<div className="container container__fluid-lg section__inner text-center">
            <SectionTitle
                dataSubtitle="stay with us"
                dataTitle="Page Not Found"
                dataTextUnder="404"
                dataAddClass="text-center"
            />
            <Link href="/" className='btn'><span>Go to home page</span></Link>
        </div>
    )
};
export default NotFoundPage;