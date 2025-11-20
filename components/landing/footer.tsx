import { address, contact, hours, navigation } from "@/app/constants/assets";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {


    return (
        <footer className="w-full bg-[#082517] text-white py-12 px-6 md:px-16 lg:px-28">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-3">
                        <Image
                            src="/logo.png"
                            alt="Buttons & Bows Logo"
                            width={200}
                            height={80}
                            className="object-contain"
                        />
                    </div>
                </div>
                <div className="space-y-6 text-sm">
                    {[address, contact, hours].map((section, index) => (
                        <div key={index}>
                            <h3 className="font-semibold mb-1">{section.title}</h3>
                            {section.lines.map((line, i) => (
                                <p key={i}>{line}</p>
                            ))}
                        </div>
                    ))}
                </div>
                <div className="text-sm space-y-2">
                    <h3 className="font-semibold mb-1">Navigation</h3>
                    <ul className="space-y-1">
                        {navigation.map((item, index) => (
                            <li key={index}><Link href="#">{item}</Link></li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="w-full border-t border-dashed border-white/40 mt-10 pt-6"></div>
            <p className="text-center text-xs text-white/80">
                © Copyright 2025 · Developed by Tacoma Web Design and SEO
            </p>
        </footer>
    );
}
