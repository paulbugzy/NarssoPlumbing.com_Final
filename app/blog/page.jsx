//Import Sections
import PageTitle from "../_components/Common/PageTitle";
import Blogskeleton from "../_components/Blog/Blogskeleton";
//Import Data
import { getPosts } from '../libs/data_post';
//Page Layout
export default async function Blog() {
    const posts = await getPosts()
    return (
        <>
            <PageTitle dataTitle="Blog" />
            <Blogskeleton  data={JSON.parse(JSON.stringify(posts))} />
        </>
    )
}
