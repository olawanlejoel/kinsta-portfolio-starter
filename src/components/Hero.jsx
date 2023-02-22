import Image from "next/image"
import myImg from '../../public/images/profile.jpeg'

const Hero = () => {
    return (
        <div className="hero-container">
            <Image src={myImg} className="profile-img" width={300} height={300} />
            <div className="hero-text">
                <h1>Hey, I'm Joe 👋</h1>
                <p>
                    I'm a software developer based in Lagos, Nigeria. I specialize in building (and occasionally designing) exceptional websites, applications, and everything in between.
                </p>
                <div className="social-icons">
                    <a
                        href="https://twitter.com/olawanle_joel"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a
                        href="https://github.com/olawanlejoel"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/olawanlejoel/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero