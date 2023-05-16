import {FC, useCallback, useEffect} from 'react'
import {Navigate, NavLink, Outlet, Route, Routes, useLocation} from "react-router-dom"
import {AnimatePresence, useAnimate, motion} from "framer-motion"
import '@styles/app.css'

import A from '@assets/logo-parts/a.svg'
import D from '@assets/logo-parts/d.svg'
import N from '@assets/logo-parts/n.svg'
import E from '@assets/logo-parts/e.svg'

import Main from '@pages/main.tsx'
import About from '@pages/about.tsx'
import Whitepaper from '@pages/whitepaper.tsx'
import Plan from '@pages/plan.tsx'
import Vision from '@pages/vision.tsx'
import Contacts from "@pages/contacts.tsx"
import Projects from "@pages/projects.tsx"
import Stats from "@pages/stats.tsx";

const FirstVisitScene: FC = () => {
    const [scope, animate] = useAnimate()

    useEffect(() => {

    }, [])

    return (
        <div className='first-visit-scene' ref={scope}>
            <div className="characters">
                <img src={A} alt="A"/>
                <img src={D} alt="D"/>
                <img src={A} alt="A"/>
                <img src={N} alt="N"/>
                <img src={E} alt="E"/>
                <img src={D} alt="D"/>
                <img src={E} alt="E"/>
            </div>
            <p>
                huetnashuae
            </p>
        </div>
    )
}

const Layout: FC = () => {
    const navlinkUpdateClass = useCallback((props: {isActive: boolean, isPending: boolean}) => {
        return `navigation__link ${props.isActive ? 'navigation__link--active' : 'navigation__link--inactive'}`
    }, [])

    return (
        <main className='app relative min-h-[100dvh] flex flex-col'>
            <div className="lg:container lg:mx-auto px-4 lg:px-8 pt-12 pb-4 text-center">
                <NavLink to='/'>
                    <span>
                        <img src="/logo.svg" alt="adanede logo" className="h-11 w-auto inline-block"/>
                        <h1 className='uppercase mt-2'>Adanede</h1>
                    </span>
                </NavLink>
            </div>

            <div className="flex-grow lg:container lg:mx-auto p-8 sm:px-16 sm:py-8 grid grid-rows-1 grid-cols-12 gap-5">
                <div className="hidden lg:col-span-2 lg:flex lg:flex-col lg:justify-center lg:gap-8 lg:items-end">
                    <NavLink key='page--about' className={navlinkUpdateClass} to='/about'>About</NavLink>
                    <NavLink key='page--projects' className={navlinkUpdateClass} to='/projects'>Projects</NavLink>
                    <NavLink key='page--whitepaper' className={navlinkUpdateClass} to='/whitepaper'>Whitepaper</NavLink>
                    <NavLink key='page--investors' className={navlinkUpdateClass} to='/investors'>Investor's</NavLink>
                    <NavLink key='page--contacts' className={navlinkUpdateClass} to='/contacts'>Contacts</NavLink>
                </div>
                <Outlet/>
            </div>

            <span className='lg:hidden absolute bottom-2 left-0 right-0 text-center uppercase mt-2 opacity-70'>Adanede</span>
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
                    <Route path='investors'>
                        <Route path='plan' element={<Plan/>}/>
                        <Route path='' element={<Vision/>}/>
                        <Route path='stats' element={<Stats/>}/>
                    </Route>
                    <Route path='contacts' element={<Contacts/>}/>
                </Route>
            </Routes>
        </AnimatePresence>
    )
}


export default App
