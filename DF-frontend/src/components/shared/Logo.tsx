import { Link } from "react-router-dom"


function Logo() {
  return (
      <Link to='/' className={`text-2xl font-bold tracking-tighter transition-all`}>
      <img
        src="/img/photos/DF-logo.jpg"
        alt="Logo"
        className="h-12 w-auto"
      />
      </Link>
  )
}

export default Logo