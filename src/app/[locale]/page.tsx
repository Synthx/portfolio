import Pinpin from '@/src/assets/images/pinpin.jpeg';
import Anchor from '@/src/component/action/anchor';
import Image from 'next/image';
import styles from './home.module.scss';

export default function Home() {
    const socialLinks = [
        { name: 'Github', href: 'https://github.com/Synthx' },
        { name: 'Linkedin', href: 'https://www.linkedin.com/in/remitaniel/' },
        { name: 'Email', href: 'mailto:taniel.remi@gmail.com' },
    ];

    return (
        <section className={styles.home}>
            <div className={styles.homeHeadline}>
                <h2 className={styles.homeHeadlineHello}>
                    Hello <span>👋</span> I&#39;m
                </h2>
                <Image
                    className={styles.homeHeadlineImage}
                    width={400}
                    height={500}
                    placeholder="blur"
                    src={Pinpin}
                    alt="Pinpin"
                />
                <h1 className={styles.homeHeadlineName}>Remi Taniel</h1>
            </div>
            <div className={styles.homeHeadlineHeader}>
                <div className={styles.homeHeadlineHeaderWho}></div>
            </div>
            <div className={styles.homeContent}>
                <div className={styles.homeContentSocial}>
                    {socialLinks.map(({ name, href }) => (
                        <Anchor key={name} className={styles.homeContentSocialLink} href={href} external={true}>
                            {name}
                        </Anchor>
                    ))}
                </div>
                <p className={styles.homeContentWho}>
                    A code-shaping wizard 🧙‍♂️ who turns caffeine ☕ beers 🍻 chaos 🤯 into delightful digital experiences
                    ✨
                </p>
            </div>
        </section>
    );
}
