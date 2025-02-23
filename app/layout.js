import "/public/assets/css/bootstrap.min.css"
import "/public/assets/css/all.min.css"
import "/public/assets/css/magnific-popup.css"
import "/public/assets/css/nice-select.css"
import "/public/assets/css/swiper.min.css"
import "/public/assets/css/aos.css"
import "/public/assets/css/main.css"
import { Manrope, Plus_Jakarta_Sans } from 'next/font/google'

const manrope = Manrope({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    variable: "--manrope",
    display: 'swap',
})
const jakarta = Plus_Jakarta_Sans({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    variable: "--jakarta",
    display: 'swap',
})
export const metadata = {
    title: 'Intellious - CollaborativeIntelligence',
    description: 'At Intellious, we believe that every business challenge is an opportunity to innovate and grow. We strive to provide comprehensive OSS/BSS solutions that not only meet your needs but exceed your expectations. Our commitment to high-quality deliverables and efficient timelines reflects our passion for excellence. From ideation to deployment, we are dedicated to providing innovative technology services that drive your success.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${manrope.variable} ${jakarta.variable} position-relative bg2-clr`}>{children}</body>
        </html>
    )
}
