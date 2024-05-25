import { Button } from "@nextui-org/react"

const Banner = () => {
    return (
        <div className='bg-[#f7f5ff] h-[95vh]'>
            <div className='w-full h-full flex flex-col justify-center items-center relative overflow-hidden'>
                <div className='absolute'>
                    <h1 className='text-[2.75rem] font-bold uppercase text-cyan-900'>
                        The platform for newsletter
                    </h1>
                </div>
                <div className='flex flex-col justify-center pt-20'>
                    <Button className="text-xl lp-8">
                        Get started
                    </Button>
                    <br />
                    <h3 className='text-center text-lg'>
                        Start a 30 days free trial
                    </h3>
                </div>
                
            </div>
        </div>
    )
}

export default Banner