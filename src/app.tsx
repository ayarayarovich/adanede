import {FC, useEffect, useState} from 'react'
import {Navigate, NavLink, Outlet, Route, Routes, useLocation, useMatch} from "react-router-dom"
import {AnimatePresence, motion} from "framer-motion"
import '@styles/app.css'

import Main from '@pages/main.tsx'
import About from '@pages/about.tsx'
import Whitepaper from '@pages/whitepaper.tsx'
import Plan from '@pages/plan.tsx'
import Vision from '@pages/vision.tsx'
import Contacts from "@pages/contacts.tsx"
import Projects from "@pages/projects.tsx"
import Stats from "@pages/stats.tsx";
import {useDocumentTitle, useUpdateEffect} from "@utils/hooks.ts";


const DropdownNavLink: FC<{route: string, label: string}> = ({route, label}) => {
    const match = useMatch(route + '/*')

    const navlinkUpdateClass = (props: {isActive: boolean}) => `navigation__link ${props.isActive ? 'navigation__link--active' : 'navigation__link--inactive'}`

    return (
        <span className={`relative`}>
            <NavLink key='page--investors' className={navlinkUpdateClass} to='/investors'>Investor's</NavLink>
            {!!match &&
                <div className={`flex absolute -right-6 top-1/2 -translate-y-1/2 translate-x-full flex-col items-start`}>
                    <NavLink key='page--investors-plan' className={navlinkUpdateClass} to={`${route}/plan`}>Plan</NavLink>
                    <NavLink key='page--investors-vision' className={navlinkUpdateClass} to={`${route}/vision`}>Vision</NavLink>
                    <NavLink key='page--investors-stats' className={navlinkUpdateClass} to={`${route}/stats`}>Stats</NavLink>
                </div>
            }
        </span>
    )
}

const Layout: FC = () => {
    const title = useDocumentTitle()
    const [isMobileNavigationOpen, setIsMobileNavigationOpen] = useState(false)
    const [showInvestorsDropdown, setShowInvestorsDropdown] = useState(false)
    const pathname = useLocation()
    const isRootRoute = useMatch("/")

    useUpdateEffect(() => {
        // Hide mobile navigation when used navigation links
        setIsMobileNavigationOpen(false)
        setShowInvestorsDropdown(false)
    }, [pathname])

    useEffect(() => {
        document.body.style.overflowY = isMobileNavigationOpen ? 'hidden' : 'auto'
    }, [isMobileNavigationOpen])

    const navlinkUpdateClass = (props: {isActive: boolean}) => `navigation__link ${props.isActive ? 'navigation__link--active' : 'navigation__link--inactive'}`

    return (
        <main className='app relative min-h-[100dvh] flex flex-col'>

            {/*Desktop top bar*/}
            <div className="hidden lg:block px-4 lg:px-8 pt-12 pb-4 text-center">
                <NavLink to='/'>
                    <span>
                        <img src="/logo.svg" alt="adanede logo" className="h-11 w-auto inline-block"/>
                        <h1 className='uppercase mt-2'>Adanede</h1>
                    </span>
                </NavLink>
            </div>

            {/*Mobile top bar*/}
            <div className={`lg:hidden p-8 flex items-end ${isRootRoute ? 'justify-center' : 'justify-between'} text-center`}>
                {!isRootRoute &&
                    <motion.a initial={{opacity: 0, x: -16}} animate={{opacity: 1, x: 0}} exit={{opacity: 0}} className='text-3xl border-b-2 border-black uppercase' onClick={() => setIsMobileNavigationOpen(true)}>{title}</motion.a>
                }
                <a onClick={() => setIsMobileNavigationOpen(true)}>
                    <span>
                        <img src="/logo.svg" alt="adanede logo" className="h-16 w-auto inline-block"/>
                        {isRootRoute && <motion.h1 className='text-xl uppercase mt-4'>Adanede</motion.h1>}
                    </span>
                </a>
            </div>

            {/*Mobile navigation*/}
            {
                isMobileNavigationOpen &&
                <motion.div initial={{y: 64, opacity: 0}} animate={{y: 0, opacity: 1}} className={`bg-[#DEDED8] lg:hidden fixed z-10 h-[100dvh] w-full top-0 left-0`}>
                    <div className='text-center mt-8'>
                        <NavLink to='/'>
                    <span>
                        <img src="/logo.svg" alt="adanede logo" className="h-16 w-auto inline-block"/>
                        <h1 className='text-xl uppercase mt-4'>Adanede</h1>
                    </span>
                        </NavLink>
                    </div>

                    <div className='flex flex-col mt-20 mx-12'>
                        <NavLink key='page--about' className={`text-4xl opacity-100 ${navlinkUpdateClass({isActive: false})}`} to='/about'>About</NavLink>
                        <NavLink key='page--projects' className={`text-4xl opacity-100 ${navlinkUpdateClass({isActive: false})}`} to='/projects'>Projects</NavLink>
                        <NavLink key='page--whitepaper' className={`text-4xl opacity-100 ${navlinkUpdateClass({isActive: false})}`} to='/whitepaper'>Whitepaper</NavLink>
                        <span key='page--investors' className={`text-4xl opacity-100 ${navlinkUpdateClass({isActive: false})}`} onClick={() => setShowInvestorsDropdown((prev) => !prev)}>Investor's</span>
                        {showInvestorsDropdown && <motion.div initial={{y: -32, opacity: 0}} animate={{y: 0, opacity: 1}} className='flex flex-col ml-8'>
                            <NavLink key='page--investors-plan' className={`text-2xl opacity-100 my-1 ${navlinkUpdateClass({isActive: false})}`} to={`investors/plan`}>- Plan</NavLink>
                            <NavLink key='page--investors-vision' className={`text-2xl opacity-100 my-1 ${navlinkUpdateClass({isActive: false})}`} to={`investors/vision`}>- Vision</NavLink>
                            <NavLink key='page--investors-stats' className={`text-2xl opacity-100 my-1 ${navlinkUpdateClass({isActive: false})}`} to={`investors/stats`}>- Stats</NavLink>
                        </motion.div>}
                        <NavLink key='page--contacts' className={`text-4xl opacity-100 ${navlinkUpdateClass({isActive: false})}`} to='/contacts'>Contacts</NavLink>
                    </div>
                </motion.div>
            }

            <div className="flex-grow p-8 sm:px-16 sm:py-8 grid grid-rows-1 grid-cols-12 gap-5">
                <div className="hidden lg:col-span-2 lg:flex lg:flex-col lg:justify-center lg:gap-8 lg:items-end">
                    <NavLink key='page--about' className={navlinkUpdateClass} to='/about'>About</NavLink>
                    <NavLink key='page--projects' className={navlinkUpdateClass} to='/projects'>Projects</NavLink>
                    <NavLink key='page--whitepaper' className={navlinkUpdateClass} to='/whitepaper'>Whitepaper</NavLink>
                    <DropdownNavLink route='/investors' label="Investor's"/>
                    <NavLink key='page--contacts' className={navlinkUpdateClass} to='/contacts'>Contacts</NavLink>
                </div>
                <Outlet/>
            </div>

            <span className='lg:hidden absolute bottom-4 left-0 right-0 text-center uppercase mt-2 opacity-70' onClick={() => setIsMobileNavigationOpen(true)}>Adanede</span>
        </main>
    )
};


const App: FC = () => {
    const location = useLocation()


    return (
        <AnimatePresence mode='wait' initial={false}>
            <Routes key={location.pathname} location={location}>
                <Route path='/' element={<Layout/>}>
                    <Route path='/' element={<Main/>}/>
                    <Route path='about' element={<About/>}/>
                    <Route path='projects' element={<Projects/>}/>
                    <Route path='whitepaper' element={<Whitepaper/>}/>
                    <Route path='investors' element={<Navigate to='/investors/vision'/>}/>
                    <Route path='investors/plan' element={<Plan/>}/>
                    <Route path='investors/vision' element={<Vision/>}/>
                    <Route path='investors/stats' element={<Stats/>}/>
                    <Route path='contacts' element={<Contacts/>}/>
                </Route>
            </Routes>
        </AnimatePresence>
    )
}


export default App
