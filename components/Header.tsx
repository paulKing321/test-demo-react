import Link from 'next/link';
import Image from "next/image";

const Header = () => (
    <div className='sticky top-0 z-40 flex w-full h-24 bg-zinc-900'>
        <div className="flex justify-between w-full h-full px-4 m-auto bg-red-500 max-w-7xl">
            <Link href="/">
                <div className="flex items-center cursor-pointer">
                    <div className="invisible md:visible">
                        <Image width='150' height='50' src="/rmdb-logo.svg" alt='rmdb-logo' />
                    </div>
                    <div className="absolute pt-2 md:invisible">
                        <Image width='42' height='50' src="/rmdb-logo-small.svg" alt='rmdb-logo-small' />
                    </div>
                </div>
            </Link>
        </div>
    </div>
)
export default Header;