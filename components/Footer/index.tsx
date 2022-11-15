import Image from 'next/image';

import styles from './footer.module.scss'

const Footer = () => {
    return (
        <>
            <footer className={styles.footer}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 mb-4">
                            <Image alt="logo" src="/images/logo.png" width={150} height={30} />
                        </div>

                        <div className="col-md-2 mb-4">
                            <h5>Explore</h5>
                            <ul>
                                <li><a href="#">Explore</a></li>
                                <li><a href="#">Leaderboad</a></li>
                                <li><a href="#">FAQ</a></li>
                            </ul>
                        </div>
                        <div className="col-md-2">
                            <h5>Learn More</h5>
                            <ul>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms of Service</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </div>

                        <div className="col-12">
                            <div className={styles.copyright}>
                                <p>© 2022 Afriguild</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
};

export default Footer