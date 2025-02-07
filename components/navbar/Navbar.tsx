
import Link from "next/link"
import ActiveLink from "../active-link/active-link"

const navItems = [
  {path: "/about", text: "about"},
  {path: "/pricing", text: "pricing"}
]

const Navbar = async() => {

  return (
    <nav className='flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded'>
        <Link href="/">
          <span>Home</span>
        </Link>
        <div className='flex flex-1'></div>
        {
          navItems.map(item=>(
            <ActiveLink key={item.path} {...item} />
          ))
        }
    </nav>
  )
}

export default Navbar