import Image from "next/image";
import ReactIcon from "../icons/react-icon";
import NextjsIcon from "../icons/Nextjs-icon";

export default function ProfileSec(){
    return(
        <div className="h-full w-full bg-gray-700 flex justify-center p-5">
            <div className="pt-15 flex flex-col items-center gap-3">
                <Image
                    style={{ borderRadius: "8px" }}
                    src="/Zenitsu-Pfp.jpg" 
                    alt="profilepic"  
                    width={150} 
                    height={150}
                />
                <h3 className="text-xl">Deepak Kumar Maharana</h3>
                <div className="social-media-sec flex flex-row gap-3">
                    <Image
                        src={"/linkedin.png"}
                        alt="linkedin"
                        width={20} 
                        height={20}
                    />
                    <Image
                        src={"/leetcode.png"}
                        alt="leetcode"
                        width={20} 
                        height={20}
                    />
                    <Image
                        src={"/twitter.png"}
                        alt="twitter"
                        width={20} 
                        height={20}
                    />
                    <Image
                        src={"/instagram.png"}
                        alt="instagram"
                        width={20} 
                        height={20}
                    />
                    <Image
                        src={"/youtube.png"}
                        alt="youtube"
                        width={20} 
                        height={20}
                    />

                </div>
                <div className="paragraph-bio flex items-center justify-center text-center">
                    <p className="text-sm max-w-md text-sm leading-relaxed text-white/40">Full-stack developer focused on building clean, scalable web apps. I work with React, Next.js, Node.js, and modern databases, and enjoy turning complex ideas into simple, user-friendly products with strong UI and solid architecture.</p>
                </div>
                <div className="skill-sec">
                    <ReactIcon className={"w-6 h-6 text-sky-400"}/>
                    <NextjsIcon className="w-6 h-6 text-sky-400"/>
                </div>
            </div>
        </div>
    )
}