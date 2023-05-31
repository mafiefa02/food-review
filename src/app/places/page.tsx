import Searchbar from "@/components/Searchbar"
import Image from "next/image"
import Button from "@/components/Button"
import Link from "next/link"
import kineruku from "../../../public/images/kineruku.jpg"
import dollarsquare from "../../../public/icons/dollarsquare.svg"
import like from "../../../public/icons/like1.svg"
import leftArrowIcon from "../../../public/icons/left_arrow_button.svg"
import rightArrowIcon from "../../../public/icons/right_arrow_button.svg"

export default function Places() {
    const hero_data = [
        {
            title: "Kineruku",
            address: "Jl. Hegarmanah No.52, Hegarmanah, Kec. Cidadap, Kota Bandung, Jawa Barat 40141",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis aliquam metus, at porttitor diam porta eu. Curabitur condimentum elit libero, ut posuere velit condimentum quis. Nulla at nibh vehicula, tincidunt risus sit amet, consequat turpis. Mauris pellentesque sit amet purus eu vestibulum. Fusce pharetra commodo aliquet. Suspendisse consequat velit vel sem porttitor laoreet. Nunc vel viverra massa, non mattis nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis aliquam metus, at porttitor diam porta eu. Curabitur condimentum elit libero, ut posuere velit condimentum quis. Nulla at nibh vehicula, tincidunt risus sit amet, consequat turpis. Mauris pellentesque sit amet purus eu vestibulum. Fusce pharetra commodo aliquet. Suspendisse consequat velit vel sem porttitor laoreet. Nunc vel viverra massa, non mattis nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
            price_range: "Rp13.000 - Rp40.000",
            rating: "9 / 10",
            img: kineruku
        },
        {
            title: "Fore Dipati Ukur",
            address: "Jl. Dipatiukur No.112, Lebakgede, Kec. Coblong, Kota Bandung, Jawa Barat 40132",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis aliquam metus, at porttitor diam porta eu. Curabitur condimentum elit libero, ut posuere velit condimentum quis. Nulla at nibh vehicula, tincidunt risus sit amet, consequat turpis. Mauris pellentesque sit amet purus eu vestibulum. Fusce pharetra commodo aliquet. Suspendisse consequat velit vel sem porttitor laoreet. Nunc vel viverra massa, non mattis nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis aliquam metus, at porttitor diam porta eu. Curabitur condimentum elit libero, ut posuere velit condimentum quis. Nulla at nibh vehicula, tincidunt risus sit amet, consequat turpis. Mauris pellentesque sit amet purus eu vestibulum. Fusce pharetra commodo aliquet. Suspendisse consequat velit vel sem porttitor laoreet. Nunc vel viverra massa, non mattis nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
            price_range: "Rp13.000 - Rp40.000",
            rating: "9 / 10",
            img: kineruku
        },
        {
            title: "Warkop Sukarasa",
            address: "Jl. Sukarasa No.1, Sukarasa, Kec. Cibeunying Kaler, Kota Bandung, Jawa Barat 40115",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis aliquam metus, at porttitor diam porta eu. Curabitur condimentum elit libero, ut posuere velit condimentum quis. Nulla at nibh vehicula, tincidunt risus sit amet, consequat turpis. Mauris pellentesque sit amet purus eu vestibulum. Fusce pharetra commodo aliquet. Suspendisse consequat velit vel sem porttitor laoreet. Nunc vel viverra massa, non mattis nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis aliquam metus, at porttitor diam porta eu. Curabitur condimentum elit libero, ut posuere velit condimentum quis. Nulla at nibh vehicula, tincidunt risus sit amet, consequat turpis. Mauris pellentesque sit amet purus eu vestibulum. Fusce pharetra commodo aliquet. Suspendisse consequat velit vel sem porttitor laoreet. Nunc vel viverra massa, non mattis nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
            price_range: "Rp13.000 - Rp40.000",
            rating: "9 / 10",
            img: kineruku
        },
        {
            title: "Seblak Kawani",
            address: "Jl. Cisitu Lama No.1, Hegarmanah, Kec. Cidadap, Kota Bandung, Jawa Barat 40141",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis aliquam metus, at porttitor diam porta eu. Curabitur condimentum elit libero, ut posuere velit condimentum quis. Nulla at nibh vehicula, tincidunt risus sit amet, consequat turpis. Mauris pellentesque sit amet purus eu vestibulum. Fusce pharetra commodo aliquet. Suspendisse consequat velit vel sem porttitor laoreet. Nunc vel viverra massa, non mattis nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis aliquam metus, at porttitor diam porta eu. Curabitur condimentum elit libero, ut posuere velit condimentum quis. Nulla at nibh vehicula, tincidunt risus sit amet, consequat turpis. Mauris pellentesque sit amet purus eu vestibulum. Fusce pharetra commodo aliquet. Suspendisse consequat velit vel sem porttitor laoreet. Nunc vel viverra massa, non mattis nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
            price_range: "Rp13.000 - Rp40.000",
            rating: "9 / 10",
            img: kineruku
        }
    ]
    return (
        <main className="flex flex-col justify-start items-center w-full min-h-[35rem] gap-28">
            <div className="flex flex-row items-start w-full">
                <Searchbar />
            </div>
            {
                hero_data.map((data, index) => {
                    return (
                        <>
                            <div className="flex flex-row justify-center items-center w-full gap-24">
                                <div className="flex items-center justify-center w-max">
                                    <Image width={550} height={550} src={data.img} alt={data.title} className="rounded-3xl drop-shadow-2xl pointer-events-none" />
                                </div>
                                <div className="flex flex-col justify-center items-start w-auto h-full gap-6">
                                    <h1 className="text-4xl font-bold text-left w-full font-serif">{data.title}</h1>
                                    <p>{data.address}</p>
                                    <div className='flex flex-row items-center justify-center gap-8'>
                                        <div className="flex flex-row items-center gap-2">
                                            <Image src={dollarsquare} alt="Dollar Square" height={25} width={25} />
                                            <p className="line-clamp-1">{data.price_range}</p>
                                        </div>
                                        <div className="flex flex-row items-center gap-2">
                                            <Image src={like} alt="Dollar Square" height={25} width={25} />
                                            <p className="line-clamp-1">{data.rating}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row w-full items-center justify-center gap-8">
                                        <Button type="normal" text="Read review" href="#" className="w-[33%]" />
                                        <Button type="outline" text="Save" href="#" className="w-[20%]" />
                                        <Button type="outline" text="Open in Google Maps" href="#" className="w-[47%]" />
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })
            }
            <div className="flex flex-row justify-center items-center w-full gap-4">
                <Link href="/places">
                    <Image src={leftArrowIcon} alt="Left Arrow" height={50} width={50} />
                </Link>
                <p>Page <span className="font-bold">1/3</span></p>
                <Link href="/places">
                    <Image src={rightArrowIcon} alt="Right Arrow" height={50} width={50} />
                </Link>
            </div>
        </main>
    )
}