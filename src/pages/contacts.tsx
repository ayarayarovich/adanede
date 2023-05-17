import type {FC} from "react";
import {motion} from "framer-motion"
import RouteAnimatedDiv from "@components/route-animated-div.tsx"
import SpecialText from "@components/special-text.tsx"
import adanede from '@assets/adanede.svg'
import associated from '@assets/associated.svg'
import behindTheScene from '@assets/behind-the-scene.svg'

const Contacts: FC = () => {

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.5
            }
        },
    };

    const listItem = {
        hidden: { opacity: 0 },
        show: { opacity: 1 },
        scale: {
            scale: 1.05,
        }
    };

    return (
        <>
            <RouteAnimatedDiv className="col-span-12 lg:col-span-6 lg:col-start-4 flex items-center">
                <motion.div variants={container} initial='hidden' animate='show' className="w-full flex flex-col items-start sm:flex-row sm:items-baseline sm:justify-around">
                    <motion.div whileHover="scale" variants={listItem} className="mb-4 flex flex-col flex-grow flex-shrink basis-0 sm:items-center">
                        <img className='hidden sm:block w-auto h-64 mb-12' src={adanede} alt=""/>
                        <h2 className='font-serif text-4xl sm:text-2xl mb-2'>Adanede</h2>
                        <p className='ml-2 mb-2 sm:ml-0'>@adanedeofficial</p>
                        <p className='ml-2 mb-2 sm:ml-0'>info@adanede.com</p>
                        <p className='ml-2 mb-2 sm:ml-0'>adanede.eth</p>
                    </motion.div>
                    <motion.div whileHover="scale" variants={listItem} className="flex flex-col flex-grow flex-shrink basis-0 sm:items-center">
                        <img className='hidden sm:block w-auto h-64 mb-12' src={associated} alt=""/>
                        <h2 className='font-serif text-4xl sm:text-2xl mb-2'>Associated</h2>
                        <p className='ml-2 mb-2 sm:ml-0'>@vronsoeth</p>
                        <p className='ml-2 mb-2 sm:ml-0'>@bamboo_eth</p>
                        <p className='ml-2 mb-2 sm:ml-0'>@BigFloppaeth</p>
                        <p className='ml-2 mb-2 sm:ml-0'>@reezo_eth</p>
                        <p className='ml-2 mb-2 sm:ml-0'>@optoai_</p>
                    </motion.div>
                    <motion.div whileHover="scale" variants={listItem} className="hidden sm:flex flex-col flex-grow flex-shrink basis-0 items-center">
                        <img className='hidden sm:block w-auto h-64 mb-12' src={behindTheScene} alt=""/>
                        <h2 className='font-serif text-2xl mb-2'>Behind the scene</h2>
                        <p className='text-xs text-justify mb-2'>These people were the architects of our technological universe, the guardians of our digital realm. They worked tirelessly in the shadows. Their work was not for fame or recognition, but for the satisfaction of knowing that they were part of something bigger than themselves, something that would make a change</p>
                    </motion.div>
                </motion.div>

            </RouteAnimatedDiv>
            <div className="hidden lg:col-span-2 lg:col-start-11 lg:flex lg:items-center">
                <SpecialText/>
            </div>
        </>
    )
}

export default Contacts
