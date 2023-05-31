import Link from "next/link";

interface ButtonProps {
    type: "normal" | "outline" | "no_border";
    key?: number;
    text: string;
    href: string;
    icon?: string;
    className?: string;
}

const buttonTypeClass = {
    normal: "bg-black hover:opacity-80 py-2 px-12 text-white text-center rounded-3xl shadow-lg transition",
    outline: "bg-transparent hover:bg-black hover:opacity-70 active:opacity-100 hover:text-white text-black text-center py-2 px-12 border border-black hover:border-transparent rounded-3xl transition shadow-lg",
    no_border: "py-2 px-4 hover:font-semibold transition text-center"
}

export default function Button(props: ButtonProps) {
    return (
        <Link href={props.href} className={`${buttonTypeClass[props.type]} ${props.className}`}>
            {props.text}
        </Link>
    )

    // TODO: Add icon
}