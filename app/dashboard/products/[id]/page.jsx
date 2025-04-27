import SectionTitle from '../../../_components/Common/SectionTitle'
import { getContact } from '../../../libs/data'
import { updateContact } from '../../../libs/action'
const SingleProduct = async ({params}) => {
    const {id} = params;
    const product = await getContact(id)
	return (
		<>
			<SectionTitle
                dataSubtitle="View & Update Product"
			    dataTitle="Single Product"
			/>
            <form action={updateContact}>
				<input type="text" name="id" hidden defaultValue={product.id} />
				<label htmlFor="ProductName">Product Name</label>
				<input
					className="form__control"
					type="text"
					placeholder={product.title}
					id='product_name'
					name='title'
					defaultValue={product.title}
				/>
				<label htmlFor="PathImage">Path to the image</label>
				<input
					className="form__control"
					type="text"
					placeholder={product.srcimg}
					id='PathImage'
					name='srcimg'
					defaultValue={product.srcimg}
				/>
				<label htmlFor="PathImageForStripe">Path to image for Stripe</label>
				<input
					className="form__control"
					type="text"
					placeholder={product.srcimg_for_stripe}
					id='PathImageForStripe'
					name='srcimg_for_stripe'
					defaultValue={product.srcimg_for_stripe}
				/>
				<label htmlFor="imagelabel">Label for product</label>
				<input
					className="form__control"
					type="text"
					placeholder={product.label}
					id='imagelabel'
					name='label'
					defaultValue={product.label}
				/>
				<label htmlFor="SetCategory">Category</label>
				<input
					className="form__control"
					type="text"
					placeholder={product.category}
					id='SetCategory'
					name='category'
					defaultValue={product.category}
				/>
				<label htmlFor="SetTag">Tag</label>
				<input
					className="form__control"
					type="text"
					placeholder={product.tag}
					id='SetTag'
					name='tag'
					defaultValue={product.tag}
				/>
				<label htmlFor="SetSKU">SKU</label>
				<input
					className="form__control"
					type="text"
					placeholder={product.sku}
					id='SetSKU'
					name='sku'
					defaultValue={product.sku}
				/>
				<label htmlFor="SetRating">Rating</label>
				<input
					className="form__control"
					type="text"
					placeholder={product.rating}
					id='SetRating'
					name='rating'
					defaultValue={product.rating}
				/>
				<div className='flex sm-max:flex-col gap-[15px]'>
					<div>
						<label htmlFor="SetPrice">Price</label>
						<input
							className="form__control"
							type="text"
							placeholder={product.price}
							id='SetPrice'
							name='price'
							defaultValue={product.price}
						/>
					</div>
					<div>
						<label htmlFor="SetPrice">Price New</label>
						<input
							className="form__control"
							type="text"
							placeholder={product.price__new}
							id='SetPrice'
							name='price__new'
							defaultValue={product.price__new}
						/>
					</div>
					<div>
						<label htmlFor="SetPrice">Price Old</label>
						<input
							className="form__control"
							type="text"
							placeholder={product.price__old}
							id='SetPrice'
							name='price__old'
							defaultValue={product.price__old}
						/>
					</div>
				</div>
				<label htmlFor="SetCount">Count</label>
				<input
					className="form__control"
					type="text"
					placeholder={product.count}
					id='SetCount'
					name='count'
					defaultValue='1'
				/>
				<label htmlFor="SetDescription">Description</label>
				<textarea
					className="form__control"
					type="text"
					placeholder={product.description}
					id='SetDescription'
					name='description'
					rows="5"
					defaultValue={product.description}
				/>
				<button
					type="submit"
					className="btn"
				>
					<span>Update Product</span>
				</button>
            </form>
		</>
	)
}
export default SingleProduct
