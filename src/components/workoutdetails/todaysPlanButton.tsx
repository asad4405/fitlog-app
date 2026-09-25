"use client";
import { WorkoutContext } from "@/context/WorkoutContext";
import { WorkoutsType } from "@/types/WorkoutsType";
import { useContext } from "react";
import { FiCalendar } from "react-icons/fi";
import { toast } from "react-toastify";

const TodaysPlanButton = ({ workout }: { workout: WorkoutsType }) => {
    const { todaysPlan, setTodaysPlan } = useContext(WorkoutContext);

    const isTodaysPlan = todaysPlan.some((plan) => plan.id === workout.id);

    const handleTodaysPlan = () => {
        if (isTodaysPlan) {
            toast.error("Already added to today's plan");
        } else if (todaysPlan.length >= 5) {
            toast.error("Today's plan can contain maximum 5 workouts");
        } else {
            setTodaysPlan([...todaysPlan, workout]);
            toast.success("Added to today's plan");
        }
    };

    return (
        <div>
            <button
                onClick={handleTodaysPlan}
                className={`cursor-pointer inline-flex items-center justify-center gap-2 font-extrabold text-xs px-6 py-3 rounded-xl uppercase ${
                    isTodaysPlan
                        ? "bg-[#1F2937] text-gray-300 cursor-not-allowed"
                        : "bg-[#C2F800] text-black"
                }`}
            >
                <FiCalendar className="w-4 h-4 stroke-[2.5]" />

                {isTodaysPlan ? "Added to plan" : "Add to today's plan"}
            </button>
        </div>
    );
};

export default TodaysPlanButton;
