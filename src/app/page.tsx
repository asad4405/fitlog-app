'use client';
import { toast } from "react-toastify";

export default function Home() {
    const handleCheckToastfy = () => {
        toast.success("Check Toastify");
    };
    return (
        <div className="my-5 text-center">
            <h3 className="text-2xl">Hello Nextjs</h3>
            <button className="btn bg-success text-white" onClick={handleCheckToastfy} >Check Toastify</button>
        </div>
    );
}
