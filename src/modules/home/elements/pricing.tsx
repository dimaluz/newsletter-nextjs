'use client'

import { useState } from "react"

import PricingCard from "@/shared/components/cards/pricing-card"
import { Button } from "@nextui-org/react"


const Pricing = () => {

    const [active, setActive] = useState('Monthly')

    return (
        <div className='w-full bg-[#fec8eb]'>
            <div className='w-[95%] m-auto py-5'>
                <div className='w-full md:flex justify-between'>
                    <div>
                        <h3 className='text-center lg:text-left uppercase text-cyan-950 text-cyber-ink text-[2.5rem]'>
                            Pricing
                        </h3>
                        <p className='text-3xl'>
                            Simple, predictable, built for you.
                        </p>
                    </div>
                    <div className='flex items-center mt-2 md:mt-0'>
                        <Button 
                            onClick={() => setActive('Monthly')}
                            className={`${active === 'Monthly' ? 'bg-[#3843D0] text-white' : 'bg-white text-black'} rounded-r-[0] !p-7 text-2xl !px-16 border border-[#000]`}
                        >
                            Monthly
                        </Button>
                        <Button 
                            onClick={() => setActive('Yearly')}
                            className={`${active === 'Yearly' ? 'bg-[#3843D0] text-white' : 'bg-white text-black'} rounded-l-[0] !p-7 text-2xl !px-16 border border-[#000]`}
                        >
                            Yearly
                        </Button>
                    </div>
                </div>
                <PricingCard active={active}/>
            </div>
        </div>
    )
}

export default Pricing