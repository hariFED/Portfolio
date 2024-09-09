import { DiMongodb } from "react-icons/di";
import { SiExpress, SiReact } from "react-icons/si";
import {  FaInstagram, FaNodeJs, FaWhatsapp } from "react-icons/fa";

import Luffy from './assets/luffy.png'

import Project from './components/Project';
import {  FaXTwitter } from "react-icons/fa6";




function App() {

  return (
    <>
      <div className="absolute top-0 z-[-2] lg:h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">

        <div className='text-white gap-2 container mx-auto text-xl font-bold lg:h-screen flex md:flex-row flex-col items-center font-rubik'>

          <div className='w-1/2 flex flex-col gap-5 mr-5'>
            <p className='text-3xl font-rubik font-bold tracking-wider'>Hello</p>
            <p className='text-8xl font-semibold font-honk relative'>I&apos;m Hari <span className='font-rubik text-xl'>you can call me hari<span className='text-4xl text-red-400 font-bold'>d</span>luffy</span> <span className='absolute bottom-4 ml-4 hover:scale-[10] hover:z-30 duration-1000'> <img src={Luffy} alt="" className='animate-spin  ' width={60} /> </span> </p>
            <p className='text-3xl flex  '>Chasing the Full stack dream with the
              <span className=' ml-2 flex gap-2  text-center items-center'>
                <DiMongodb className='text-green-400 animate-bounce' />

                <SiExpress className='text-slate-500 animate-bounce-3' />
                <SiReact className='text-[#00ffff] animate-bounce-2' />
                <FaNodeJs className=' text-green-600 animate-bounce-4' />
              </span>
            </p>
            <p className='text-3xl leading-10'>And while banks are busy charging me to keep my money cozy, Web3 is calling—time to let my money stretch its legs!</p>
            <div className="text-sm font-normal mt-20">
              If you ever get bored or feel like unraveling wild conspiracy theories or geeking out over tech, slide into my DMs on any of my socials—let’s stir the pot!
            </div>
            <div className="flex items-center justify-start gap-8 text-2xl">
              <a href="https://www.instagram.com/hariharan.dev/"><FaInstagram className=" text-pink-300" /></a>
              <a href="https://x.com/harixhilfiger"><FaXTwitter className="text-orange-400" /></a>
              <a href="https://wa.me/919791868671 "><FaWhatsapp className="text-violet-400" /></a>
            </div>
          </div>
          <hr className='w-1 h-4/5  bg-white   opacity-50 ' />
          <div className='w-1/2 '>
            <div className='ml-10'>
              <Project />
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default App
// https://github.com/hariFED/anodeweddings