import { useEffect, useState, type ReactNode } from "react"
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";


const Navbar = () => {
    const {pathname} = useLocation();
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        setMenuOpen(false);
    }, [pathname])

    return (
        // need landing page to be clean ✨
        pathname === "/"? <></>
        
        :
        <section className="sticky w-full shadow-lg top-0 left-0 flex flex-col bg-gray-300">
            <nav className="navbar flex flex-col items-center justify-between w-full  mx-auto gap-5">
                <div className="flex items-center justify-between w-full gap-10 py-3 px-5 md:px-10 md:py-4">
                    <h2 className="text-xl font-bold"> NextTrend </h2>
                    <ul className="hidden md:flex space-x-6 text-sm md:text-base">
                        <li>
                            <NavItem to="/dashboard">
                                Dashboard
                            </NavItem>
                        </li>
                        <li>
                            <NavItem to="/learn">
                                Learning Modules
                            </NavItem>
                        </li>
                        <li>
                            <NavItem to="/payments">
                                Payments
                            </NavItem>
                        </li>
                        <li>
                            <NavItem to="/rewards">
                                Rewards
                            </NavItem>
                        </li>
                        <li>
                            <NavItem to="/settings">
                                Settings
                            </NavItem>
                        </li>
                    </ul>
                    <button onClick={toggleMenu} className="md:hidden">
                        🍔
                    </button>
                </div>

                <div className="w-full absolute top-[100%] left-0 rounded-b-2xl shadow-lg">
                    <Menu open={menuOpen} />
                </div>
            </nav>
        </section>
    )

    function toggleMenu() {
        setMenuOpen(!menuOpen)
    }

}

export default Navbar


interface NavItemProps {
    children: ReactNode,
    to: string,
    newWindow?: string
}

const NavItem = ({children, to, newWindow}: NavItemProps) => (
    <NavLink className={`nav-link transition `} to={to} target={newWindow? "_blank" : ''} rel="noreferrer noopener" >
        {children}
    </NavLink>
)


function Menu({open}: {open: Boolean}){
    if (!open) return <></>

    return (
        <ul className="flex menu md:hidden flex-col py-5 space-x-6 w-full px-5 gap-2 text-sm md:text-base bg-gray-200 rounded-b-xl">
            <li>
                <NavItem to="/dashboard">
                    Dashboard
                </NavItem>
            </li>
            <li>
                <NavItem to="/learn">
                    Learning Modules
                </NavItem>
            </li>
            <li>
                <NavItem to="/payments">
                    Payments
                </NavItem>
            </li>
            <li>
                <NavItem to="/rewards">
                    Rewards
                </NavItem>
            </li>
            <li>
                <NavItem to="/settings">
                    Settings
                </NavItem>
            </li>
        </ul>
    )
}