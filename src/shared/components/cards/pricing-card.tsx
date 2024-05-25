'use client'

import { freePlan, growPlan, scalePlan } from "@/app/configs/constants"
import { Button } from "@nextui-org/react"

interface PricingCardProps {
    active: string
}

const PricingCard = ({active}: PricingCardProps) => {
    return (
        <div className='w-full md:flex items-start justify-around py-8'>
            <div className='md:w-[400px] bg-white rounded p-5 my-5 md:my-0'>
                <h5 className='text-black'>
                    Launch
                </h5>
                <br />
                <div className='border pb-8 border-black'>
                    <h5 className='text-black'>
                        $0.00
                    </h5>
                    <p className='text-lg'>
                        No comment here
                    </p>
                </div>
                <div className='pt-5'>
                    <p className='text-xl'>
                        What is included
                    </p>
                    <div>
                        {freePlan.map((plan:PlanType, index:number) => (
                            <div key={index} className='flex w-full items-center py-4'>
                                <span className='text-xl'>
                                    Icon
                                </span>
                                <p className='pl-2 text-lg text-black'>
                                    {plan.title}
                                </p>
                            </div>
                        ))}
                        <br />
                        <Button color="primary" className='w-full text-xl !py-6'>
                            Get started
                        </Button>
                        <p className='pt-1 opacity-[.7] text-center text-black'>
                            30 days free of Scale features, then free forever
                        </p>
                    </div>
                </div>
            </div>
            <div className='md:w-[400px] bg-white rounded p-5 my-5 md:my-0'>
                <h5 className='text-black'>
                    Grow
                </h5>
                <br />
                <div className='border pb-8 border-black'>
                    <h5 className='text-black'>
                        ${active === "Monthly" ? "42.00" : "45.00"}/month
                    </h5>
                    <p className='text-lg text-black'>
                        Build {active}
                    </p>
                </div>
                <div className='pt-5'>
                    <p className='text-xl'>
                        What is included
                    </p>
                    <div>
                        {growPlan.map((plan:PlanType, index:number) => (
                            <div key={index} className='flex w-full items-center py-4'>
                                <span className='text-xl'>
                                    Icon
                                </span>
                                <p className='pl-2 text-lg text-black'>
                                    {plan.title}
                                </p>
                            </div>
                        ))}
                        <br />
                        <Button color="primary" className='w-full text-xl !py-6'>
                            Get started
                        </Button>
                        <p className='pt-1 opacity-[.7] text-center text-black'>
                            30 days free of Scale features, then $
                            {active === "Monthly" ? "42.00" : "45.00"}/month
                        </p>
                    </div>
                </div>
            </div>
            <div className='md:w-[400px] bg-white rounded p-5 my-5 md:my-0'>
                <h5 className='text-black'>
                    Scale
                </h5>
                <br />
                <div className='border pb-8 border-black'>
                    <h5 className='text-black'>
                        ${active === "Monthly" ? "99.00" : "100.00"}/month
                    </h5>
                    <p className='text-lg text-black'>
                        Build {active}
                    </p>
                </div>
                <div className='pt-5'>
                    <p className='text-xl'>
                        What is included
                    </p>
                    <div>
                        {scalePlan.map((plan:PlanType, index:number) => (
                            <div key={index} className='flex w-full items-center py-4'>
                                <span className='text-xl'>
                                    Icon
                                </span>
                                <p className='pl-2 text-lg text-black'>
                                    {plan.title}
                                </p>
                            </div>
                        ))}
                        <br />
                        <Button color="primary" className='w-full text-xl !py-6'>
                            Get started
                        </Button>
                        <p className='pt-1 opacity-[.7] text-center text-black'>
                            30 days free of Scale features, then $
                            {active === "Monthly" ? "99.00" : "100.00"}/month
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PricingCard