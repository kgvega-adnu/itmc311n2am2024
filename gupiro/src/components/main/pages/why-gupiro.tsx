import { ArrowRightIcon } from "lucide-react";
import AnimatedShinyText from "../magicui/animated-shiny-text";
import { cn } from "@/lib/utils";
import HeroVideoDialog from "../magicui/hero-video-dialog";

export default function WhyGupiro() {
    return(
        <section className="flex flex-col gap-5 items-center justify-center my-[50px]">
				
                    
            <div className="flex flex-col items-center gap-3">
                <div className="z-10 flex">
                    <div className={cn("group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800")}>
                        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                        <span>❓ Why Gupiro</span>
                        <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                        </AnimatedShinyText>
                    </div>
                </div>
                <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">
                    Because You Deserve the Best
                </h1>
                <p>Effortless booking, top barbers</p>
            </div>

            <div className="relative w-[350px] md:w-[650px] lg:w-[950px]">
                <HeroVideoDialog
                    animationStyle="from-center"
                    videoSrc="https://www.youtube.com/embed/SfT4FMkh1-w"
                    thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
                    thumbnailAlt="Hero Video"
                />
            </div>
    
        </section>
    )
}