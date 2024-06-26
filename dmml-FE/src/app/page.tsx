import InputForm from "@/app/InputForm";

export default function Home() {
    return (

        <div className="flex justify-center">
            <div>
                <h1 className="animate-fade-right animate-once animate-delay-500 text-4xl font-bold font-mono text-center mt-10">Stock Prediction</h1>
                <div className={"animate-jump-in animate-once"}>
                    <InputForm/>
                </div>
            </div>
        </div>

    );
}
