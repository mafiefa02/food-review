import NavbarLogo from "./Logo";
import Button from "../Button";
import { navbarButton } from "./navbar-button";

export default function Navbar() {
    return (
        <>
            <nav className="flex flex-row items-center justify-between min-w-full top-0 z-50">
                <NavbarLogo />
                <div className="flex flex-row items-center gap-4">
                    {navbarButton.map((button, index) => {
                        return (
                            <Button type={button.type} key={index} text={button.text} href={button.href} />
                        )
                    })}
                </div>
            </nav>
        </>
    )
}