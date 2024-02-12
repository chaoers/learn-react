// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Profile from './components/profile'
import PackingList from "@/pages/qcomps/props_item";
import RecipeList from "@/pages/qcomps/recipes";
import MenuBar from "@/pages/qcomps/menuBar";


export default function Home() {
  return (
    <MenuBar/>
  )
}
