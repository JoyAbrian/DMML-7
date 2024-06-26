import React from 'react';
import {cookies} from "next/headers";
import {redirect} from "next/navigation";
import Drawers from "@/app/Drawers";


const InputForm = () => {
    const openPrice = {
        title: "Open Price",
        explanation: "Harga di mana suatu sekuritas pertama kali diperdagangkan saat pembukaan bursa pada hari perdagangan tertentu."
    };

    const highPrice = {
        title: "High Price",
        explanation: "Harga tertinggi di mana suatu sekuritas diperdagangkan selama periode tertentu."
    };

    const lowPrice = {
        title: "Low Price",
        explanation: "Harga terendah di mana suatu sekuritas diperdagangkan selama periode tertentu."
    };

    const volume = {
        title: "Volume",
        explanation: "Jumlah total saham atau kontrak yang diperdagangkan untuk suatu sekuritas selama periode tertentu."
    };

    const year = {
        title: "Year",
        explanation: "Tahun kalender di mana data perdagangan dicatat."
    };

    const month = {
        title: "Month",
        explanation: "Bulan di mana data perdagangan dicatat."
    };

    const day = {
        title: "Day",
        explanation: "Hari dalam satu bulan (Tanggal) di mana data perdagangan dicatat."
    };

    const dayOfWeek = {
        title: "Day of Week",
        explanation: "Hari tertentu dalam satu pekan di mana data perdagangan dicatat."
    };

    const sma20 = {
        title: "SMA 20",
        explanation: "Rata-Rata Bergerak Sederhana 20-hari, indikator teknis yang menghitung harga rata-rata suatu sekuritas selama 20 hari terakhir."
    };

    const sma50 = {
        title: "SMA 50",
        explanation: "Rata-Rata Bergerak Sederhana 50-hari, indikator teknis yang menghitung harga rata-rata suatu sekuritas selama 50 hari terakhir."
    };

    const sma100 = {
        title: "SMA 100",
        explanation: "Rata-Rata Bergerak Sederhana 100-hari, indikator teknis yang menghitung harga rata-rata suatu sekuritas selama 100 hari terakhir."
    };

    const returnMetric = {
        title: "Return",
        explanation: "Keuntungan atau kerugian yang dihasilkan oleh suatu sekuritas selama periode tertentu, biasanya dinyatakan sebagai persentase."
    };

    const volatility20 = {
        title: "Volatility 20",
        explanation: "Volatilitas 20-hari, ukuran statistik dari penyebaran pengembalian suatu sekuritas selama 20 hari terakhir."
    };

    const volatility50 = {
        title: "Volatility 50",
        explanation: "Volatilitas 50-hari, ukuran statistik dari penyebaran pengembalian suatu sekuritas selama 50 hari terakhir."
    };



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
            redirect("/result")
        } else {
            console.log(result)
        }

    }



    return (
            <form>
            <div className={"flex justify-center mt-20 items-center"}>
                    <div className="mr-3 w-1/2">
                        <Drawers title={openPrice.title} description={openPrice.explanation} />
                        <input
                            className="mb-4 text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                            type="number" name="open"
                            step="any"  required/>

                        <Drawers title={highPrice.title} description={highPrice.explanation} />
                        <input
                            className="mb-4 text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                            type="number" step="any" 
                            name="high" required/>

                        <Drawers title={lowPrice.title} description={lowPrice.explanation} />
                        <input
                            className="mb-4 text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                            type="number" step="any" 
                            name="low"
                            required/>

                        <Drawers title={volume.title} description={volume.explanation} />
                        <input
                            className="mb-4 text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                            type="number" 
                            name="volume"
                            required/>

                        <Drawers title={year.title} description={year.explanation} />
                        <input
                            className="mb-4 text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                            type="number" name="year"
                            min="2000" max="2024" step="1"
                            required/>

                        <Drawers title={month.title} description={month.explanation} />
                        <input
                            className="mb-4 text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                            type="number"
                            min="1" max="12" step="1"
                            name="month"
                            required/>

                        <Drawers title={day.title} description={day.explanation} />
                        <input
                            className="mb-4 text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                            type="number" name="day"
                            min="1" max="31" step="1"
                            required/>
                    </div>

                    <div className="ml-3 w-1/2">
                        <Drawers title={dayOfWeek.title} description={dayOfWeek.explanation} />
                        <input
                            className="mb-4 text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                            type="number"
                            min="1" max="7" step="1"
                            name="day_of_week" required/>

                        <Drawers title={sma20.title} description={sma20.explanation} />
                        <input
                            className="mb-4 text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                            type="number" step="any"
                            
                            name="sma_20" required/>

                        <Drawers title={sma50.title} description={sma50.explanation} />
                        <input
                            className="mb-4 text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                            type="number" step="any"
                            
                            name="sma_50" required/>

                        <Drawers title={sma100.title} description={sma100.explanation} />
                        <input
                            className="mb-4 text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                            type="number"  step="any"
                            
                            name="sma_100" required/>

                        <Drawers title={returnMetric.title} description={returnMetric.explanation} />
                        <input
                            className="mb-4 text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                            type="number" step="any" name="return"
                             required/>

                        <Drawers title={volatility20.title} description={volatility20.explanation} />
                        <input
                            className="mb-4 text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                            type="number"
                            step="any"
                            name="volatility_20" required/>

                        <Drawers title={volatility50.title} description={volatility50.explanation} />
                        <input
                            className="mb-4 text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                            type="number"
                            step="any"
                            name="volatility_50" required/>
                    </div>
                </div>
                <button
                    type="submit"
                    formAction={onSubmitt}
                    className="mt-6 w-full items-center gap-2 h-12 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-xl hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185]"
                >Submit
                </button>

            </form>
    );
};

export default InputForm;