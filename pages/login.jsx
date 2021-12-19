import Image from "next/image"
import Link from "next/link"
import Layout from "../components/Layout"
import TextInput from "../components/TextInput"

const Login = () => {

    return (
        <Layout>
            <section className='relative h-[31.2rem] lg:h-[46.5rem] w-full'>
                <Image
                    src="/hero-image.jpg"
                    alt='hero image'
                    layout="fill"
                    objectFit='cover'
                    className="-z-0 brightness-[.3]"
                />
                <div className='absolute inset-0'>
                    <div className='py-20 flex justify-center items-center bg-black lg:bg-transparent  lg:py-16'>
                        <div className='w-screen px-[2rem] lg:p-16 lg:w-[28rem]' style={{
                            background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))'
                        }}>
                            <h1 className="text-3xl text-white mb-7 font-bold">Sign In</h1>
                            <form action="" className="accent-[#8C8C8C]">
                                <TextInput type="text" label="Email or phone number" errorMsg="Please enter a valid email or phone number." />
                                <TextInput type="password" label="Password" errorMsg="Your password must contain between 4 and 60 characters." />

                                <button className="w-full rounded bg-[#E50914] text-white text-base text-center py-3.5 font-bold">Sign In</button>
                                <div className="flex justify-between items-center mt-2">
                                    <div className="flex items-center">
                                        <input type="checkbox" id="checkbox" className="text-black mr-2 cursor-pointer" />
                                        <label htmlFor="checkbox" className="text-sm text-[#8C8C8C]">Remember me</label>
                                    </div>
                                    <Link href='/'>
                                        <a className="text-[#757575] text-sm hover:underline">Need help?</a>
                                    </Link>
                                </div>

                                {/* facebook login */}
                                <div className="mt-16">
                                    <Link href="/">
                                        <a className="flex">
                                            <Image layout="intrinsic" height={20} width={20} src="/fb.png" alt="fb" />
                                            <p className="text-[#757575] text-sm ml-2">Login with Facebook</p>
                                        </a>
                                    </Link>

                                    <div className="text-[#757575] text-base my-2">
                                        New to Netflix ?  <Link href='/'>
                                            <a className="text-white text-base hover:underline">Sign up now</a>
                                        </Link>
                                    </div>

                                    <div className="text-[#757575] text-xs">
                                        This page is protected by Google reCAPTCHA to ensure you&apos;re not a bot.
                                        <Link href="/">
                                            <a className="text-blue-700 ml-2">Learn more.</a>
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Login
