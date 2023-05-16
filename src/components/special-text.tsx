import type {FC} from 'react'
import RouteAnimatedDiv from "@components/route-animated-div.tsx"


interface Props {
    className?: string
}
const SpecialText: FC<Props> = ({className}) => {
    return (

        <RouteAnimatedDiv className={className}>
            <div className="text-right scale-y-[-1] opacity-50">
                <p className="uppercase text-base mb-2">ADANEDE</p>
                <p className="text-sm mb-2">/eɪdəned/</p>
                <p className="text-xs mb-2">Noun</p>
                <p className="text-sm">The word is formed by combining terms "ada" and "eden”.  It reflects the idea of exploring and using the resources that are around us at the moment and creating something new out of them, as well as the idea of technology and the pursuit of the ideal place that humanity has dreamed of.</p>
            </div>
        </RouteAnimatedDiv>
    )
}


export default SpecialText
