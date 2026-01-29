import Image from "next/image";
import ReactIcon from "../icons/react-icon";
import NextjsIcon from "../icons/Nextjs-icon";
import NodejsIcon from "../icons/Nodejs-icon";
import MongodbIcon from "../icons/Mongodb-icon";
import PostgressIcon from "../icons/Postgress-icon";
import Pythonicon from "../icons/Python-icon";
import FastapiIcon from "../icons/FastApi-icon";
import MysqlIcon from "../icons/MySql-icon";
import CppIcon from "../icons/Cpp-Icon";
import Cicon from "../icons/C-icon";
import JsIcon from "../icons/Javascript-icon";
import BorderForSkill from "./BorderForSkill";
import NewContactSec from "./NewContact-Sec";

export default function ProfileSec(){
    return(
        <div className="h-full w-full bg-black flex justify-center p-5">
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
                <div className="skill-sec flex justify-center gap-2 pt-4 flex-wrap">
                    <BorderForSkill icon={<JsIcon className={"w-5 h-5 text-sky-400"}/>} label="JavaScript"/>
                    <BorderForSkill icon={<ReactIcon className={"w-6 h-6 text-sky-400"}/>} label="React"/>
                    <BorderForSkill icon={<NextjsIcon className={"w-6 h-6 text-sky-400"}/>} label="NextJs"/>
                    <BorderForSkill icon={<NodejsIcon className={"w-6 h-6 text-sky-400"}/>} label="NodeJs"/>
                    <BorderForSkill icon={<MongodbIcon className={"w-6 h-6 text-sky-400"}/>} label="MongoDb"/>
                    <BorderForSkill icon={<PostgressIcon className={"w-6 h-6 text-sky-400"}/>} label="Postgress"/>
                    <BorderForSkill icon={<Pythonicon className={"w-6 h-6 text-sky-400"}/>} label="Python"/>
                    <BorderForSkill icon={<MysqlIcon className={"w-6 h-6 text-sky-400"}/>} label="MySql"/>
                    <BorderForSkill icon={<FastapiIcon className={"w-6 h-6 text-sky-400"}/>} label="FastApi"/>
                    <BorderForSkill icon={<CppIcon className={"w-6 h-6 text-sky-400"}/>} label="C++"/>
                    <BorderForSkill icon={<Cicon className={"w-6 h-6 text-sky-400"}/>} label="C"/>                    
                </div>
                <div className="contact-sec">
                    <NewContactSec/>
                </div>
            </div>
            
        </div>
    )
}