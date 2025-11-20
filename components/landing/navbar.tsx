import React, { useState } from "react";
import { Menu, Phone, Clock, MapPin, ChevronDown } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { navItems } from "@/app/constants/assets";
import Link from "next/link";

export default function Navbar() {
    const [open, setOpen] = useState(false);



    return (
        <nav className="w-full border-b border-dashed border-[#F97316] shadow-sm bg-[#FEFBEA]">
            <div className="flex justify-end">
                <div className="hidden w-[70%] rounded-bl-2xl md:flex justify-end gap-8 bg-[#4A7D56] text-white py-2 px-6 text-sm">
                    <div className="flex items-center gap-2"><Phone size={16} /> (253) 845-2511</div>
                    <div className="flex items-center gap-2"><Clock size={16} /> Weekdays: 8 AM – 4 PM</div>
                    <div className="flex items-center gap-2"><MapPin size={16} /> 8622 112th St E Puyallup, WA 98373</div>
                </div>
            </div>
            <div className="flex justify-between items-center p-2 md:px-8">
                <div className="flex items-center gap-2">
                    <img src="/logo.png" alt="Logo" className="h-14 w-50" />
                </div>
                <div className="hidden md:flex gap-6 items-center text-[#4C4C4C] text-sm font-medium">
                    {navItems.map((item, i) => (
                        item.items ? (
                            <DropdownMenu key={i}>
                                <DropdownMenuTrigger className="flex cursor-pointer items-center gap-1">
                                    {item.label} <ChevronDown size={16} />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="bg-[#FEFBEA]">
                                    {item.items.map((sub, j) => (
                                        <DropdownMenuItem key={j}>{sub}</DropdownMenuItem>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : (
                            <a key={i} href={item.href}>{item.label}</a>
                        )
                    ))}

                    <Button className="bg-[#FEFBEA] border hover:bg-[#3D7C46] hover:text-white border-[#3D7C46] text-[#3D7C46] rounded-full px-4 py-2">
                        Schedule a Tour
                    </Button>
                </div>
                <button className="md:hidden" onClick={() => setOpen(!open)}>
                    <Menu size={28} />
                </button>
            </div>
            {open && (
                <div className="md:hidden bg-[#FEFBEA] min-h-screen px-4 pb-4 text-[#4C4C4C]">
                    {navItems.map((item, i) => (
                        <div key={i} className="border-b py-3">
                            {item.items ? (
                                <details>
                                    <summary className="flex items-center justify-between cursor-pointer">
                                        {item.label} <ChevronDown size={16} />
                                    </summary>
                                    <div className="pl-4 mt-2 flex flex-col gap-2">
                                        {item.items.map((sub, j) => (
                                            <Link key={j} href="#" className="text-sm">{sub}</Link>
                                        ))}
                                    </div>
                                </details>
                            ) : (
                                <Link href={item.href}>{item.label}</Link>
                            )}
                        </div>
                    ))}

                    <Button className="bg-[#FEFBEA] border border-[#3D7C46] text-[#3D7C46] rounded-full w-full mt-4 py-2">
                        Schedule a Tour
                    </Button>
                </div>
            )}
        </nav>
    );
}
