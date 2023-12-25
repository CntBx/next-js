import Link from "next/link"


export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="m-auto h-full min-w-[50%]">
            <h2 className="text-center">About us</h2>
            <ul className="">
                <li><Link href="/about/contacts">Contacts</Link></li>
                <li><Link href="/about/team">Team</Link></li>
            </ul>
            {children}
        </div>
    )
}