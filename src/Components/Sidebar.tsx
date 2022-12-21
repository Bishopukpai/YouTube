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
    <main className='w-2/12 bg-[#ffffff] pr-5 overflow-auto pb-8 sidebar'>
        <section>
            <ul className='flex flex-col border-b-2 bg-[#ffffff]'>
                {mainLinks.map(({icons, name})=>{
                    return(
                        <li key={name} className={`pl-6 px-3 py-4 hover:bg-zinc-600 ${name === "Home" ? "bg-slate-600": ""}`}>
                             <a href="#" className='flex items-center gap-5 '>
                                {icons}
                                <span className='text-sm tracking-wider'>{name}</span>
                            </a>   
                        </li>
                    )
                })}
            </ul>
            <ul className='flex flex-col border-b-2 bg-[#ffffff]'>
                {secondaryLinks.map(({icons, name})=>{
                    return(
                        <li key={name} className={`pl-6 px-3 py-4 hover:bg-zinc-600 ${name === "Home" ? "bg-slate-600": ""}`}>
                             <a href="#" className='flex items-center gap-5 '>
                                {icons}
                                <span className='text-sm tracking-wider'>{name}</span>
                            </a>   
                        </li>
                    )
                })}
            </ul>
            <ul className='flex flex-col border-b-2 bg-[#ffffff]'>
                {subscriptionLinks.map(({icons, name})=>{
                    return(
                        <li key={name} className={`pl-6 px-3 py-4 hover:bg-zinc-600 ${name === "Home" ? "bg-slate-600": ""}`}>
                             <a href="#" className='flex items-center gap-5 '>
                                {icons}
                                <span className='text-sm tracking-wider'>{name}</span>
                            </a>   
                        </li>
                    )
                })}
            </ul>
            <ul className='flex flex-col border-b-2 bg-[#ffffff]'>
                {helpLinks.map(({icons, name})=>{
                    return(
                        <li key={name} className={`pl-6 px-3 py-4 hover:bg-zinc-600 ${name === "Home" ? "bg-slate-600": ""}`}>
                             <a href="#" className='flex items-center gap-5 '>
                                {icons}
                                <span className='text-sm tracking-wider'>{name}</span>
                            </a>   
                        </li>
                    )
                })}
            </ul>
            <ul className='flex gap-2 flex-wrap text-sm p-4 text-zinc-400'>
                {textLinks[0].map((name)=>{
                    return (
                        <li key={name}>
                            {name}
                        </li>
                    )
                })}
            </ul>
            <ul className='flex gap-2 flex-wrap text-sm p-4 text-zinc-400'>
                {textLinks[1].map((name)=>{
                    return (
                        <li key={name}>
                            {name}
                        </li>
                    )
                })}
            </ul>
            <span className='px-4 text-sm text-zinc-400 '>&copy; 2022 Google</span>
            <br/>
            <p className="px-4 pt-3 text-sm text--zinc-400">
                This clone was made on Dec. 21 2022, for education purpose only
            </p>
        </section>
    </main>
  )
}

export default Sidebar