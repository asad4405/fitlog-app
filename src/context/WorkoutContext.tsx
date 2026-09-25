"use client";

import { WorkoutsType } from "@/types/WorkoutsType";
import React, {
    createContext,
    ReactNode,
    useEffect,
    useState,
} from "react";

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
    const [todaysPlan, setTodaysPlan] = useState<WorkoutsType[]>([]);
    const [wishlistsPlan, setWishlistsPlan] = useState<WorkoutsType[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const savedTodaysPlan = localStorage.getItem("todaysPlan");
        const savedWishlistsPlan = localStorage.getItem("wishlistsPlan");

        if (savedTodaysPlan) {
            setTodaysPlan(JSON.parse(savedTodaysPlan));
        }

        if (savedWishlistsPlan) {
            setWishlistsPlan(JSON.parse(savedWishlistsPlan));
        }

        setIsLoaded(true);
    }, []);

    useEffect(() => {
        if (!isLoaded) return;

        localStorage.setItem(
            "todaysPlan",
            JSON.stringify(todaysPlan)
        );
    }, [todaysPlan, isLoaded]);

    useEffect(() => {
        if (!isLoaded) return;

        localStorage.setItem(
            "wishlistsPlan",
            JSON.stringify(wishlistsPlan)
        );
    }, [wishlistsPlan, isLoaded]);

    const sharedData = {
        todaysPlan,
        setTodaysPlan,
        wishlistsPlan,
        setWishlistsPlan,
    };

    return (
        <WorkoutContext.Provider value={sharedData}>
            {children}
        </WorkoutContext.Provider>
    );
};

export default WorkoutProvidor;