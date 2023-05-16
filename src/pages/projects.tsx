import type {FC} from "react";
import RouteAnimatedDiv from "@components/route-animated-div.tsx";
import comingSoon from "@assets/art-coming-soon.svg"
import ProjectDescription from "@components/project-description.tsx";
import {Project} from "@interfaces/project.ts";
import {useState} from "react";
import {Effects} from "@interfaces/effects.ts";



const Projects: FC = () => {
    const [item, setItem] = useState(0)
    const [effects, setEffects] = useState<Effects>()


    const projects: Project[] = [
        {
            title: "Neura",
            transcription: "/ˈnʊr.ɑː/",
            partOfSpeech: "Noun",
            description: "Neura is a true decentralization of art and complete freedom of expression. Every owner acts like a node in a global net. You have the power to lead your art the way you want and. The rules of the universe are clear, but the result is always unpredictable... All the answers are in Neura.",
            linkLabel: "TBA",
            linkHref: "https://adanede.com"
        },
        {
            title: "SupremePunks",
            transcription: "/ˈnʊr.ɑː/",
            partOfSpeech: "Noun",
            description: "Neura is a true decentralization of art and complete freedom of expression. Every owner acts like a node in a global net. You have the power to lead your art the way you want and. The rules of the universe are clear, but the result is always unpredictable... All the answers are in Neura.",
            linkLabel: "TBA",
            linkHref: "https://adanede.com"
        },
    ]

    return (
        <>
            <RouteAnimatedDiv className="col-span-12 lg:col-span-6 lg:col-start-4 flex items-center justify-center">
                <img src={comingSoon} alt=''/>
            </RouteAnimatedDiv>
            <div className="hidden lg:col-span-2 lg:col-start-11 lg:flex lg:items-center">
                <ProjectDescription {...projects[0]}/>
            </div>
        </>
    )
}

export default Projects
