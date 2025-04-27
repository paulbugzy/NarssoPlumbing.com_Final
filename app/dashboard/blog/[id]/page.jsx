import SectionTitle from '../../../_components/Common/SectionTitle'
import { getPost } from '../../../libs/data_post.js'
import { updatePost } from '../../../libs/action_post'
const SingleProduct = async ({params}) => {
    const {id} = params;
    const post = await getPost(id);
	return (
		<>
			<SectionTitle
                dataSubtitle="View & Update Post"
			    dataTitle="Single Post"
			/>
            <form action={updatePost}>
				<input type="text" name="id" hidden defaultValue={post.id} />
				<label htmlFor="ProductName">Post Title</label>
				<input
					className="form__control"
					type="text"
					placeholder={post.title}
					id='product_name'
					name='title'
					defaultValue={post.title}
				/>
				<label htmlFor="SetCategory">Category</label>
                <input
                    className="form__control"
                    type="text"
                    placeholder={post.category}
                    id='SetCategory'
                    name='category'
                />
				<label htmlFor="SetTag">Tag</label>
                <input
                        className="form__control"
                        type="text"
                        placeholder={post.tag}
                        id='SetTag'
                        name='tag'
                />
				<label htmlFor="PathImage">Path to the image</label>
				<input
					className="form__control"
					type="text"
					placeholder={post.srcimg}
					id='PathImage'
					name='srcimg'
				/>
				<details>
					<summary>
						Youtube Link
					</summary>
					<div>
						<input
							className="form__control"
							type="text"
							placeholder={post.youtubeCode}
							id='PathImage'
							name='youtubeCode'
							defaultValue={post.youtubeCode}
						/>
					</div>
				</details>
				<label htmlFor="SetDescription">Description</label>
				<textarea
					className="form__control"
					type="text"
					placeholder={post.description}
					id='SetDescription'
					name='description'
					rows="5"
					defaultValue={post.description}
				/>
				<details>
					<summary>Add Blockquote</summary>
					<div>
						<label htmlFor="BlockquoteTitle">Blockquote Title</label>
						<input
							className="form__control"
							type="text"
							id='BlockquoteTitle'
							name='blockquoteTitle'
							placeholder={post.blockquoteTitle}
						/>
						<label htmlFor="BlockquoteSubTitle">Blockquote SubTitle</label>
						<input
							className="form__control"
							type="text"
							id='BlockquoteSubTitle'
							name='blockquoteSubTitle'
							placeholder={post.blockquoteSubTitle}
						/>
						<label htmlFor="BlockquoteText">Blockquote Text</label>
						<textarea
							className="form__control"
							type="text"
							placeholder={post.blockquoteText}
							id='BlockquoteText'
							name='blockquoteText'
							rows="5"
						/>
					</div>
				</details>
				<details>
					<summary>Additional Layout</summary>
					<div>
						<label htmlFor="title2">Title</label>
						<input
							className="form__control"
							type="text"
							id='title2'
							name='title2'
							placeholder={post.title2}
						/>
						<label htmlFor="subtext2">Text</label>
						<textarea
							className="form__control"
							type="text"
							placeholder={post.subtext2}
							id='subtext2'
							name='subtext2'
							rows="5"
						/>
					</div>
				</details>
				<details>
					<summary>Additional Layout 2</summary>
					<div>
						<label htmlFor="title3">Title</label>
						<input
							className="form__control"
							type="text"
							id='title3'
							name='title3'
							placeholder={post.title3}
						/>
						<label htmlFor="subtext3">Text</label>
						<textarea
							className="form__control"
							type="text"
							placeholder={post.subtext3}
							id='subtext3'
							name='subtext3'
							rows="5"
						/>
					</div>
				</details>
				<button
					type="submit"
					className="btn"
				>
					<span>Update post</span>
				</button>
            </form>
		</>
	)
}
export default SingleProduct
