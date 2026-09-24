'use client';
import { WorkoutsType } from "@/types/WorkoutsType";
import React, { createContext, ReactNode, useState } from "react";

interface WorkoutContextProps {
    todaysPlan: WorkoutsType[];
    setTodaysPlan: React.Dispatch<React.SetStateAction<WorkoutsType[]>>;
    wishlistsPlan: WorkoutsType[];
    setWishlistsPlan: React.Dispatch<React.SetStateAction<WorkoutsType[]>>;
}

export const WorkoutContext = createContext<WorkoutContextProps>({
    todaysPlan: [],
    setTodaysPlan: () => {},
    wishlistsPlan: [],
    setWishlistsPlan: () => {},
});

const WorkoutProvidor = ({ children }: { children: ReactNode }) => {
    const [todaysPlan,setTodaysPlan] = useState<WorkoutsType[]>([]);
    const [wishlistsPlan,setWishlistsPlan] = useState<WorkoutsType[]>([]);

    const sharedData = {todaysPlan,setTodaysPlan,wishlistsPlan,setWishlistsPlan};

    return <WorkoutContext.Provider value={sharedData}>{children}</WorkoutContext.Provider>;
};

export default WorkoutProvidor;
