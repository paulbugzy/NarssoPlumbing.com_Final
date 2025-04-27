import Link from "next/link";
import { getPosts } from '../../libs/data_post';
//Import Sections
import ItemPost from "../../_components/dashboard/ItemPost";
const Blog = async () => {
	const posts = await getPosts()
		return (
			<>
				<div className="text-right">
					<Link className="btn" href={"/dashboard/addPost"}>
						<span>Add Post</span>
					</Link>
				</div>
				{posts.map((post) => (
					<ItemPost key={post.id} data={post} />
				))}
			</>
		)
}
export default Blog