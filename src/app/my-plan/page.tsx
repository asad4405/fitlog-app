'use client';
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import { FiCheck, FiClock, FiX } from "react-icons/fi";
import { IoFlameOutline, IoStarOutline } from "react-icons/io5";
import { WorkoutContext } from "@/context/WorkoutContext";

const MyPlan = () => {
    const [activeTab, setActiveTab] = useState<"today" | "saved">("today");
    const { todaysPlan, setTodaysPlan, wishlistsPlan, setWishlistsPlan } = useContext(WorkoutContext);

    const totalExercises = todaysPlan.length || 0;
    const totalMinutes = todaysPlan.reduce((accumulator, current) => accumulator + (Number(current.duration) || 0), 0) || 0;
    const totalCalories = todaysPlan.reduce((accumulator, current) => accumulator + (Number(current.caloriesBurned) || 0), 0) || 0;

    const handleRemoveFromToday = (id: number) => {
        setTodaysPlan((workout) => workout.filter((item) => item.id !== id));
    };

    const handleRemoveFromSaved = (id: number) => {
        setWishlistsPlan((workout) => workout.filter((item) => item.id !== id));
    };

    return (
        <section className="bg-black text-white py-8 w-full">
            <div className="container mx-auto px-4 w-full space-y-6">
                <div className="space-y-1">
                    <h2 className="text-2xl sm:text-3xl font-black tracking-wider uppercase text-white font-sans">
                        MY PLAN
                    </h2>
                    <p className="text-gray-400 text-xs sm:text-sm">
                        Cap of five lifts for today. Finish them, then load more.
                    </p>
                </div>

                <div className="bg-[#1a1c21] border border-gray-800/80 rounded-2xl p-4 sm:p-6 md:p-8 grid grid-cols-3 divide-x divide-gray-800/80">
                    <div className="space-y-1 sm:space-y-2 pr-2 sm:pr-6">
                        <span className="text-gray-400 text-[10px] sm:text-sm font-medium block">
                            Exercises
                        </span>
                        <span className="text-2xl sm:text-4xl md:text-5xl font-black text-[#ccff00] block">
                            {totalExercises}
                        </span>
                    </div>

                    <div className="space-y-1 sm:space-y-2 px-3 sm:px-6 md:px-8">
                        <span className="text-gray-400 text-[10px] sm:text-sm font-medium block">
                            Minutes
                        </span>
                        <span className="text-2xl sm:text-4xl md:text-5xl font-black text-white block">
                            {totalMinutes}
                        </span>
                    </div>

                    <div className="space-y-1 sm:space-y-2 pl-3 sm:pl-6 md:pl-8">
                        <span className="text-gray-400 text-[10px] sm:text-sm font-medium block">
                            Calories
                        </span>
                        <span className="text-2xl sm:text-4xl md:text-5xl font-black text-white block">
                            {totalCalories}
                        </span>
                    </div>
                </div>

                <div className="flex items-center justify-between gap-4 pt-2 flex-wrap">
                    <div className="flex items-center border border-gray-800 p-1 rounded-xl gap-2">
                        <button
                            type="button"
                            onClick={() => setActiveTab("today")}
                            className={`btn btn-xs sm:btn-sm font-bold capitalize rounded-xl min-h-0 px-4 transition-all ${
                                activeTab === "today"
                                    ? "bg-[#252830] text-white border-none shadow-sm"
                                    : "bg-transparent border-none text-gray-400 hover:text-white"
                            }`}
                        >
                            Today's Plan
                        </button>
                        <button
                            type="button"
                            onClick={() => setActiveTab("saved")}
                            className={`btn btn-xs sm:btn-sm font-bold capitalize rounded-xl min-h-0 px-4 transition-all ${
                                activeTab === "saved"
                                    ? "bg-[#252830] text-white border-none shadow-sm"
                                    : "bg-transparent border-none text-gray-400 hover:text-white"
                            }`}
                        >
                            Saved
                        </button>
                    </div>

                    <div className="flex items-center gap-2 text-xs ml-auto">
                        <span className="text-gray-400 font-medium">
                            Sort By
                        </span>
                        <select className="select select-bordered select-xs sm:select-sm bg-[#181a20] border-gray-800/80 text-white font-semibold rounded-xl focus:outline-none min-h-0 h-9">
                            <option>Duration</option>
                            <option>Calories</option>
                            <option>Rating</option>
                        </select>
                    </div>
                </div>

                {activeTab === "today" && (
                    <div className="w-full">
                        {!todaysPlan || todaysPlan.length === 0 ? (
                            <div className="border border-dashed border-gray-800 rounded-3xl bg-[#121418] py-16 px-4 flex flex-col items-center justify-center text-center space-y-3 my-4">
                                <h3 className="text-xl sm:text-2xl font-black tracking-wide text-white uppercase font-sans">
                                    NOTHING HERE YET
                                </h3>
                                <p className="text-gray-400 text-xs sm:text-sm font-medium">
                                    Browse the library and add a lift to get today moving.
                                </p>
                                <Link
                                    href="/workouts"
                                    className="btn btn-sm sm:btn-md bg-[#ccff00] hover:bg-[#b8e600] text-black font-extrabold border-none rounded-full px-6 normal-case mt-2 transition-transform active:scale-95 shadow-[0_0_20px_rgba(204,255,0,0.2)]"
                                >
                                    Go to workouts
                                </Link>
                            </div>
                        ) : (
                            <div className="space-y-4 w-full">
                                {todaysPlan.map((workout) => (
                                    <div
                                        key={workout.id}
                                        className="bg-[#181a20] border border-gray-800/80 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 w-full"
                                    >
                                        <div className="flex items-center gap-4 w-full sm:w-auto">
                                            <div className="relative w-28 h-20 sm:w-36 sm:h-20 rounded-xl overflow-hidden bg-[#22252b] shrink-0">
                                                <Image
                                                    src={workout.image || "/demo-workout.png"}
                                                    alt={workout.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div className="space-y-1">
                                                <h3 className="text-sm sm:text-base font-extrabold uppercase text-white tracking-wide">
                                                    {workout.name}
                                                </h3>
                                                <p className="text-gray-400 text-xs font-medium">
                                                    {workout.equipment || "Bodyweight"}
                                                </p>
                                                <div className="flex items-center gap-3 pt-1 text-gray-400 text-xs font-medium">
                                                    <div className="flex items-center gap-1">
                                                        <FiClock className="w-3.5 h-3.5" />
                                                        <span>{workout.duration} min</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <IoFlameOutline className="w-3.5 h-3.5 text-[#ccff00]" />
                                                        <span>{workout.caloriesBurned} kcal</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <IoStarOutline className="w-3.5 h-3.5" />
                                                        <span>{workout.rating}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end border-t sm:border-t-0 pt-3 sm:pt-0 border-gray-800/60">
                                            <Link
                                                href={`/workouts/${workout.id}`}
                                                className="btn btn-xs sm:btn-sm bg-transparent hover:bg-gray-800/50 border-gray-700/80 hover:border-gray-500 text-gray-300 hover:text-white font-bold rounded-xl px-4 normal-case"
                                            >
                                                View Details
                                            </Link>
                                            <button className="btn btn-xs sm:btn-sm bg-[#ccff00] hover:bg-[#b8e600] text-black font-extrabold border-none rounded-xl px-4 normal-case">
                                                <FiCheck className="w-4 h-4 stroke-[3]" />
                                                Mark as Done
                                            </button>
                                            <button
                                                onClick={() => handleRemoveFromToday(workout.id)}
                                                className="btn btn-ghost btn-xs sm:btn-sm btn-circle text-gray-500 hover:text-gray-300"
                                            >
                                                <FiX className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}

                {activeTab === "saved" && (
                    <div className="w-full">
                        {!wishlistsPlan || wishlistsPlan.length === 0 ? (
                            <div className="border border-dashed border-gray-800 rounded-3xl bg-[#121418] py-16 px-4 flex flex-col items-center justify-center text-center space-y-3 my-4">
                                <h3 className="text-xl sm:text-2xl font-black tracking-wide text-white uppercase font-sans">
                                    NOTHING HERE YET
                                </h3>
                                <p className="text-gray-400 text-xs sm:text-sm font-medium">
                                    Browse the library and add a lift to get today moving.
                                </p>
                                <Link
                                    href="/workouts"
                                    className="btn btn-sm sm:btn-md bg-[#ccff00] hover:bg-[#b8e600] text-black font-extrabold border-none rounded-full px-6 normal-case mt-2 transition-transform active:scale-95 shadow-[0_0_20px_rgba(204,255,0,0.2)]"
                                >
                                    Go to workouts
                                </Link>
                            </div>
                        ) : (
                            <div className="space-y-4 w-full">
                                {wishlistsPlan.map((workout) => (
                                    <div
                                        key={workout.id}
                                        className="bg-[#181a20] border border-gray-800/80 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 w-full"
                                    >
                                        <div className="flex items-center gap-4 w-full sm:w-auto">
                                            <div className="relative w-28 h-20 sm:w-36 sm:h-20 rounded-xl overflow-hidden bg-[#22252b] shrink-0">
                                                <Image
                                                    src={workout.image || "/demo-workout.png"}
                                                    alt={workout.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div className="space-y-1">
                                                <h3 className="text-sm sm:text-base font-extrabold uppercase text-white tracking-wide">
                                                    {workout.name}
                                                </h3>
                                                <p className="text-gray-400 text-xs font-medium">
                                                    {workout.equipment || "Bodyweight"}
                                                </p>
                                                <div className="flex items-center gap-3 pt-1 text-gray-400 text-xs font-medium">
                                                    <div className="flex items-center gap-1">
                                                        <FiClock className="w-3.5 h-3.5" />
                                                        <span>{workout.duration} min</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <IoFlameOutline className="w-3.5 h-3.5 text-[#ccff00]" />
                                                        <span>{workout.caloriesBurned} kcal</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <IoStarOutline className="w-3.5 h-3.5" />
                                                        <span>{workout.rating}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end border-t sm:border-t-0 pt-3 sm:pt-0 border-gray-800/60">
                                            <Link
                                                href={`/workouts/${workout.id}`}
                                                className="btn btn-xs sm:btn-sm bg-transparent hover:bg-gray-800/50 border-gray-700/80 hover:border-gray-500 text-gray-300 hover:text-white font-bold rounded-xl px-4 normal-case"
                                            >
                                                View Details
                                            </Link>
                                            <button
                                                onClick={() => handleRemoveFromSaved(workout.id)}
                                                className="btn btn-ghost btn-xs sm:btn-sm btn-circle text-gray-500 hover:text-gray-300"
                                            >
                                                <FiX className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
};

export default MyPlan;