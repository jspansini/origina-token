import Link from 'next/link';
import styles from './newareacard.module.css'
import utilStyles from '@/styles/utils.module.css'
import Layout from '@/components/layout/layout'
import Image from 'next/image'
import StarSet from '../starset/starset';

export default function NewAreaCard(
{
    value =  0,
    stars = 0,
    imgUrl = "",
    areaName = "",
    owner = "",
    description = ""
}: {
    value?: number,
    stars?: number,
    imgUrl?: string,
    areaName?: string | undefined,
    owner?: string,
    description?: string
}) {
    return (
        <div className={styles.card}>
            <div className={styles.cardLeft}> {/*left side */}
                <div> {/*stars */}
                    <StarSet amount={stars}/>
                </div>
                <h3>{areaName}</h3>
                <div className={styles.cardOwner}> {/* Owner with img */}
                    <Image
                        src="/images/icons/profileIconWhite.svg"
                        alt=""
                        className={styles.ownerItemImg}
                        width={16}
                        height={16}
                    />
                    <h2>{owner}</h2>
                </div>
                <h2 id={styles.cardDescription}>{description}</h2>
            </div>
            <div className={styles.cardRight}> {/*right side */}
                <div className={utilStyles.iconedTitle}>
                    <Image 
                        src="/images/topBar/originaLogo1.svg"
                        width={30}
                        height={32}
                        alt="asset"
                    />
                    <h3>{value}</h3>
                </div>
            </div>
            {/* <Image 
                src="/images/temp_assets/image5.svg"
                width={316}
                height={44}
                className={}
                alt="asset"
            /> */}
            <div className={styles.background}></div>
        </div>
    );
}