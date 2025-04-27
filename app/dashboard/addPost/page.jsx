'use client';
import { addPost } from '../../libs/action_post'
import SectionTitle from '../../_components/Common/SectionTitle'
import styles from './page.module.css';
export default function addProduct() {
   	return (
		<>
			<div>
                <SectionTitle
                    dataSubtitle="View & Update Posts"
					dataTitle="Add New Post"
				/>
                <form action={addPost} className="flex flex-col gap-3">
                    <label htmlFor="ProductName">Post Title</label>
                    <input
                        className="form__control"
                        type="text"
                        placeholder="Post Title"
                        id='product_name'
                        name='title'
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
                    <label htmlFor="PathImage">Path to the image</label>
                    <input
                        className="form__control"
                        type="text"
                        placeholder="/images/blog/post-img01.jpg"
                        id='PathImage'
                        name='srcimg'
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
                    <details className={`${styles.details} cursor-pointer`}>
                        <summary>
                            Youtube Link
                        </summary>
                        <div className='flex flex-col gap-3'>
                            <label htmlFor="PathImage"> Youtube Link</label>
                            <input
                                className="form__control"
                                type="text"
                                placeholder="wHPqgzlRasA"
                                id='PathImage'
                                name='youtubeCode'
                                defaultValue="wHPqgzlRasA"
                            />
                        </div>
                    </details>
                    <details className={`${styles.details} cursor-pointer`}>
                        <summary>Add Blockquote</summary>
                        <div className='flex flex-col gap-3'>
                            <label htmlFor="BlockquoteText">Blockquote Text</label>
                            <textarea
                                className="form__control"
                                type="text"
                                placeholder="Set Blockquote Text"
                                id='BlockquoteText'
                                name='blockquoteText'
                                rows="5"
                            />
                            <label htmlFor="BlockquoteTitle">Blockquote Title</label>
                            <input
                                className="form__control"
                                type="text"
                                placeholder="Set Blockquote Title"
                                id='BlockquoteTitle'
                                name='blockquoteTitle'
                            />
                            <label htmlFor="BlockquoteSubTitle">Blockquote SubTitle</label>
                            <input
                                className="form__control"
                                type="text"
                                placeholder="Set Blockquote SubTitle"
                                id='BlockquoteSubTitle'
                                name='blockquoteSubTitle'
                            />
                        </div>
                    </details>
                    <details className={`${styles.details} cursor-pointer`}>
                        <summary>Additional Layout</summary>
                        <div className='flex flex-col gap-3'>
                            <label htmlFor="title2">Title</label>
                            <input
                                className="form__control"
                                type="text"
                                id='title2'
                                name='title2'
                                placeholder="Set Title"
                            />
                            <label htmlFor="subtext2">Text</label>
                            <textarea
                                className="form__control"
                                type="text"
                                placeholder="Set Text"
                                id='subtext2'
                                name='subtext2'
                                rows="5"
                            />
                        </div>
                    </details>
                    <details className={`${styles.details} cursor-pointer`}>
                        <summary>Additional Layout 2</summary>
                        <div className='flex flex-col gap-3'>
                            <label htmlFor="title3">Title</label>
                            <input
                                className="form__control"
                                type="text"
                                placeholder="Set Title"
                                id='title3'
                                name='title3'
                            />
                            <label htmlFor="subtext3">Text</label>
                            <textarea
                                className="form__control"
                                type="text"
                                placeholder="Set Text"
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
                        <span>Add Post</span>
                    </button>
                </form>
            </div>
		</>
	)
}