import type {FC} from "react"
import RouteAnimatedDiv from "@components/route-animated-div.tsx"
import SpecialText from "@components/special-text.tsx";


const Plan: FC = () => {
    return (
        <>
            <div className="col-span-12 lg:col-span-6 lg:col-start-4 flex items-center">
                <div className="relative">
                    <RouteAnimatedDiv className="lg:max-h-[75vh] lg:overflow-auto scroll-smooth py-8 lg:px-2">
                        <h2 className="text-4xl font-serif mb-4">Stage 1. Inception</h2>
                        <p className="text-base mb-8">At this stage, we will create the most iconic and traditional projects and products. They will be simple, but premium. From here you will recognize our identity. Through the results of our work we convey our ideas, approaches and attitude to the intended visual and semantic content, show the values and foundation on which the brand will be built, and bring people together, gathering the efforts of all like-minded people for the process of creation</p>

                        <h2 className="text-4xl font-serif mb-4">Stage 2. Path</h2>
                        <p className="text-base mb-8">The longest and the most challenging period, determining the direction to strengthen our visual brand. Our focus is on assembling the right team - individuals who are worthy and committed to the cause. We do not seek thousands of onlookers but hundreds of fighters who share our vision</p>

                        <h2 className="text-4xl font-serif mb-4">Stage 3. Riddle</h2>
                        <p className="text-base mb-8">We will focus on revealing the most unexpected sides of our company. We built the entire ecosystem interconnected and filled with secret ciphers, creating a single puzzle whose solution goes beyond traditional boundaries of our computers, homes, countries, and even the NFT space. By exploring these unexpected aspects, we hope to attract a diverse and curious audience who share our passion for exploration and creativity</p>

                        <h2 className="text-4xl font-serif mb-4">Stage 4. Diversity</h2>
                        <p className="text-base mb-8">All the while, somewhere very deep in the darkness outside from all eyes and attention, a multitude of ambitious ideas are growing and becoming more and more real. They will slowly grow to become branches on a tree, and when the tree itself is ready, all the branches will blossom. The goal is to create and develop from nothing something that can live on its own. These will be self-realized experimental products that do not require the basic resources of the entire ecosystem, but only supplement it. The association will be the basis for the realization of these products</p>
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

export default Plan
