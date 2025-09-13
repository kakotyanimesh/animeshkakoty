import { HomeIcon } from "@/components/icon/home";
import { dottedFont } from "@/lib/font-config";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className='min-h-screen flex items-center justify-center'>
            <div className='text-center'>
                <h1
                    className={`${dottedFont.className} text-6xl md:text-8xl text-old-paper-darker-spot mb-8`}>
                    404
                </h1>
                <p
                    className={`${dottedFont.className} text-2xl md:text-3xl text-old-paper-darker-spot mb-4`}>
                    why tf you are here
                </p>
                <p
                    className={`${dottedFont.className} text-lg md:text-xl text-old-paper-darker-spot opacity-80`}>
                    no file exists like this
                </p>
                <Link href={"/"} className="flex flex-col justify-center items-center mt-4">
                    <HomeIcon />
                </Link>
            </div>
        </div>
    );
}
