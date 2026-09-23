import { WorkoutsType } from "@/types/WorkoutsType";
import Image from "next/image";
import { FiCalendar, FiBookmark } from "react-icons/fi";

interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function WorkoutDetailsPage({ params }: PageProps) {
    const { id } = await params;

    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch workout details");
    }

    const workout: WorkoutsType = await res.json();

    return (
        <main className="min-h-screen bg-black text-white py-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start">
                
                <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden bg-[#16181e] shadow-2xl">
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        fill
                        priority
                        className="object-cover object-center"
                    />
                </div>

                <div className="space-y-6 flex flex-col justify-between h-full">
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight uppercase text-white font-sans">
                                {workout.name}
                            </h1>
                            <p className="text-gray-400 text-sm leading-relaxed max-w-xl">
                                {workout.description}
                            </p>

                            <div className="flex items-center gap-2 pt-2 flex-wrap">
                                {workout.muscleGroups?.map((group, index) => (
                                    <span
                                        key={index}
                                        className="bg-[#C2F800] text-black font-bold text-[11px] px-3 py-1 rounded-full uppercase tracking-wide"
                                    >
                                        {group}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="bg-[#14161d] border border-gray-800/60 rounded-2xl divide-y divide-gray-800/40 text-xs sm:text-sm px-5 py-1">
                            <div className="flex justify-between items-center py-3">
                                <span className="text-gray-400 uppercase font-semibold text-[11px] tracking-wider">
                                    EQUIPMENT
                                </span>
                                <span className="text-gray-200 font-medium">
                                    {workout.equipment}
                                </span>
                            </div>
                            <div className="flex justify-between items-center py-3">
                                <span className="text-gray-400 uppercase font-semibold text-[11px] tracking-wider">
                                    DIFFICULTY
                                </span>
                                <span className="text-gray-200 font-medium">
                                    {workout.difficulty}
                                </span>
                            </div>
                            <div className="flex justify-between items-center py-3">
                                <span className="text-gray-400 uppercase font-semibold text-[11px] tracking-wider">
                                    SETS
                                </span>
                                <span className="text-gray-200 font-medium">
                                    {workout.sets}
                                </span>
                            </div>
                            <div className="flex justify-between items-center py-3">
                                <span className="text-gray-400 uppercase font-semibold text-[11px] tracking-wider">
                                    REPS
                                </span>
                                <span className="text-gray-200 font-medium">
                                    {workout.reps}
                                </span>
                            </div>
                            <div className="flex justify-between items-center py-3">
                                <span className="text-gray-400 uppercase font-semibold text-[11px] tracking-wider">
                                    DURATION
                                </span>
                                <span className="text-gray-200 font-medium">
                                    {workout.duration} min
                                </span>
                            </div>
                            <div className="flex justify-between items-center py-3">
                                <span className="text-gray-400 uppercase font-semibold text-[11px] tracking-wider">
                                    CALORIES
                                </span>
                                <span className="text-gray-200 font-medium">
                                    {workout.caloriesBurned} kcal
                                </span>
                            </div>
                            <div className="flex justify-between items-center py-3">
                                <span className="text-gray-400 uppercase font-semibold text-[11px] tracking-wider">
                                    RATING
                                </span>
                                <span className="text-gray-200 font-medium">
                                    {workout.rating}
                                </span>
                            </div>
                        </div>

                        <div className="space-y-3 pt-1">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-200">
                                INSTRUCTIONS
                            </h3>
                            <ol className="space-y-2 text-xs sm:text-sm text-gray-400 list-none">
                                {workout.instructions?.map((step, idx) => (
                                    <li
                                        key={idx}
                                        className="flex gap-2.5 leading-relaxed"
                                    >
                                        <span className="font-semibold text-gray-400">
                                            {idx + 1}.
                                        </span>
                                        <span>{step}</span>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 pt-4">
                        <button className="inline-flex items-center justify-center gap-2 bg-[#C2F800] text-black font-extrabold text-xs px-6 py-3 rounded-xl uppercase ">
                            <FiCalendar className="w-4 h-4 stroke-[2.5]" />
                            Add to today's plan
                        </button>
                        <button className="inline-flex items-center justify-center gap-2 bg-[#0F1115] border border-[#E5E7EB]-800 text-gray-300 font-bold text-xs px-5 py-3 rounded-xl uppercase ">
                            <FiBookmark className="w-4 h-4 stroke-[2.5]" />
                            Save for later
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}
