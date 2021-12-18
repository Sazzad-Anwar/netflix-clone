import Head from "next/head";
import Link from "next/link";
import Nav from './Nav';

const Layout = ({ title, children }) => {
    return (
        <div>
            <Head>
                <title>{title ? title : 'Netflix Bangladesh - Watch TV Shows Online, Watch Movies Online'}</title>
                <meta name="description" content="This is experimental and studying purpose netflix clone using with next.js, tailwindCss" />
                <meta name="author" content="Mohammad Sazzad Bin Anwar" />
                <link rel="icon" href="/logo-icon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
            </Head>
            <Nav />
            <main>
                {children}
            </main>
            <footer className="bg-black w-full">
                <div className='bg-[#222222] h-2'></div>
                <div className="container mx-auto py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-3">
                        <ul className="list-none">
                            <li className="my-2.5">
                                <Link href='/'>
                                    <a className="text-[#757575] text-sm hover:underline">FAQ</a>
                                </Link>
                            </li>
                            <li className="my-2.5">
                                <Link href='/'>
                                    <a className="text-[#757575] text-sm hover:underline">Investor Relations</a>
                                </Link>
                            </li>
                            <li className="my-2.5">
                                <Link href='/'>
                                    <a className="text-[#757575] text-sm hover:underline">Privacy</a>
                                </Link>
                            </li>
                            <li className="my-2.5">
                                <Link href='/'>
                                    <a className="text-[#757575] text-sm hover:underline">Speed Test</a>
                                </Link>
                            </li>
                        </ul>

                        <ul className="list-none">
                            <li className="my-2.5">
                                <Link href='/'>
                                    <a className="text-[#757575] text-sm hover:underline">Help Center</a>
                                </Link>
                            </li>
                            <li className="my-2.5">
                                <Link href='/'>
                                    <a className="text-[#757575] text-sm hover:underline">Jobs</a>
                                </Link>
                            </li>
                            <li className="my-2.5">
                                <Link href='/'>
                                    <a className="text-[#757575] text-sm hover:underline">Cookie Preferences</a>
                                </Link>
                            </li>
                            <li className="my-2.5">
                                <Link href='/'>
                                    <a className="text-[#757575] text-sm hover:underline">Legal Notices</a>
                                </Link>
                            </li>
                        </ul>

                        <ul className="list-none">
                            <li className="my-2.5">
                                <Link href='/login'>
                                    <a className="text-[#757575] text-sm hover:underline">Account</a>
                                </Link>
                            </li>
                            <li className="my-2.5">
                                <Link href='/'>
                                    <a className="text-[#757575] text-sm hover:underline">Ways to Watch</a>
                                </Link>
                            </li>
                            <li className="my-2.5">
                                <Link href='/'>
                                    <a className="text-[#757575] text-sm hover:underline">Corporate Information</a>
                                </Link>
                            </li>
                            <li className="my-2.5">
                                <Link href='/'>
                                    <a className="text-[#757575] text-sm hover:underline">Only on Netflix</a>
                                </Link>
                            </li>
                        </ul>

                        <ul className="list-none">
                            <li className="my-2.5">
                                <Link href='/'>
                                    <a className="text-[#757575] text-sm hover:underline">Media Center</a>
                                </Link>
                            </li>
                            <li className="my-2.5">
                                <Link href='/'>
                                    <a className="text-[#757575] text-sm hover:underline">Terms of Use</a>
                                </Link>
                            </li>
                            <li className="my-2.5">
                                <Link href='/'>
                                    <a className="text-[#757575] text-sm hover:underline">Contact Us</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Layout;
