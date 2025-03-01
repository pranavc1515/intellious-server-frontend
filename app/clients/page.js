
'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
    speed: 1500,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".cmn-prev",
        prevEl: ".cmn-next",
    },
    breakpoints: {
        1199: {
            slidesPerView: 5,
        },
        991: {
            slidesPerView: 4,
        },
        767: {
            slidesPerView: 3,
        },
        575: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
        },
    },
}

export default function Home() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={4} breadcrumbTitle="Clients">
                <div className="position-relative overflow-hidden">
                    <div className="line-shape cus-z-1 first w-100 h-100 d-flex flex-wrap" />

                    <div className="container mb-20">
                        <div className="footer-client mb-20 mb-10">
                            <h5 className="trusted white">
                                Our prominent clients are
                            </h5>
                            <div className="swiper trusted-inner">
                                <Swiper {...swiperOptions} className="swiper-wrapper">
                                    <SwiperSlide>
                                        <Link href="/javascript:void(0)">
                                            <img src="/assets/img/client/14.png" alt="img" />
                                        </Link>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Link href="/javascript:void(0)">
                                            <img src="/assets/img/client/c2.png" alt="img" />
                                        </Link>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Link href="/javascript:void(0)">
                                            <img src="/assets/img/client/c3.png" alt="img" />
                                        </Link>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Link href="/javascript:void(0)">
                                            <img src="/assets/img/client/c4.png" alt="img" />
                                        </Link>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Link href="/javascript:void(0)">
                                            <span className="bg-white">
                                                <img src="/assets/img/client/intm-logo-wide.svg" alt="img" />
                                            </span>

                                        </Link>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <Link href="/javascript:void(0)">
                                            <img src="/assets/img/client/c2.png" alt="img" />
                                        </Link>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Link href="/javascript:void(0)">
                                            <img src="/assets/img/client/c3.png" alt="img" />
                                        </Link>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Link href="/javascript:void(0)">
                                            <img src="/assets/img/client/c4.png" alt="img" />
                                        </Link>
                                    </SwiperSlide>

                                </Swiper>
                            </div>
                        </div>
                        <div className="footer-client mb-20">
                            <h5 className="trusted white">
                                Partners with us
                            </h5>
                            <div className="swiper trusted-inner">
                                <Swiper {...swiperOptions} className="swiper-wrapper">
                                    <SwiperSlide>
                                        <Link href="/javascript:void(0)">
                                            <img src="/assets/img/client/salesforce-with-type-logo.svg" alt="img" />
                                        </Link>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Link href="/javascript:void(0)">
                                            <img src="/assets/img/client/WhatsApp-Image-2024-11-26-at-15.34.05.jpeg" alt="img" />
                                        </Link>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Link href="/javascript:void(0)">
                                            <img src="/assets/img/client/11.png" alt="img" />
                                        </Link>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Link href="/javascript:void(0)">
                                            <span className="bg-white">
                                                <img src="/assets/img/client/Cyient-logo.webp" alt="img" />
                                            </span>

                                        </Link>
                                    </SwiperSlide>

                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}