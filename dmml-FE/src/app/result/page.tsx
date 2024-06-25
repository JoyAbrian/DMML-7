import React from 'react';
import {cookies} from "next/headers";

const Page = () => {
    return (
        <div className={"w-screen h-screen flex justify-center items-center"}>
            {cookies().get("close") ? <p className={"text-xl font-bold font-sans"}>Close Price : {cookies().get("close").value}</p> : <p className={"text-xl font-bold font-sans"}>Close Price :</p>}
        </div>
    );
};

export default Page;