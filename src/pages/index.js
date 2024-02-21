// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Profile from './components/profile'
import Form from "@/pages/qcomps/stuckForm";
import FeedbackForm from "@/pages/qcomps/thankYouCrash";
import List from "@/pages/qcomps/artistsRemoveArr";
import BucketList from "@/pages/qcomps/arrObj";

export default function Home() {
  return (
    <div className={styles.main}>
        <BucketList />
    </div>
  )
}
