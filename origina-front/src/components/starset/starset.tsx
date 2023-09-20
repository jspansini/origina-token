import Link from 'next/link';
import styles from './starset.module.css'
import utilStyles from '@/styles/utils.module.css'
import Layout from '@/components/layout/layout'
import Image from 'next/image'

export default function StarSet(
{
    amount =  0,
}: {
    amount?: number,
}) {
    let imgSrc1 = amount >= 1 ? "/images/icons/starLit.svg" : "/images/icons/star.svg";
    let imgSrc2 = amount >= 2 ? "/images/icons/starLit.svg" : "/images/icons/star.svg";
    let imgSrc3 = amount >= 3 ? "/images/icons/starLit.svg" : "/images/icons/star.svg";
    let imgSrc4 = amount >= 4 ? "/images/icons/starLit.svg" : "/images/icons/star.svg";
    let imgSrc5 = amount === 5 ? "/images/icons/starLit.svg" : "/images/icons/star.svg";

    return (
        <div className={styles.card}>
            <Image
                src={imgSrc1}
                alt=""
                className={styles.star}
                width={20}
                height={20}
                />
            <Image
                src={imgSrc2}
                alt=""
                className={styles.star}
                width={20}
                height={20}
                />
            <Image
                src={imgSrc3}
                alt=""
                className={styles.star}
                width={20}
                height={20}
                />
            <Image
                src={imgSrc4}
                alt=""
                className={styles.star}
                width={20}
                height={20}
                />
            <Image
                src={imgSrc5}
                alt=""
                className={styles.star}
                width={20}
                height={20}
            />
        </div>
    );
}