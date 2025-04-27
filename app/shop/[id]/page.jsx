//Import Sections
import PageTitle from "../../_components/Common/PageTitle";
import SingleProductInfo from "../../_components/Shop/SingleProductInfo";
import SingleProductTabs from "../../_components/Shop/SingleProductTabs"
import RelatedProducts from "../../_components/Shop/RelatedProducts"
import CartSidebar from "../../_components/Shop/CartSidebar"
import { getContact } from '../../libs/data'
import { getContacts } from '../../libs/data'
const SingleProduct = async ({params}) => {
    const {id} = params;
    const product = JSON.parse(JSON.stringify(await getContact(id)));
    const products =  JSON.parse(JSON.stringify(await getContacts()));
    return (
        <>
            <PageTitle
                dataSubTitle={`Shop`}
				dataSubTitleSrc={`/shop`}
                dataTitle={`${product.title}`}
            />
            <main id="tt-pageContent" className="overflow-hidden">
                <div className="container container__tablet-fluid">
                    <div className="section-indent">
                        <SingleProductInfo  dataProduct={product} />
                    </div>
                    <div className="section-indent-small">
                        <SingleProductTabs dataProduct={product} />
                    </div>
                    <div className="section-indent">
                         <RelatedProducts
                            dataAllProduct={products}
                            dataCategory={product.category}
                        />
                    </div>
                    <CartSidebar />
                </div>
            </main>
        </>
    )
}
export default SingleProduct
