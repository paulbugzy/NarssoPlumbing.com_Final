'use client';
import SectionTitle from '../Common/SectionTitle';
import Product from '../Shop/Product';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-creative';
const RelatedProducts = ({dataAllProduct, dataCategory}) => {
    const defineCategory = dataCategory;
    let productRelated = dataAllProduct.filter(product => {
        return product.category == defineCategory;
    });
    return(
        <>
            <div className="section__inner">
                <SectionTitle
                    dataSubtitle="our recommendation"
                    dataTitle="Related Products"
                    dataAddClass="blocktitle__left"
                />
                <Swiper
                    grabCursor={true}
                    effect={'creative'}
                    spaceBetween={30}
                    pagination={{clickable: true}}
                    modules={[Pagination,Autoplay]}
                    autoplay={{
                        delay: 3000
                    }}
                    className="pagination__indent-top"
                    breakpoints={{
                        320: {
                            slidesPerView: 2,
                            spaceBetween:15
                        },
                        575: {
                            slidesPerView: 3,
                            spaceBetween:30
                        },
                        1025: {
                            slidesPerView: 4
                        }
                    }}
                >
                    {productRelated.map((item) => (
                        <SwiperSlide key={item._id}>
                            <Product
                                key={item._id}
                                data={item}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}
export default RelatedProducts;
