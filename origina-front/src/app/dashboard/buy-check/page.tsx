"use client"
// Standard Next Libs
import Image from 'next/image';

// Components
import Layout from '@/components/layout/layout';

// Styles
import styles from './page.module.css';
import utilStyles from '@/styles/utils.module.css';
import { useEffect, useState } from 'react';


// By Check Page
export default function BuyCheck() {
    
    const [time, set_time] = useState(0);

    const props: object = {
		propTopBar: {
			mode: 2,
			title: undefined,
            back: false,
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

    useEffect(() => {
        const redirectTimer = setTimeout(() => {
            window.location.href = '/dashboard/wallet';
        }, 3000);
    });

    return (
		<Layout {...props}>
            <div className={styles.container}>
                <Image
                    alt='token-success'
                    src='/images/tokenSuccess.png'
                    className={styles.img}
                    width={354}
                    height={210}
                />
            </div>

        </Layout>
    );
}