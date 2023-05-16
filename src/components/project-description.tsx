import type {FC} from 'react'
import RouteAnimatedDiv from "@components/route-animated-div.tsx"
import type {Project} from "@interfaces/project.ts"
import {motion} from 'framer-motion'

const ProjectDescription: FC<Project> = (project) => {

    const itemsAnimation = {
        initial: {y: -10, opacity: 0},
        animate: {y: 0, opacity: 1},
        exit:    {y: 10, opacity: 0}
    }

    return (
        <motion.div transition={{staggerChildren: 10}} className="text-left">
            <motion.p {...itemsAnimation} className="text-2xl mb-2">{project.title}</motion.p>
            <motion.p {...itemsAnimation} className="text-sm opacity-40 mb-1">{project.transcription}</motion.p>
            <motion.p {...itemsAnimation} className="text-xs opacity-40 mb-8">{project.partOfSpeech}</motion.p>
            <motion.p {...itemsAnimation} className="text-sm opacity-60 mb-12">{project.description}</motion.p>
            <motion.a {...itemsAnimation} className="" href={project.linkHref}>{project.linkLabel}</motion.a>
        </motion.div>
    )
}


export default ProjectDescription


// <RouteAnimatedDiv className={className}>
//     <div className="text-right scale-y-[-1] opacity-50">
//     <p className="uppercase text-base mb-2">ADANEDE</p>
    // <p className="text-sm mb-2">/eɪdəned/</p>
    // <p className="text-xs mb-2">Noun</p>
    // <p className="text-sm">The word is formed by combining terms "ada" and "eden”.  It reflects the idea of exploring and using the resources that are around us at the moment and creating something new out of them, as well as the idea of technology and the pursuit of the ideal place that humanity has dreamed of.</p>
// </div>
// </RouteAnimatedDiv>
