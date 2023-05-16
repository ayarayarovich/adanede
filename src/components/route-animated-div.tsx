import {motion} from 'framer-motion'
import type {FC, Children, ReactNode, ReactElement} from "react"

interface Props {
    children?: ReactNode | ReactElement
    className?: string,
    layout?: boolean
}

const RouteAnimatedDiv: FC<Props> = ({children, className, layout}) => {
    return (
        <motion.div
            className={className}
            layout={layout}
            initial={{opacity: 0, filter: 'blur(50px)'}}
            animate={{opacity: 1, filter: 'blur(0px)'}}
            exit={{opacity: 0, filter: 'blur(50px)'}}
            transition={{duration: 1, ease: "backInOut"}}
        >
            {children}
        </motion.div>
    )
}


export default RouteAnimatedDiv
