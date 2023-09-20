"use client"
import Link from 'next/link';
import styles from './page.module.css'
import utilStyles from '@/styles/utils.module.css'
import Layout from '@/components/layout/layout'
import { Metadata } from 'next'
import Image from 'next/image'
import Infogrid from '@/components/infogrid/infogrid';

export default function BuyConfirmation({params}: {params: any}) {
	const props: object = {
		propTopBar: {
			mode: 2,
			title: undefined
		},
		propMain: {
			className: '',
			mode: 1,
			icon: true
		},
		propMenu: {
			className: '',
			mode: 2
		}
	};

	return (
		<Layout {...props}>
				<div className={utilStyles.iconedTitle}>
				<Image
					src="/images/icons/iconFarm.svg"
					alt=""
					width={34}
					height={40}
        		/>
				<h2 className={utilStyles.subtitle}>FARM CATUÍ</h2>
			</div>
			<div className={styles.gridContainer}>
				<Infogrid
					property='BH-02'
					municipality='MG-CONT'
					cmb={148}
					lat={167}
					long={132}
					token='006'
					mode={0}
				/>
			</div>
			<div className={styles.buttonContainer}>
				<Link href="/dashboard/buy-check"><button className={`${utilStyles.button} ${styles.buttonspecs}`}>Confirm</button></Link>

				<button className={`${utilStyles.buttonCancel} ${styles.buttonspecs}`} onClick={() => router.back()}>Cancel</button>
			</div>
		</Layout>
	)
}