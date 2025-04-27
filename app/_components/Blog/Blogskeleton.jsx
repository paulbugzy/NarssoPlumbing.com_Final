'use client';
import { useState } from "react";
//Import Sections
import PostList from '../../_components/Blog/PostList';
import BlogAside from '../../_components/Blog/BlogAside';
import Pagination from "../../_components/Common/Pagination";
//Import CSS
import styles from '../../_components/Blog/Blog.module.css';
//Page Layout
const Blogskeleton = (posts) => {
    const [filteredPosts, setFilteredPosts] = useState(posts.data);
    //--- Define Sidebar Data
    const categoryItems = [...new Set(posts.data.map((val) => val.category))];
    const tagItems = [...new Set(posts.data.map((val) => val.tag))];
    const recentItems = posts.data.slice(0, 2);
    //--- Data Filtering Values
    const handleCategories = (category) => {
        if(category !== null && category !== "all"){
            let filtered = posts.data.filter(post => {
                return post.category == category;
            });
            setFilteredPosts(filtered);
        } else if(category == "all"){
            setFilteredPosts(posts.data);
        };
    };
    const handleTag = (tag) => {
        if(tag !== null && tag !== "all"){
            let filtered = posts.data.filter(post => {
                return post.tag == tag;
            });
            setFilteredPosts(filtered);
        } else if(tag == "all"){
            setFilteredPosts(posts.data);
        };
    };
    //--- Input Filter
     const handleSearch = (value) => {
        const filtered = posts.data.filter(post => post.title.toLowerCase().includes(value.toLowerCase()));
        setFilteredPosts(filtered);
    };
     //--- Paginations
     const [currentPage, setCurrentPage] = useState(1);
     const [itemPerPage] = useState(3);

     const lastCountryIndex = currentPage * itemPerPage
     const firstCountryIndex = lastCountryIndex - itemPerPage

     const paginate = pageNumber => setCurrentPage(pageNumber)

     const clickPrevNext = (value) => {
         value !== "add" ? setCurrentPage( prev => prev + 1) : setCurrentPage( prev => prev - 1)
     };
    return (
        <>
           <main id="tt-pageContent" className="overflow-hidden">
				<div className="section__inner">
					<div className="container container__fluid-xl">
						<div className={`md:flex`}>
                            <div className={`${styles.holder__colleft}`}>
                                {filteredPosts.slice(firstCountryIndex, lastCountryIndex).map((post) => (
                                    <PostList
                                        key={post._id}
                                        data={post}
                                    />
                                ))}
                                <Pagination
                                    itemPerPage={itemPerPage}
                                    value={currentPage}
                                    totalItem={filteredPosts.length}
                                    paginate={paginate}
                                    clickPrevNext={(value) => clickPrevNext(value)}
                                />
                            </div>
                            <div className={`${styles.holder__colright}`} suppressHydrationWarning={true}>
                                <BlogAside
                                    postCategories={categoryItems}
                                    postTags={tagItems}
                                    postRecent={recentItems}
                                    onClickCategory={(category) => handleCategories(category)}
                                    onClickTag={(tag) => handleTag(tag)}
                                    onSearch={(key) => handleSearch(key)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
export default Blogskeleton;