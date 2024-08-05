import { NavLink } from "./NavLink"

export function Nav() {
    return (
        <nav className="mb-14 flex w-full justify-center gap-3 px-5 py-5 text-sm font-medium">
            <NavLink to="/">Conversor</NavLink>
            <NavLink to="/history">Historia</NavLink>
        </nav>
    )
}
