import React from 'react'
import {MdHome,
MdSlowMotionVideo, 
MdSubscriptions,
MdVideoLibrary, 
MdOutlineHistory,
MdOutlineSmartDisplay,
MdOutlineWatchLater,
MdOutlineThumbUpOffAlt,
MdOutlineSettings,
MdOutlineFlag,
MdOutlineHelpOutline,
MdFeedback,
MdSportsSoccer,
} from 'react-icons/md'
import {TbMusic, TbDeviceGamepad2} from 'react-icons/tb'
import {FaRegCompass} from 'react-icons/fa'
import {GiFilmStrip, GiSoccerBall} from 'react-icons/gi'
const Sidebar = () => {

    const mainLinks =[
        {
            icons: <MdHome className='text-xl'/>,
            name: "Home"
        },
        {
            icons: <FaRegCompass className='text-xl'/>,
            name: "Explore"
        },
        {
            icons: <MdSlowMotionVideo className='text-xl'/>,
            name: "shorts"
        },
        {
            icons: <MdSubscriptions className='text-xl'/>,
            name: "Subscriptions"
        }
    ]
    const secondaryLinks=[
        {
            icons: <MdVideoLibrary className='text-xl'/>,
            name: "Libray"
        },
        {
            icons: <MdOutlineHistory className='text-xl'/>,
            name: "History"
        },
        {
            icons: <MdOutlineSmartDisplay className='text-xl'/>,
            name: "Your Videos"
        },
        {
            icons: <MdOutlineWatchLater className='text-xl'/>,
            name: "Watch Later"
        },
        {
            icons: <MdOutlineThumbUpOffAlt className='text-xl'/>,
            name: "Liked videos"
        }
    ]

    const subscriptionLinks =[
        {
            icons: <TbMusic className='text-xl'/>,
            name: "Music"
        }, 
        {
            icons: <MdSportsSoccer className='text-xl'/>,
            name: "Sport"
        },
        {
            icons: <TbDeviceGamepad2 className='text-xl'/>,
            name: "Gaming"
        },
        {
            icons: <GiFilmStrip className='text-xl'/>,
            name: "Films"
        }
    ]

    const helpLinks =[
        {
            icons: <MdOutlineSettings className='text-xl'/>,
            name: "Settings"
        },
        {
            icons: <MdOutlineFlag className='text-xl'/>,
            name: "Report History"
        },
        {
            icons: <MdOutlineHelpOutline className='text-xl'/>,
            name: "Help"
        },
        {
           icons: <MdFeedback className='text-xl'/>,
            name: "Send Feedback"
        },
        
    ]

    const textLinks =[
       [ "About",
        "Press",
        "CopyRight",
        "Contact Us",
        "Creator",
        "Advertise",
        "Developers",
      ],
      [
        "Terms",
        "Privacy",
        "Policy & Safety",
        "How YouTube works",
        "Test new features"
      ]
    ]
  return (
    <main className='sidebar'>
        <section>
            <ul className='main-links'>
                {mainLinks.map(({icons, name})=>{
                    return(
                        <li key={name} className={`${name === "Home" ? "text-red-600": ""} link-list`}>
                             <a href="#">
                                {icons}
                                <span>{name}</span>
                            </a>   
                        </li>
                    )
                })}
            </ul>
            <ul className='main-links'>
                {secondaryLinks.map(({icons, name})=>{
                    return(
                        <li key={name} className={`${name === "Home" ? "bg-slate-600": ""} link-list`}>
                             <a href="#" >
                                {icons}
                                <span>{name}</span>
                            </a>   
                        </li>
                    )
                })}
            </ul>
            <ul className='main-links'>
                {subscriptionLinks.map(({icons, name})=>{
                    return(
                        <li key={name} className={` ${name === "Home" ? "bg-slate-600": ""} link-list`}>
                             <a href="#">
                                {icons}
                                <span>{name}</span>
                            </a>   
                        </li>
                    )
                })}
            </ul>
            <ul className='main-links'>
                {helpLinks.map(({icons, name})=>{
                    return(
                        <li key={name} className={`${name === "Home" ? "bg-slate-600": ""} link-list`}>
                             <a href="#">
                                {icons}
                                <span>{name}</span>
                            </a>   
                        </li>
                    )
                })}
            </ul>
            <ul className='main-links'>
                {textLinks[0].map((name)=>{
                    return (
                        <li key={name}>
                            {name}
                        </li>
                    )
                })}
            </ul>
            <ul className='main-links'>
                {textLinks[1].map((name)=>{
                    return (
                        <li key={name}>
                            {name}
                        </li>
                    )
                })}
            </ul>
            <footer>
                <span className='footer-span'>&copy; 2022 Google</span>
                <br/>
                <p className="footer-paragraph">
                    This clone was made on Dec. 21 2022, for education purpose only
                </p>
            </footer>
        </section>
    </main>
  )
}

export default Sidebar