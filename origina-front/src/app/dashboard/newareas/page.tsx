import Link from 'next/link';
import styles from './page.module.css'
import utilStyles from '@/styles/utils.module.css'
import Layout from '@/components/layout/layout'
import getSellAssets from '@/lib/getassets';
import { Metadata } from 'next'
import Image from 'next/image'
import NewAreaCard from '@/components/newareacard/newareacard';

export const metadata: Metadata = {
	title: 'New Areas - OriginaToken'
}

export default function MyProperties() {	
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
	const allAssets = getSellAssets().assets;
	return (
		<Layout {...props}>
			<div className={utilStyles.iconedTitle}>
				<Image
					src="/images/icons/newareasIcon.svg"
					alt=""
					width={20}
					height={20}
				/>
				<h2 className={utilStyles.subtitle}>New Areas</h2>
			</div>
			<NewAreaCard 
				value={150}
				stars={4}
				imgUrl=''
				owner='Zé Antônio'
				areaName='Campo Bom River'
				description='Verde Imperial'
				/>
			<NewAreaCard 
				value={120}
				stars={3}
				imgUrl=''
				owner='Zé Antônio'
				areaName='MinaSul Property'
				description='Verde Imperial'
				/>
			<NewAreaCard 
				value={80}
				stars={2}
				imgUrl=''
				owner='Zé Antônio'
				areaName='Farm Comunhão'
				description='Verde Imperial'
			/>
			<NewAreaCard 
				value={50}
				stars={5}
				imgUrl=''
				owner='Zé Antônio'
				areaName='Alto da Serra'
				description='Verde Imperial'
			/>
			<NewAreaCard 
				value={60}
				stars={3}
				imgUrl=''
				owner='Zé Antônio'
				areaName='Farm Esperança'
				description='Verde Imperial'
			/>
		</Layout>
	)
}