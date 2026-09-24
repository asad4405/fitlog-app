import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-black border-t border-gray-800/60 text-gray-400 py-6 w-full">
            <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/assets/logo.png"
                        alt="Logo"
                        width={28}
                        height={28}
                        className="object-contain"
                    />
                    <span className="text-white font-black tracking-wider uppercase text-lg font-sans">
                        FITLOG
                    </span>
                </Link>

                <p className="text-xs sm:text-sm font-medium text-gray-500 text-center sm:text-right">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>
            </div>
        </footer>
    );
};

export default Footer;