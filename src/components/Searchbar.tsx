import Image from "next/image"
import searchIcon from "../../public/icons/search_icon.svg"

interface SearchbarProps {
    className?: string
}

export default function Searchbar(props: SearchbarProps) {
    return (
        <div className={`flex flex-col gap-12 items-center justify-center min-w-[25%] min-h-[100%] ${props.className}`}>
            <input className="w-full h-12 px-4 text-gray-700 bg-transparent ring-1 ring-[#121212] rounded-lg focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#ffd2d2] shadow-lg transition" type="search" name="search" placeholder="What are you looking for?" />
        </div>
    )
}