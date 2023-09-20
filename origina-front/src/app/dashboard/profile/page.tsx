import Link from 'next/link';
import utilStyles from "@/styles/utils.module.css";
import styles from './page.module.css'
import Image from "next/image";
import Layout from '@/components/layout/layout'

export default function Profile() {
	const props: object = {
		propTopBar: {
			mode: 2,
			title: undefined,
			profile: false
		},
		propMain: {
			className: '',
			mode:1,
			icon: true
		},
		propMenu: {
			className: '',
			mode: 2
		}
	  };
	
	  return (
		  <Layout {...props}>
			<div className={styles.profileContainer}>
				<Image
				alt="news-icon"
				src="/images/icons/Maskgroup.svg"
				className={styles.icon}
				width={100}
				height={100}
				/>

				<h1 className={utilStyles.title}>Zé Antônio</h1>
				<hr className={styles.horline}/>
				<h1 className={utilStyles.subtitle}>Personal Information</h1>

				<form className={styles.profileForm}>
					<input className={styles.lineRow} type="text" id="fname" name="fname"></input>
					<input className={styles.lineRow} type="text" id="fname" name="fname"></input>
					<div className={`${styles.subfield} ${styles.lineRow}`}>
						<input type="text" id="fname" name="fname"></input>
						<input type="text" id="fname" name="fname"></input>
					</div>
					<input className={styles.lineRow} type="text" id="fname" name="fname"></input>
				</form>

				<h1 className={utilStyles.subtitle}>Additional Options</h1>

				<form className={styles.profileForm}>
					<input className={styles.lineRow} type="text" id="fname" name="fname"></input>
					<input className={styles.lineRow} type="text" id="fname" name="fname"></input>
					<div className={`${styles.subfield} ${styles.lineRow}`}>
						<input type="text" id="fname" name="fname"></input>
						<input type="text" id="fname" name="fname"></input>
					</div>
					<input className={styles.lineRow} type="text" id="fname" name="fname"></input>
				</form>
			</div>
		</Layout>
	)
}