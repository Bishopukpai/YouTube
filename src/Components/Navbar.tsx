import React from 'react'
import react from '../assets/react.svg'
import {AiOutlineSearch, AiOutlineClose} from 'react-icons/ai'
import {BsBell, BsCameraVideo, BsYoutube} from 'react-icons/bs'
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
                <section className='search-field'>
                    <section className='search-icon'>
                        <article>
                            <AiOutlineSearch className='search-icon' />
                        </article>
                        <input type="text"  className='input-field'/>
                        <AiOutlineClose className='close-icon'/>
                    </section>
                    <button className='search-button'>
                        <AiOutlineSearch className='search' />
                    </button>
                </section>
            </form>

            <section className='microphone'>
                <BiMicrophone />
            </section>
        </section>
        <section className='camera-notification'>
            <BsCameraVideo />
            <IoAppsSharp />
            <section className='relative'>
                <BsBell />
                <span className='notifications'>
                    9+
                </span>
            </section>
            <img src={react}/>
        </section>
    </main>
  )
}

export default Navbar