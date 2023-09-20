import Link from 'next/link';
import styles from './infogrid.module.css'
import utilStyles from '@/styles/utils.module.css'

export default function Infogrid(
{
    property = "",
    municipality = "",
    cmb = 0,
    lat = 0,
    long = 0,
    token = "0",
    mode = 1
}: {
    property: string,
    municipality: string,
    cmb: number,
    lat: number,
    long: number,
    token: string,
    mode?: number
}) {
    const cssTop = mode === 0 ? styles.bg1 : styles.bg2;
    const cssBot = mode === 0 ? styles.bg2 : styles.bg1;
    return (
        <div className={styles.wrapper}>
            <h1 className={cssTop}>UF.</h1>
            <h1 className={cssTop}>MUNICIP.</h1>
            <h1 className={cssTop}>CMB</h1>
            <h1 className={cssTop}>LAT</h1>
            <h1 className={cssTop}>LONG</h1>
            <h1 className={cssTop}>TOKEN</h1>

            <h1 className={cssBot}>{property}</h1>
            <h1 className={cssBot}>{municipality}</h1>
            <h1 className={cssBot}>{cmb}</h1>
            <h1 className={cssBot}>{lat}º</h1>
            <h1 className={cssBot}>{long}º</h1>
            <h1 className={cssBot}>{token}</h1>
        </div>
    );
}