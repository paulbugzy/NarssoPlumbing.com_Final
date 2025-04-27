'use client';
import { addContact } from '../../libs/action'
import SectionTitle from '../../_components/Common/SectionTitle'
export default function addProduct() {
   	return (
		<>
			<div>
                <SectionTitle
                    dataSubtitle="View & Update Products"
					dataTitle="Add New Product"
				/>
                <form action={addContact} className="flex flex-col gap-3">
                    <label htmlFor="ProductName">Product Name</label>
                    <input
                        className="form__control"
                        type="text"
                        placeholder="Product Name"
                        id='product_name'
                        name='title'
                    />
                    <label htmlFor="PathImage">Path to the image</label>
                    <input
                        className="form__control"
                        type="text"
                        placeholder="/images/product/product-01.jpg"
                        id='PathImage'
                        name='srcimg'
                        defaultValue="/images/product/product-01.jpg"
                    />
                    <label htmlFor="PathImageForStripe">Path to image for Stripe</label>
                    <input
                        className="form__control"
                        type="text"
                        placeholder="Path to image for stripe"
                        id='PathImageForStripe'
                        name='srcimg_for_stripe'
                    />
                    <label htmlFor="imagelabel">Label for product</label>
                    <input
                        className="form__control"
                        type="text"
                        placeholder="Label for product"
                        id='imagelabel'
                        name='label'
                    />
                    <label htmlFor="SetCategory">Category</label>
                    <input
                        className="form__control"
                        type="text"
                        placeholder="Set Category"
                        id='SetCategory'
                        name='category'
                    />
                    <label htmlFor="SetTag">Tag</label>
                    <input
                        className="form__control"
                        type="text"
                        placeholder="Set Tag"
                        id='SetTag'
                        name='tag'
                    />
                    <label htmlFor="SetSKU">SKU</label>
                    <input
                        className="form__control"
                        type="text"
                        placeholder="Set SKU"
                        id='SetSKU'
                        name='sku'
                    />
                    <label htmlFor="SetRating">Rating</label>
                    <input
                        className="form__control"
                        type="text"
                        placeholder="Set Rating"
                        id='SetRating'
                        name='rating'
                    />
                    <div className='flex sm-max:flex-col gap-[15px]'>
                        <div>
                            <label htmlFor="SetPrice">Price</label>
                            <input
                                className="form__control"
                                type="text"
                                placeholder="Set Price"
                                id='SetPrice'
                                name='price'
                            />
                        </div>
                        <div>
                            <label htmlFor="SetPrice">Price New</label>
                            <input
                                className="form__control"
                                type="text"
                                placeholder="Set Price"
                                id='SetPrice'
                                name='price__new'
                            />
                        </div>
                        <div>
                            <label htmlFor="SetPrice">Price Old</label>
                            <input
                                className="form__control"
                                type="text"
                                placeholder="Set Price"
                                id='SetPrice'
                                name='price__old'
                            />
                        </div>
                    </div>
                    <label htmlFor="SetCount">Count</label>
                    <input
                        className="form__control"
                        type="text"
                        placeholder="Set Count"
                        id='SetCount'
                        name='count'
                        defaultValue='1'
                    />
                    <label htmlFor="SetDescription">Description</label>
                    <textarea
                        className="form__control"
                        type="text"
                        placeholder="Set Description"
                        id='SetDescription'
                        name='description'
                        rows="5"
                    />
                    <button
                        type="submit"
                        className="btn"
                    >
                        <span>Add Product</span>
                    </button>
                </form>
            </div>
		</>
	)
}