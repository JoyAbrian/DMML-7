import React from 'react';
import {Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger} from "@/components/ui/drawer";

interface Prop {
    title: string;
    description: string;
}

const Drawers = (props: Prop) => {
    return (
        <Drawer>
            <DrawerTrigger className="block text-gray-700 text-sm font-bold mb-2">{props.title}</DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className={"px-14 pb-10"}>
                    <div className={"flex justify-center"}>
                        <DrawerTitle>{props.title}</DrawerTitle>
                    </div>
                    <DrawerDescription className="text-xl pt-6">{props.description}</DrawerDescription>
                </DrawerHeader>
            </DrawerContent>
        </Drawer>
    );
};

export default Drawers;