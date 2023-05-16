import type {FC} from "react"
import RouteAnimatedDiv from "@components/route-animated-div.tsx"
import SpecialText from "@components/special-text.tsx";


const About: FC = () => {
    return (
        <>
            <div className="col-span-12 lg:col-span-6 lg:col-start-4 flex items-center">
                <div className="relative">
                    <RouteAnimatedDiv className="paragraphs-with-margin lg:max-h-[75vh] lg:overflow-auto py-8 px-2">
                        <p>First of all, Adanede is not a team. It is not a group of people united by the same activity or having similar goals. It is not a startup or a company. It does not report to anyone, it does not follow the rules, it does not guided by profit or any metrics. It is not tangible. It is not personal.</p>
                        <p>Adanede is an idea. It is defined as it is and cannot be deleted, erased, banned. All it can do is to make people believe. And that belief gives people power. It does not seek of changing anyone for now. It gathers individuals who holds the same idea somewhere very deep in their hearts</p>
                        <p>Why it is not people? People tend to be weak, or become weak over time. They shine for a period of time and then burn. People can give up. People carry narrow values - they restricted by gender, race, language, age, interests, jobs, schools they went to. Idea is universal, it is unbiased</p>
                        <p>Adanede was born and grew during the whole lifetime of NFT space. It saw how promising it started and how deeply wrong it went. From the most prominent technology that would change the world to a space of incompetent people led by greed. From collecting to trading. From building to scamming. From promises to complete silence</p>
                        <p>Adanede is still fragile for now. But with every new member, every new heart in which it responds it grows and strengthens. Every click you make, every word you say, makes it stronger and spread even more strength amongst people back</p>
                        <p>Its goal is to become the symbol that really means something to people, that holds something valuable and sacral</p>
                    </RouteAnimatedDiv>
                    <div className='absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-[rgba(222,222,216,1)] to-[rgba(222,222,216,0)]'></div>
                    <div className='absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[rgba(222,222,216,1)] to-[rgba(222,222,216,0)]'></div>
                </div>

            </div>
            <div className="hidden lg:col-span-2 lg:col-start-11 lg:flex lg:items-center">
                <SpecialText/>
            </div>
        </>
    )
}

export default About
