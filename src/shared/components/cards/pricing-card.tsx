'use client'

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
                </div>
            </div>
        </div>
    )
}

export default PricingCard