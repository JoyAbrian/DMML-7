import React from 'react';
import {cookies} from "next/headers";
import {redirect} from "next/navigation";

interface Response {
    open: number;
    high: number;
    low: number;
    volume: number;
    year: number;
    month: number;
    day: number;
    day_of_week: number;
    quarter: number;
    sma_20: number;
    sma_50: number;
    sma_100: number;
    return: number;
    volatility_20: number;
    volatility_50: number;
}

const InputForm = () => {
    async function onSubmitt(formData: FormData) {
        "use server"
        const open = formData.get("open");
        const high = formData.get("high");
        const low = formData.get("low");
        const volume = formData.get("volume");
        const year = formData.get("year");
        const month = formData.get("month");
        const day = formData.get("day");
        const day_of_week = formData.get("day_of_week");
        const quarter = formData.get("quarter");
        const sma_20 = formData.get("sma_20");
        const sma_50 = formData.get("sma_50");
        const sma_100 = formData.get("sma_100");
        const return_ = formData.get("return");
        const volatility_20 = formData.get("volatility_20");
        const volatility_50 = formData.get("volatility_50");

        const response = await fetch("http://localhost:4000/predict", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                open,
                high,
                low,
                volume,
                year,
                month,
                day,
                day_of_week,
                quarter,
                sma_20,
                sma_50,
                sma_100,
                return:return_,
                volatility_20,
                volatility_50
            }),
        });

        const result = await response.json();

        if (response.ok) {
            cookies().set("close", result.close)
            console.log("ok")
            redirect("/result")
        } else {
            console.log(result)
        }

    }



    return (
        <>
            <form action={onSubmitt}>
            <div className={"flex justify-center mt-10"}>
                    <div className="mr-3 w-1/2">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="open">Open
                            Price: </label>
                        <input
                            className="mb-4 text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                            type="number" name="open"
                            step="0.01"  required/>

                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="high">High
                            Price: </label>
                        <input
                            className="mb-4 text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                            type="number" step="0.01" 
                            name="high" required/>

                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="low">Low Price: </label>
                        <input
                            className="mb-4 text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                            type="number" step="0.01" 
                            name="low"
                            required/>

                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="volume">Volume: </label>
                        <input
                            className="mb-4 text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                            type="number" 
                            name="volume"
                            required/>

                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="year">Year: </label>
                        <input
                            className="mb-4 text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                            type="number" name="year"
                            min="2000" max="2024" step="1"
                            required/>

                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="month">Month: </label>
                        <input
                            className="mb-4 text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                            type="number"
                            min="1" max="12" step="1"
                            name="month"
                            required/>

                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="day">Day: </label>
                        <input
                            className="mb-4 text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                            type="number" name="day"
                            min="1" max="31" step="1"
                            required/>

                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="day_of_week">Day of
                            Week: </label>
                        <input
                            className="mb-4 text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                            type="number"
                            min="1" max="7" step="1"
                            name="day_of_week" required/>
                    </div>

                    <div className="ml-3 w-1/2">
                        <label className="block text-gray-700 text-sm font-bold mb-2"
                               htmlFor="quarter">Quarter: </label>
                        <input
                            className="mb-4 text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                            type="number" 
                            name="quarter" required/>

                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sma_20">SMA 20: </label>
                        <input
                            className="mb-4 text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                            type="number" step="0.01"
                            
                            name="sma_20" required/>

                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sma_50">SMA 50: </label>
                        <input
                            className="mb-4 text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                            type="number" step="0.01"
                            
                            name="sma_50" required/>

                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sma_100">SMA
                            100: </label>
                        <input
                            className="mb-4 text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                            type="number"  step="0.01"
                            
                            name="sma_100" required/>

                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="return">Return: </label>
                        <input
                            className="mb-4 text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                            type="number" step="0.01" name="return"
                             required/>

                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="volatility_20">Volatility
                            20: </label>
                        <input
                            className="mb-4 text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                            type="number"
                            step="0.01"
                            name="volatility_20" required/>

                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="volatility_50">Volatility
                            50: </label>
                        <input
                            className="mb-4 text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                            type="number"
                            step="0.01"
                            name="volatility_50" required/>
                    </div>
                </div>
                <button
                    type="submit"
                    className="mt-6 w-full items-center gap-2 h-12 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-xl hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185]"
                >Submit
                </button>

            </form>

        </>
    );
};

export default InputForm;