import Link from 'next/link';
import styles from './badge.module.css'
import utilStyles from '@/styles/utils.module.css'
import Layout from '@/components/layout/layout'
import Image from 'next/image'

export default function Badges(
{
    badge1 = false,
    badge2 = false,
    badge3 = false,
    badge4 = false,
    badge5 = false,
}: {
    badge1?: boolean,
    badge2?: boolean,
    badge3?: boolean,
    badge4?: boolean,
    badge5?: boolean,
}) {
    let imgSrc1 = badge1 == true ? "" : styles.grayscale;
    let imgSrc2 = badge2 == true ? "" : styles.grayscale;
    let imgSrc3 = badge3 == true ? "" : styles.grayscale;
    let imgSrc4 = badge4 == true ? "" : styles.grayscale;
    let imgSrc5 = badge5 == true ? "" : styles.grayscale;

    return (
        <div className={styles.card}>
            <Image
                src="/images/badges/badge1.svg"
                alt=""
                className={imgSrc1}
                width={28}
                height={28}
                />
            <Image
                src="/images/badges/badge1.svg"
                alt=""
                className={imgSrc2}
                width={28}
                height={28}
                />
            <Image
                src="/images/badges/badge1.svg"
                alt=""
                className={imgSrc3}
                width={28}
                height={28}
                />
            <Image
                src="/images/badges/badge1.svg"
                alt=""
                className={imgSrc4}
                width={28}
                height={28}
                />
            <Image
                src="/images/badges/badge1.svg"
                alt=""
                className={imgSrc5}
                width={28}
                height={28}
            />
        </div>
    );
}