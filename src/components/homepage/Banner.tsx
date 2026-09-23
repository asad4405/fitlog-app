import Image from "next/image";

export default function Banner() {
    return (
        <section className="bg-black text-white py-6 px-4 md:px-12">
            <div className="container mx-auto bg-[#15171D] border border-[#222630] rounded-2xl p-8 sm:p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="w-full md:max-w-48 space-y-6">
                    <span className="text-[#C2F800] text-[11px] font-bold tracking-widest uppercase block">
                        WORKOUT LIBRARY
                    </span>

                    <h1 className="text-3xl sm:text-4xl md:text-[44px] font-black tracking-tight leading-[1.08] uppercase text-white font-sans">
                        TRAIN WITH INTENT. LOG EVERY SET.
                    </h1>

                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-100">
                        FitLog is a dark, no-nonsense gym companion: pick a
                        lift, lock it into today's plan, and watch the week's
                        work add up.
                    </p>

                    <div className="pt-2">
                        <a
                            href=""
                            className="inline-flex items-center justify-center bg-[#C2F800] text-black font-extrabold text-xs px-5 py-3 rounded-lg hover:opacity-90 transition-opacity uppercase tracking-wider"
                        >
                            BROWSE WORKOUTS
                        </a>
                    </div>
                </div>

                <div className="flex-1 flex justify-center md:justify-end w-full">
                    <div className="relative w-full max-w-70 sm:max-w-[320px] md:max-w-48 h-65 sm:h-80 md:h-87.5">
                        <Image
                            src="/assets/banner.png"
                            alt="FitLog Banner Gym Machine"
                            fill
                            priority
                            className="object-contain object-right"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
