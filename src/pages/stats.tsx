import type {FC} from "react";
import RouteAnimatedDiv from "@components/route-animated-div.tsx";
import comingSoon from "@assets/art-coming-soon.svg"
import comingSoonMobile from '@assets/comming-soon-mobile.svg'
import SpecialText from "@components/special-text.tsx";
import {Helmet} from "react-helmet";

const Stats: FC = () => {
    return (
        <>
            <Helmet>
                <title>Stats</title>
            </Helmet>
            <RouteAnimatedDiv className="col-span-12 lg:col-span-6 lg:col-start-4 flex items-center justify-center">
                <img className='lg:hidden' src={comingSoonMobile} alt=''/>
                <img className='hidden lg:block' src={comingSoon} alt=''/>
            </RouteAnimatedDiv>
            <div className="hidden lg:col-span-2 lg:col-start-11 lg:flex lg:items-center">
                <SpecialText/>
            </div>
        </>
    )
}

export default Stats
