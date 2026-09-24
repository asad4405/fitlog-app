'use client';
import { WorkoutContext } from '@/context/WorkoutContext';
import { WorkoutsType } from '@/types/WorkoutsType';
import { useContext } from 'react';
import { FiCalendar } from 'react-icons/fi';
import { toast } from 'react-toastify';


const TodaysPlanButton = ({workout}: {workout: WorkoutsType}) => {
    const {todaysPlan,setTodaysPlan} = useContext(WorkoutContext);
    const handleTodaysPlan = () => {
        setTodaysPlan([...todaysPlan, workout]);
        toast.success('Success');
    }
    return (
        <div>
            <button onClick={() => handleTodaysPlan()} className="cursor-pointer inline-flex items-center justify-center gap-2 bg-[#C2F800] text-black font-extrabold text-xs px-6 py-3 rounded-xl uppercase ">
                <FiCalendar className="w-4 h-4 stroke-[2.5]" />
                Add to today's plan
            </button>
        </div>
    );
};

export default TodaysPlanButton;