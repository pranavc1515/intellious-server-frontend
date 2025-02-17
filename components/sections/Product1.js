

export default function Product1() {
    return (
        <>

            <section className="about-product pt-space">
                <div className="container">
                    <div className="row g-xxl-7 g-5">
                        <div className="col-lg-6 col-md-6 col-sm-8">
                            <div className="about-product-thumb w-100" data-aos="zoom-in" data-aos-duration={2000}>
                                <img src="/assets/img/about/about-v1thumb.png" alt="img" className="w-100" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-product-content ps-xxl-10">
                                <div className="pricing-title">
                                    <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-7 mb-xl-6 mb-5" data-aos="fade-up-right" data-aos-duration={1500}>
                                        Welcome to Intellious
                                    </div>
                                    <h2 className="stitle mb-xxl-8 mb-xl-7 mb-xl-5 mb-4" data-aos="fade-up" data-aos-duration={1600}>
                                        Who<span className="fw-400 theme-clr">we are</span>
                                    </h2>
                                    <p
                                        className="white-clr mb-xxl-9 mb-xl-7 mb-xl-6 mb-6 leading-relaxed"
                                        data-aos="fade-up"
                                        data-aos-duration={1900}
                                    >
                                        We are a rapidly growing company that focuses on providing OSS/BSS (Operational Support Systems/Business Support Systems) solutions and building innovative products using open-source software.
                                        <br /><br />
                                        We use the collective experience of our domain experts in the areas of OSS/BSS, CRM, Multi Cloud Infrastructure (AWS, OCI & GCP), AI/ML, and Mobility to build scalable, high-performing, and world-class enterprise solutions that offer cost-effective and flexible options for companies looking to develop new IT solutions.
                                        <br /><br />
                                        Our main goal is to provide intelligent solutions that meet our client’s evolving business demands.
                                        <br /><br />
                                        We take pride in ensuring transparency by maintaining constant communication between team members and clients. Our focus is to exceed expectations, learn from our experiences, and move forward.
                                    </p>

                                    <div className="discover-dating" data-aos="fade-up" data-aos-duration={2200}>
                                        <div className="allyear d-flex align-items-center justify-content-between mb-xxl-4 mb-xl-3">
                                            <h5 className="fw-medium theme-clr">
                                                2019
                                            </h5>
                                            <h5 className="fw-medium theme-clr">
                                                2021
                                            </h5>
                                            <h5 className="fw-medium theme-clr">
                                                2023
                                            </h5>
                                        </div>
                                        <div className="allyear-content d-flex justify-content-between">
                                            <div className="allyear-item">
                                                <h5 className="white-clr mb-xxl-3 mb-2">
                                                    Awwwards
                                                </h5>
                                                <span className="spantext-clr">
                                                    Website of the day
                                                </span>
                                            </div>
                                            <div className="allyear-item">
                                                <h5 className="white-clr mb-xxl-3 mb-2">
                                                    Awwwards
                                                </h5>
                                                <span className="spantext-clr">
                                                    National design contest
                                                </span>
                                            </div>
                                            <div className="allyear-item">
                                                <h5 className="white-clr mb-xxl-3 mb-2">
                                                    Awwwards
                                                </h5>
                                                <span className="spantext-clr">
                                                    Apps of the day
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
