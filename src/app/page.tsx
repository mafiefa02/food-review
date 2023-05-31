import Image from 'next/image'
import Button from '@/components/Button'
import kineruku from "../../public/images/kineruku.jpg"

export default function Home() {
  const hero_data = {
    title: "Kineruku",
    address: "Jl. Hegarmanah No.52, Hegarmanah, Kec. Cidadap, Kota Bandung, Jawa Barat 40141",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis aliquam metus, at porttitor diam porta eu. Curabitur condimentum elit libero, ut posuere velit condimentum quis. Nulla at nibh vehicula, tincidunt risus sit amet, consequat turpis. Mauris pellentesque sit amet purus eu vestibulum. Fusce pharetra commodo aliquet. Suspendisse consequat velit vel sem porttitor laoreet. Nunc vel viverra massa, non mattis nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis aliquam metus, at porttitor diam porta eu. Curabitur condimentum elit libero, ut posuere velit condimentum quis. Nulla at nibh vehicula, tincidunt risus sit amet, consequat turpis. Mauris pellentesque sit amet purus eu vestibulum. Fusce pharetra commodo aliquet. Suspendisse consequat velit vel sem porttitor laoreet. Nunc vel viverra massa, non mattis nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    img: kineruku
  }

  return (
    <main className="flex flex-row items-center justify-center w-full">
      <div className="flex flex-col w-[50%] items-center gap-6">
        <Image src={hero_data.img} alt="Kineruku" className="rounded-3xl drop-shadow-2xl pointer-events-none" />
        <p className="w-[65%] text-center line-clamp-2">{hero_data.address}</p>
      </div>
      <div className="flex flex-col w-[50%] items-center justify-center gap-7">
        <div className="text-center font-serif font-bold text-4xl w-[60%]">
          <p className="line-clamp-2">{hero_data.title}</p>
        </div>
        <div className="font-sans text-justify w-[65%]">
          <p className="line-clamp-[10]">{hero_data.description}</p>
        </div>
        <div className="flex flex-row gap-4 w-[65%] justify-center">
          <Button type="outline" text="Save" href="#" className="w-[35%]" />
          <Button type="normal" text="Read more" href="#" className="w-[65%]" />
        </div>
      </div>
    </main>
  )
}
