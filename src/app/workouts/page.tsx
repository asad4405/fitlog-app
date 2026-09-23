import Workout from "@/components/homepage/Workout";

const getWorkouts = async () => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const data = await res.json();
    return data;
};

const Workouts = async () => {
    const workouts = await getWorkouts();

    return (
        <section className="bg-black text-white py-12 px-4 md:px-12">
            <div className="container mx-auto">
                <div className="mb-8 space-y-1">
                    <h2 className="text-2xl sm:text-3xl font-black tracking-wider uppercase text-white font-sans">
                        THE LIBRARY
                    </h2>
                    <p className="text-gray-400 text-xs sm:text-sm">
                        Twelve lifts covering every major muscle group.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {workouts.map((workout) => (
                        <Workout key={workout.id} workout={workout}/>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Workouts;