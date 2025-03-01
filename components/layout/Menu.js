'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'; // Updated import

export default function Menu() {
    const [isAccordion, setIsAccordion] = useState(0)
    const router = useRouter();

    const handleAccordion = (key) => {
        if (key === 1) {
            router.push('/about');
        }
        if (key === 3) {
            router.push('/clients');
        } else {
            setIsAccordion(prevState => prevState === key ? null : key);
        }
    };

    return (
        <>
            <ul className="custom-nav d-lg-flex d-grid gap-xxl-10 gap-xl-8 gap-lg-5 gap-md-2 gap-2 pt-lg-0 pt-5">
                <li className="menu-item position-relative">
                    <Link href="/about" className="fw_500 white-clr">
                        About
                    </Link>
                </li>
                <li className="menu-item position-relative">
                    <button className="position-relative ps-5 fw_500 white-clr cus-z1" onClick={() => handleAccordion(2)}>
                        Services
                    </button>
                    <ul className="sub-menu px-lg-4 py-xxl-3 py-2" style={{ display: isAccordion === 2 ? "block" : "none" }}>
                        <li className="menu-link py-1">
                            <Link href="/service-details?id=oss-bss" className="fw_500 white-clr">
                                OSS &amp; BSS Solutions
                            </Link>
                        </li>
                        <li className="menu-link py-1">
                            <Link href="/service-details?id=salesforce" className="fw_500 white-clr">
                                Salesforce Development
                            </Link>
                        </li>
                        <li className="menu-link py-1">
                            <Link href="/service-details?id=multi-cloud" className="fw_500 white-clr">
                                Multi Cloud Transformation
                            </Link>
                        </li>
                        <li className="menu-link py-1">
                            <Link href="/service-details?id=blockchain" className="fw_500 white-clr">
                                Blockchain Solutions
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="menu-item position-relative">
                    <button className="position-relative ps-5 fw_500 white-clr cus-z1" onClick={() => handleAccordion(3)}>
                        Clients
                    </button>
                </li>
                <li className="menu-item position-relative">
                    <button className="position-relative ps-5 fw_500 white-clr cus-z1" onClick={() => handleAccordion(5)}>
                        Leadership
                    </button>
                </li>
                <li className="menu-item position-relative">
                    <Link href="/contact" className="fw_500">
                        Contact Us
                    </Link>
                </li>
            </ul>
        </>
    )
}
