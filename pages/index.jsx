// import Head from 'next/head'
// import Image from 'next/image'
// import '../styles/style.css'
import Header from './../components/home/header';
import Body from '../components/home/Body';
import Footer from './../components/home/footer';

export default function Home() {
  return (
    <div >

      
      <section className="home">
        <Header/>
        <Body/>
        <Footer/>
       
      </section>
    </div>
  )
}
