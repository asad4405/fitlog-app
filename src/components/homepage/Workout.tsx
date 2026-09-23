import Image from "next/image";
import { FiClock } from "react-icons/fi";
import { IoFlameOutline, IoStarOutline } from "react-icons/io5";

const Workout = ({workout}) => {
    return (
        <div
            key={workout.id}
            className="bg-[#1a1c21] border border-gray-800/80 rounded-2xl overflow-hidden flex flex-col justify-between"
        >
            <div className="relative w-full h-[180px] sm:h-[200px] bg-[#22252b]">
                <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    className="object-cover object-center"
                />
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                    <div className="flex items-center gap-2 flex-wrap">
                        {workout.muscleGroups?.map((group, index) => (
                            <span
                                key={index}
                                className="bg-[#ccff00] text-black font-extrabold text-[10px] px-2.5 py-0.5 rounded-full uppercase tracking-wider"
                            >
                                {group}
                            </span>
                        ))}
                    </div>

                    <div>
                        <h3 className="text-base sm:text-lg font-black tracking-wide text-white uppercase mt-1">
                            {workout.name}
                        </h3>
                        <p className="text-gray-400 text-xs mt-0.5 font-medium">
                            {workout.equipment}
                        </p>
                    </div>
                </div>

                <div className="pt-3 border-t border-gray-800/60 flex items-center justify-between text-gray-400 text-xs">
                    <div className="flex items-center gap-1.5">
                        <FiClock />
                        <span>{workout.duration} min</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <IoFlameOutline />
                        <span>{workout.caloriesBurned} kcal</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <IoStarOutline />
                        <span>{workout.rating}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Workout;
