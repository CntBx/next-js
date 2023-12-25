import Link from "next/link"
import '../app/globals.css'
const TheHeader = () => {
    return (
        <header className="header flex justify-evenly h-14 items-center">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/blog" className="hover:underline">Blog</Link>
            <Link href="/about" className="hover:underline">About</Link>
        </header>
    )
}

export default TheHeader