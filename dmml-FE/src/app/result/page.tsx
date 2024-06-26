import React from 'react';
import {cookies} from "next/headers";
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"


const Page = () => {

    return (
        <div className={"w-screen h-screen flex justify-center items-center"}>
            <div className={""}>
                {cookies().get("close") ? <p className={"text-xl font-bold font-sans"}>Close Price : {cookies().get("close").value}</p> : <p className={"text-xl font-bold font-sans"}>Close Price :</p>}
                <div className="mt-9 flex justify-center" >
                    <Drawer>
                        <DrawerTrigger className="bg-black rounded-xl text-white w-36 h-16 font-mono ">Apa itu Close Price?</DrawerTrigger>
                        <DrawerContent>
                            <DrawerHeader className={"px-14 pb-10"}>
                                <div className={"flex justify-center"}>
                                    <DrawerTitle>Close Price</DrawerTitle>
                                </div>
                                <DrawerDescription className="text-xl pt-6">Close Price adalah istilah dalam dunia investasi sebagai nilai terakhir yang muncul pada transaksi saham perusahaan, sebelum bursa ditutup.

                                    Saat sedang dilakukan transaksi saham pada suatu bursa, akan muncul istilah closing price pada sesi akhir jual beli.

                                    Biasanya, hal ini digunakan sebagai dasar penghitungan indeks saham suatu perusahaan, sebelum jual beli dilanjutkan pada hari berikutnya.

                                    Perlu diketahui, setelah penutupan bursa saham, biasanya akan ada pengumuman mengenai pendapatan, pembagian saham, serta dividen.

                                    Hal tersebut dilakukan untuk memberikan waktu bagi para trader atau investor, agar memahami berita tersebut dengan baik sebelum mengambil keputusan apapun nantinya.</DrawerDescription>
                            </DrawerHeader>
                        </DrawerContent>
                    </Drawer>
                </div>
            </div>
        </div>
    );
};

export default Page;