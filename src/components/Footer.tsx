import Link from 'next/link'
import Image from 'next/image'
import instagram from '../../public/icons/instagram.svg'
import youtube from '../../public/icons/youtube.svg'

export default function Footer() {
    const date = new Date().getFullYear()
    const links = {
        instagram: "https://www.instagram.com/khansafiaa__/",
        youtube: "https://youtube.com/"
    }

    return (
        <>
            <footer className="flex flex-row items-center justify-between min-w-full bottom-0 z-50">
                <div className="flex flex-col gap-2">
                    <p className="font-bold">Find me on</p>
                    <div className="flex flex-row gap-6">
                        <Link href={links.instagram} className="flex flex-row gap-2 items-center hover:opacity-70">
                            <Image src={instagram} alt="Instagram Setara Biru" width={20} height={20} className="pointer-events-none" />
                            <p>Instagram</p>
                        </Link>
                        <Link href={links.youtube} className="flex flex-row gap-2 items-center hover:opacity-70">
                            <Image src={youtube} alt="Youtube Setara Biru" width={20} height={20} className="pointer-events-none" />
                            <p>Youtube</p>
                        </Link>
                    </div>
                </div>
                <p>&#169; {date} Setara Biru</p>
            </footer >
        </>
    )
}