import Link from 'next/link';
import styles from './page.module.css'
import utilStyles from '@/styles/utils.module.css'
import Layout from '@/components/layout/layout'
import getBuyAssets from '@/lib/getassets';
import { Metadata } from 'next'
import Image from 'next/image'
import AssetCard from '@/components/assetcard/assetcard';

export const metadata: Metadata = {
	title: 'Marketplace - OriginaToken'
}

export default function Marketplace() {
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
	const allAssets = getBuyAssets().assets;
	return (
		<Layout {...props}>
			<div className={utilStyles.iconedTitle}>
				<Image
					src="/images/icons/iconAvailableAreas.svg"
					alt=""
					width={34}
					height={34}
				/>
				<h1 className={utilStyles.subtitle}>Available Properties</h1>

			</div>
			<ul className={styles.assetContainer}>
				{allAssets.map((asset: any, id: any) => (
					<Link className={styles.assetLink} href={`/dashboard/marketplace/${allAssets.name}`} key={0}>
						<li key={1}>
							<AssetCard
								value = {asset.value}
								imgUrl = {asset.imgUrl}
								btnStr = "Buy"
								description = {asset.description}
							/>
						</li>
					</Link>
				))}
			</ul>
		</Layout>
	)
}