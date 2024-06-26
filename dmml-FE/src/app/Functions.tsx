"use server"


export async function onSubmitt(prevState: any, formData: FormData) {
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
            return: return_,
            volatility_20,
            volatility_50
        }),
    });

    const result = await response.json();

    if (response.ok) {
        return {message: result.close}
    } else {
        return {message: "Failed to predict"}
    }
}