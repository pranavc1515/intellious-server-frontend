'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { useSearchParams } from 'next/navigation'

const services = [
    {
        "id": "oss-bss",
        "title": "OSS & BSS Solutions",
        "description": "Comprehensive Operations Support Systems (OSS) and Business Support Systems (BSS) solutions to streamline your telecommunications and IT operations.",
        "tags": ["Telecom", "Operations", "Business", "Integration"],
        "overview": [
            "Our advanced expertise empowers service providers to remain at the forefront of the technology curve and create solutions that streamline operations to meet the ever-evolving demands of their customers.",
            "Our tailor-made solutions empower telecommunication companies, WiFi service providers, satellite radios, electric utilities, cable companies, and smart city municipalities with a client-centric model for service differentiation and rapid deployment of new services."
        ],
        "capabilities": [
            "Product innovations",
            "Oracle Billing and Revenue Management (Oracle BRM)",
            "Enterprise application and service delivery"
        ],
        "benefits": [
            "Automated service provisioning and activation",
            "Integrated customer management and billing",
            "Real-time performance monitoring",
            "Enhanced operational efficiency",
            "Improved customer satisfaction",
            "Reduced operational costs"
        ],
        "services": [
            "Gain access to Intellious’s premium billing consulting services that offer end-to-end flexible functional options, such as subscriptions, customer management, converged billing, rating, discounting, invoicing, revenue assurance, and analytics.",
            "With Intellious, you can ensure seamless operations, enhanced customer satisfaction, and greater revenue opportunities."
        ],
        "metrics": [
            { "name": "System Integration", "percentage": 95 },
            { "name": "Process Automation", "percentage": 88 }
        ],
        "images": [
            "/assets/img/service/project-slide2.jpg",
            "/assets/img/service/project-slide2.jpg"
        ],
        "headerImage": "/assets/img/service/project-slide2.jpg"
    },

    {
        "id": "salesforce",
        "title": "Salesforce Development",
        "description": "Custom Salesforce solutions to enhance your customer relationship management and business processes.",
        "tags": ["CRM", "Cloud", "Automation", "Integration"],
        "overview": [
            "Our team is passionate about empowering organizations with the best Salesforce solutions to help them fulfill their business goals.",
            "We are dedicated to delivering top-notch CRM solutions that maximize the value of your implementation and drive sustainable growth.",
            "Our consulting services cover the entire Salesforce platform, and we provide a phased roadmap to help you achieve your objectives seamlessly."
        ],
        "capabilities": [
            "Service Cloud",
            "Sales Cloud",
            "Marketing Cloud"
        ],
        "benefits": [
            "Customized CRM solutions",
            "Automated workflow processes",
            "Enhanced data visibility",
            "Improved team collaboration",
            "Scalable architecture",
            "Seamless third-party integration"
        ],
        "metrics": [
            { "name": "Custom Development", "percentage": 92 },
            { "name": "Platform Integration", "percentage": 94 }
        ],
        "images": [
            "/assets/img/service/salesforce/img1-min.jpg",
            "/assets/img/service/salesforce/img2-min.jpg",
            "/assets/img/service/salesforce/img3-min.jpg",
            "/assets/img/service/salesforce/img4-min.jpg",
            "/assets/img/service/salesforce/img5-min.jpg",
            "/assets/img/service/salesforce/img7-min.jpg",

        ],
        "headerImage": "/assets/img/service/salesforce/team-developers-doing-brainstorming-optimizing-code.jpg"
    },

    {
        "id": "multi-cloud",
        "title": "Multi Cloud Transformation",
        "description": "Strategic multi-cloud solutions to optimize your infrastructure and enhance business agility.",
        "tags": ["Cloud", "Migration", "DevOps", "Security"],
        "overview": [
            "In today’s fast-paced world, businesses must continuously evolve to stay ahead of the competition.",
            "Our Multi Cloud Services are designed to help you transform, modernize, and innovate.",
            "With the industry’s most comprehensive and integrated public cloud, including Software as a Service (SaaS), Platform as a Service (PaaS), and Infrastructure as a Service (IaaS), we aim to provide you with the necessary tools and support to take your business to the next level."
        ],
        "capabilities": [
            "Multi Cloud migration services",
            "T&M and Fully Managed DevOps consulting",
            "Application Modernization",
            "DevOps modernization"
        ],
        "benefits": [
            "Optimized cloud infrastructure",
            "Enhanced scalability",
            "Improved disaster recovery",
            "Cost optimization",
            "Better resource utilization",
            "Increased business agility"
        ],
        "metrics": [
            { "name": "Cloud Integration", "percentage": 96 },
            { "name": "Performance Optimization", "percentage": 90 }
        ],
        "images": [
            "/assets/img/service/project-slide2.jpg",
            "/assets/img/service/project-slide2.jpg"
        ],
        "headerImage": "/assets/img/service/project-slide2.jpg"
    },
    {
        "id": "blockchain",
        "title": "Blockchain Solutions",
        "description": "Innovative blockchain solutions to enhance security, transparency, and efficiency in your business operations.",
        "tags": ["Blockchain", "Smart Contracts", "DLT", "Security"],
        "overview": [
            "Your ultimate future tech of storing information is what Blockchain offers. Take advantage of the cryptocurrency system that gives security to your decentralized transaction records.",
            "Intellious’s Blockchain expertise promises trust and security for your data generation, without relying on a third-party solution."
        ],
        "capabilities": [
            "Enterprise Blockchain Solutions and Services",
            "NFT Marketplace",
            "Wallets And Exchange Applications",
            "Smart contracts"
        ],
        "benefits": [
            "Enhanced security and transparency",
            "Automated smart contracts",
            "Reduced operational costs",
            "Improved traceability",
            "Decentralized operations",
            "Immutable record keeping"
        ],
        "metrics": [
            { "name": "Smart Contracts", "percentage": 94 },
            { "name": "Security Implementation", "percentage": 98 }
        ],
        "images": [
            "/assets/img/service/blogchain/img1-min.jpg",
            "/assets/img/service/blogchain/img2-min.jpg",
            "/assets/img/service/blogchain/img3-min.jpg",
            "/assets/img/service/blogchain/img4-min.jpg",
            "/assets/img/service/blogchain/img5-min.jpg",
            "/assets/img/service/blogchain/img7-min.jpg",
            "/assets/img/service/blogchain/img8-min.jpg",
            "/assets/img/service/blogchain/img9-min.jpg",

        ],
        "headerImage": "/assets/img/service/blogchain/img6-min.jpg"
    }

]

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 0,
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
            slidesPerView: 1,
        },
        991: {
            slidesPerView: 1,
        },
        767: {
            slidesPerView: 1,
        },
        575: {
            slidesPerView: 1,
        },
        0: {
            slidesPerView: 1,
        },
    },
}

export default function ServiceDetails() {
    const searchParams = useSearchParams()
    const serviceId = searchParams.get('id') || 'oss-bss'
    const service = services.find(s => s.id === serviceId) || services[0]

    const currentIndex = services.findIndex(s => s.id === serviceId)
    const prevService = services[currentIndex - 1] || services[services.length - 1]
    const nextService = services[currentIndex + 1] || services[0]

    return (
        <>
            <Layout headerStyle={2} footerStyle={3} breadcrumbTitle="Services Details">
                <section className="Service-details pt-space pb-space">
                    <div className="container">
                        <div className="service-details-header bb-border pb-xxl-9 pb-xl-7 pb-6">
                            <div className="thumb w-100 mb-xxl-12 mb-xl-9 mb-sm-6 mb-5" data-aos="zoom-in" data-aos-duration={1500}>
                                <img
                                    src={service.headerImage}
                                    alt={service.title}
                                    className="w-100"
                                    style={{ height: '600px', objectFit: 'cover' }}
                                />
                            </div>

                            <h3 className="white-clr mb-xxl-9 mb-xl-7 mb-lg-6 mb-4" data-aos="zoom-in-left" data-aos-duration={1600}>
                                {service.title}
                            </h3>
                            <div className="d-flex flex-wrap align-items-center gap-xxl-5 gap-xl-3 gap-2" data-aos="zoom-in-left" data-aos-duration={1800}>
                                {service.tags.map((tag, index) => (
                                    <Link key={index} href="#" className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3 theme-clr">
                                        {tag}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="case-study-detials-inner mt-xxl-10 mt-xl-7 mt-6">
                            <h4 className="mb-xxl-7 mb-4 white-clr">
                                Service Overview
                            </h4>
                            <div className="d-flex flex-md-nowrap flex-wrap justify-content-between gap-xxl-15 gap-xl-10 gap-lg-7 gap-sm-5 gap-3 mb-xxl-9 mb-xl-8 mb-lg-7 mb-4">
                                {service.overview.map((paragraph, index) => (
                                    <p key={index} className={`pra-clr ${index === 0 ? 'challenge-pra1' : ''}}`}>
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                            <div className="finul-result">
                                <h4 className="mb-xxl-3 mb-2 white-clr">
                                    Benefits With Our Service
                                </h4>
                                <div className="d-md-flex flex-grid align-items-center gap-xxl-20 gap-xl-10 gap-lg-7 gap-md-6 gap-10">
                                    <div className="fiial-result-list mb-md-0 mb-4">
                                        <ul>
                                            {service.benefits.slice(0, Math.ceil(service.benefits.length / 2)).map((benefit, index) => (
                                                <li key={index}>{benefit}</li>
                                            ))}
                                        </ul>
                                        <ul>
                                            {service.benefits.slice(Math.ceil(service.benefits.length / 2)).map((benefit, index) => (
                                                <li key={index}>{benefit}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="result-progress-wrap">
                                        {service.metrics.map((metric, index) => (
                                            <div key={index} className={`progres-item ${index !== service.metrics.length - 1 ? 'mb-xxl-6 mb-xl-5 mb-4' : ''}}`}>
                                                <div className="d-flex align-items-center justify-content-between mb-xxl-5 mb-3">
                                                    <span className="conssub">
                                                        {metric.name}
                                                    </span>
                                                    <span className="cons">{metric.percentage}%</span>
                                                </div>
                                                <div className="progress-solving">
                                                    <div className="progress-bar" style={{ width: `${metric.percentage}%` }} />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper study-slidewrap py-xxl-15 py-xl-10 py-9">
                            <Swiper {...swiperOptions} className="swiper-wrapper">
                                {service.images.map((image, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="study-thumb-slide w-100">
                                            <img
                                                src={image}
                                                alt={`${service.title} slide ${index + 1}`}
                                                className="w-100"
                                                style={{ height: '700px', objectFit: 'cover' }}
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        <div className="slider-button d-flex align-items-center justify-content-between py-xxl-6 py-xl-5 py-4">
                            <div className="d-flex align-items-center gap-xxl-5 gap-3 gap-2">
                                <Link href={`/service-details?id=${prevService.id}`} className="d-flex align-items-center gap-3">
                                    <button className="cmn-prev cmn-border d-center" tabIndex={0}>
                                        <i className="fas fa-chevron-left" />
                                    </button>
                                    <span className="fw-bold white-clr previus-text text-capitalize">
                                        {prevService.title}
                                    </span>
                                </Link>
                            </div>
                            <h3 className="project-storke">
                                Services
                            </h3>
                            <div className="d-flex align-items-center gap-xxl-5 gap-3 gap-2">
                                <Link href={`/service-details?id=${nextService.id}`} className="d-flex align-items-center gap-3">
                                    <span className="fw-bold white-clr previus-text text-capitalize">
                                        {nextService.title}
                                    </span>
                                    <button className="cmn-next cmn-border d-center" tabIndex={0}>
                                        <i className="fas fa-chevron-right" />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}