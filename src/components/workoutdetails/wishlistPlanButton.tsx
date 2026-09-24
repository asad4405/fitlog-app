"use client";
import { WorkoutContext } from "@/context/WorkoutContext";
import { WorkoutsType } from "@/types/WorkoutsType";
import { useContext } from "react";
import { FiBookmark } from "react-icons/fi";
import { toast } from "react-toastify";

const WishlistPlanButton = ({ workout }: { workout: WorkoutsType }) => {
    const { wishlistsPlan, setWishlistsPlan } = useContext(WorkoutContext);

    const isWishlistsPlan = wishlistsPlan.some(
        (plan) => plan.id === workout.id,
    );
    const handleWishlistsPlan = () => {
        if (isWishlistsPlan) {
            toast.error("Already added saved plan");
        } else {
            setWishlistsPlan([...wishlistsPlan, workout]);
            toast.success(`Saved for later`);
        }
    };
    return (
        <div>
            <button
                onClick={() => handleWishlistsPlan()}
                className={`cursor-pointer inline-flex items-center justify-center gap-2 border font-bold text-xs px-5 py-3 rounded-xl uppercase ${
                    isWishlistsPlan
                        ? "bg-[#C2F800] border-[#C2F800] text-black"
                        : "bg-[#0F1115] border-gray-800 text-gray-300"
                }`}
            >
                <FiBookmark className="w-4 h-4 stroke-[2.5]" />
                {isWishlistsPlan ? "Saved" : "Save for later"}
            </button>
        </div>
    );
};

export default WishlistPlanButton;
