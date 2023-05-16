import type {FC} from "react";
import RouteAnimatedDiv from "@components/route-animated-div.tsx";
import adanedeArt from "@assets/art-adanede.svg"
import SpecialText from "@components/special-text.tsx";

const Main: FC = () => {
    return (
        <>
            <RouteAnimatedDiv className="col-span-12 lg:col-span-6 lg:col-start-4 flex items-center justify-center">
                <img src={adanedeArt} alt=''/>
            </RouteAnimatedDiv>
            <div className="hidden lg:col-span-2 lg:col-start-11 lg:flex lg:items-center">
                <SpecialText/>
            </div>
        </>
    )
}

export default Main
