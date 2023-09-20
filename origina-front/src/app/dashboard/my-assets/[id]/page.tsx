import Link from 'next/link';
import styles from './page.module.css'
import utilStyles from '@/styles/utils.module.css'
import Layout from '@/components/layout/layout'
import { Metadata } from 'next'
import Image from 'next/image'
import AssetCardBig from '@/components/assetcard/assetcardbig';


export const metadata: Metadata = {
	title: 'Buy Asset - OriginaToken'
}

export default function AvailableArea() {
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
		</Layout>
	)
}