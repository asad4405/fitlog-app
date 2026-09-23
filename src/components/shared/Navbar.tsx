'use client';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuBurger } from "react-icons/ci";

const Navbar = () => {
    const pathName = usePathname();
    return (
        <header className="sticky top-0 z-50 bg-black text-white py-4 px-4 md:px-12 border-b border-gray-800/60">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                
                <Link
                    href="/"
                    className="flex items-center gap-2.5 font-extrabold tracking-wider text-xl text-white"
                >
                    <Image
                        src="/assets/logo.png"
                        alt="Logo"
                        width={28}
                        height={28}
                        className="object-contain"
                    />
                    <span>FITLOG</span>
                </Link>

                <nav className="hidden sm:flex items-center gap-1">
                    <Link
                        href="/"
                        className={`px-5 py-1.5 rounded-full text-sm ${pathName === '/' ? 'font-semibold bg-[#1A2312] text-[#C2F800]' : 'font-medium text-[#9CA3AF]' } `}
                    >
                        Workouts
                    </Link>
                    <Link
                        href="/my-plan"
                        className={`px-5 py-1.5 rounded-full text-sm ${pathName === '/my-plan' ? 'font-semibold bg-[#1A2312] text-[#C2F800]' : 'font-medium text-[#9CA3AF]' } `}
                    >
                        My Plan
                    </Link>
                </nav>

                <div className="flex items-center gap-4 md:gap-5 text-sm font-medium">
                    <Link
                        href="/my-plan"
                        className="flex items-center gap-2 hover:opacity-90"
                    >
                        <span className="text-gray-300">Plan</span>
                        <span className="bg-[#C2F800] text-black font-extrabold text-xs w-6 h-6 rounded-full flex items-center justify-center">
                            0
                        </span>
                    </Link>

                    <Link
                        href="/my-plan"
                        className="flex items-center gap-2 hover:opacity-90"
                    >
                        <span className="text-gray-400">Saved</span>
                        <span className="border border-gray-600 text-gray-300 font-bold text-xs w-6 h-6 rounded-full flex items-center justify-center">
                            0
                        </span>
                    </Link>

                    <div className="dropdown dropdown-end sm:hidden">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle btn-xs text-gray-300"
                        >
                            <CiMenuBurger className="w-5 h-5" />
                        </div>
                        <ul
                            tabIndex={0}
                            className="dropdown-content menu z-[1] p-2 shadow-lg bg-black border border-gray-800/80 rounded-2xl w-40 mt-3 gap-1"
                        >
                            <li>
                                <Link
                                    href="/"
                                    className={`px-5 py-1.5 rounded-full text-sm ${pathName === '/' ? 'font-semibold bg-[#1A2312] text-[#C2F800]' : 'font-medium text-[#9CA3AF]' } `}
                                >
                                    Workouts
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/my-plan"
                                    className={`px-5 py-1.5 rounded-full text-sm ${pathName === '/my-plan' ? 'font-semibold bg-[#1A2312] text-[#C2F800]' : 'font-medium text-[#9CA3AF]' } `}
                                >
                                    My Plan
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
