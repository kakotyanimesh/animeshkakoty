import { FlotingMenu } from "@/components/floatingbar";
import { TypingText } from "@/components/ui/typing-text";
import Image from "next/image";

export default function Home() {
    return (
        <main className='flex justify-center items-center min-h-screen mx-5 md:mx-0'>
            <div className='text-left space-y-7'>
                <TypingText
                    text="Hello, I'm Animesh"
                    className='md:text-5xl text-3xl font-semibold font-dotted'
                    speed={80}
                    showCursor={true}
                    cursorClassName='text-primary'
                />
                <div className='rounded-full cursor-pointer group overflow-hidden p-0.5 size-fit'>
                    <div className='overflow-hidden rounded-full'>
                        <Image
                            src={"/smoking.jpg"}
                            className='rounded-full group-hover:scale-125 ease-out transition-all object-contain'
                            alt='ANIMESH KAKOTY'
                            width={100}
                            height={100}
                        />
                    </div>
                </div>
                <h1 className='font-uprightOne text-xs md:text-sm'>
                    i’m 22. <br />
                    i read books, write typescript, <br /> and try to look smart
                    in front of people.
                    <br /> living with my parents on the{" "}
                   <a href='https://en.wikipedia.org/wiki/Majuli' target="_blank" className="underline decoration-primary/60">
                        world’s largest river island.
                    </a>{" "}
                    <br />
                    <span className='font-dotted text-primary'>
                        coding’s
                    </span>{" "}
                    just a hobby, a side project. hope no one sees my digital
                    diary !!!
                </h1>
                <FlotingMenu />
            </div>
        </main>
    );
}
