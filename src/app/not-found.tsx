import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

const NotFound = () => {
    return (
        <main className="min-h-screen bg-black text-white flex items-center justify-center px-4">
            <div className="text-center space-y-5">
                <p className="text-[#C2F800] text-sm font-bold tracking-[0.3em] uppercase">
                    FITLOG
                </p>

                <h1 className="text-7xl sm:text-8xl font-black tracking-tight">
                    404
                </h1>

                <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide">
                    Page Not Found
                </h2>

                <p className="text-gray-400 text-sm max-w-md mx-auto">
                    The workout you're looking for doesn't exist or the page
                    may have been moved.
                </p>

                <Link
                    href="/"
                    className="inline-flex items-center gap-2 bg-[#C2F800] hover:bg-[#b8e600] text-black font-extrabold text-sm px-6 py-3 rounded-xl transition-colors"
                >
                    <FiArrowLeft className="w-4 h-4" />
                    BACK TO WORKOUTS
                </Link>
            </div>
        </main>
    );
};

export default NotFound;