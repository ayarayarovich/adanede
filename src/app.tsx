import {FC} from 'react'
import {Navigate, NavLink, Outlet, Route, Routes, useLocation, useMatch} from "react-router-dom"
import {AnimatePresence} from "framer-motion"
import '@styles/app.css'

import Main from '@pages/main.tsx'
import About from '@pages/about.tsx'
import Whitepaper from '@pages/whitepaper.tsx'
import Plan from '@pages/plan.tsx'
import Vision from '@pages/vision.tsx'
import Contacts from "@pages/contacts.tsx"
import Projects from "@pages/projects.tsx"
import Stats from "@pages/stats.tsx";


const DropdownNavLink: FC<{route: string, label: string}> = ({route, label}) => {
    const match = useMatch(route + '/*')

    const navlinkUpdateClass = (props: {isActive: boolean}) => `navigation__link ${props.isActive ? 'navigation__link--active' : 'navigation__link--inactive'}`

    return (
        <span className={`relative`}>
            <NavLink key='page--investors' className={navlinkUpdateClass} to='/investors'>Investor's</NavLink>
            <div className={`${!match ? 'hidden' : 'flex'} absolute -right-6 top-1/2 -translate-y-1/2 translate-x-full flex-col items-start`}>
                <NavLink key='page--investors-plan' className={navlinkUpdateClass} to={`${route}/plan`}>Plan</NavLink>
                <NavLink key='page--investors-vision' className={navlinkUpdateClass} to={`${route}/vision`}>Vision</NavLink>
                <NavLink key='page--investors-stats' className={navlinkUpdateClass} to={`${route}/stats`}>Stats</NavLink>
            </div>
        </span>
    )
}

const Layout: FC = () => {
    const navlinkUpdateClass = (props: {isActive: boolean}) => `navigation__link ${props.isActive ? 'navigation__link--active' : 'navigation__link--inactive'}`

    return (
        <main className='app relative min-h-[100dvh] flex flex-col'>

            {/*Desktop navigation bar*/}
            <div className="hidden lg:block lg:container lg:mx-auto px-4 lg:px-8 pt-12 pb-4 text-center">
                <NavLink to='/'>
                    <span>
                        <img src="/logo.svg" alt="adanede logo" className="h-11 w-auto inline-block"/>
                        <h1 className='uppercase mt-2'>Adanede</h1>
                    </span>
                </NavLink>
            </div>

            {/*Mobile navigation bar*/}
            <div className="lg:hidden container mx-auto p-8 flex items-center justify-between text-center">
                <div className="h-8 w-8 bg-amber-500">

                </div>
                <NavLink to='/'>
                    <span>
                        <img src="/logo.svg" alt="adanede logo" className="h-11 w-auto inline-block"/>
                    </span>
                </NavLink>
            </div>

            <div className="flex-grow lg:container lg:mx-auto p-8 sm:px-16 sm:py-8 grid grid-rows-1 grid-cols-12 gap-5">
                <div className="hidden lg:col-span-2 lg:flex lg:flex-col lg:justify-center lg:gap-8 lg:items-end">
                    <NavLink key='page--about' className={navlinkUpdateClass} to='/about'>About</NavLink>
                    <NavLink key='page--projects' className={navlinkUpdateClass} to='/projects'>Projects</NavLink>
                    <NavLink key='page--whitepaper' className={navlinkUpdateClass} to='/whitepaper'>Whitepaper</NavLink>
                    <DropdownNavLink route='/investors' label="Investor's"/>
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
