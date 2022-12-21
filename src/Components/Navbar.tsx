import React from 'react'
import react from '../assets/react.svg'
import {AiOutlineSearch, AiOutlineClose, AiOutlineYoutube, AiOutlineBell} from 'react-icons/ai'
import {BsBell, BsCameraVideo, BsFillCameraVideoFill, BsYoutube} from 'react-icons/bs'
import {BiMicrophone, } from 'react-icons/bi'
import {GiHamburgerMenu} from 'react-icons/gi'
import { IoAppsSharp } from 'react-icons/io5'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <main className='nav-bar'>
        <section className='navbar-link-item'>
            <article>
                <GiHamburgerMenu />
            </article>

            <Link to="/search">
                <article className='YouTube-icon'>
                    <BsYoutube className='youtube-logo'/>
                    <span>YouTube</span>
                </article>
            </Link>
        </section>

        <section className='search-form'>
            <form action="">
                <section className='bg-zinc-900 search-field'>
                    <section className='search-icon'>
                        <article>
                            <AiOutlineSearch className='search-icon' />
                        </article>
                        <input type="text"  className=' bg-zinc-900 input-field'/>
                        <AiOutlineClose className='close'/>
                    </section>
                    <button className='search-button'>
                        <AiOutlineSearch className='search' />
                    </button>
                </section>
            </form>

            <section className='text-xl p-3 bg-zinc-900 rounded-full'>
                <BiMicrophone />
            </section>
        </section>
        <section className='flex gap-5 items-center text-xl '>
            <BsCameraVideo />
            <IoAppsSharp />
            <section className='relative'>
                <BsBell />
                <span className='absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1'>
                    9+
                </span>
            </section>
            <img src={react} className="w-9 h-9 rounded-full"/>
        </section>
    </main>
  )
}

export default Navbar