import Link from "next/link"

const Footer = () => {
    return (
        <footer className='w-full bg-black text-white pt-10'>
            <div className='w-[95%] md:flex m-auto py-5'>
                <div className='w-full md:w-[40%]'>
                    <Link href={'/'}>
                        FooterLogo
                    </Link>
                    <p className='text-2xl'>
                        Some text here
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer