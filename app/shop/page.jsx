//Import Sections
import PageTitle from "../_components/Common/PageTitle"
import { getContacts } from '../libs/data'
//Import Sections
import Shopskeleton from "../_components/Shop/Shopskeleton"
import CartSidebar from "../_components/Shop/CartSidebar"
//Page Layout
export default async function Shop() {
	const contacts = await getContacts()
	return (
		<>
			<PageTitle dataTitle="Shop" />
			<Shopskeleton  data={JSON.parse(JSON.stringify(contacts))} />
			<CartSidebar />
		</>
	)
}

