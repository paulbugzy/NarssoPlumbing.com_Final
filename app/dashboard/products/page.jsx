import Link from "next/link";
import { getContacts } from '../../libs/data'
//Import Sections
import ItemProduct from "../../_components/dashboard/ItemProduct";

const Products = async  () => {
	const contacts = await getContacts()
	return (
		<>
			<div className="text-right">
				<Link className="btn" href={"/dashboard/addProduct"}>
					<span>Add Product</span>
				</Link>
			</div>
			{contacts.map((contact) => (
				<ItemProduct key={contact.id} data={contact} />
			))}
		</>
	)
}
export default Products
