import { ThreeDCardDemo } from "./ThreeDCardDemo";
export default function (){
    return (
        <div className="text-white border-white mx-20">
            <div>Projects</div>
            <div className="flex">
                <ThreeDCardDemo header="Payment App" content="Payment application which has features like p2p transaction" liveLink="Live" githubLink="Github Repo"/>
                <ThreeDCardDemo header="DeepBox" content="Code execution platform " liveLink="Live" githubLink="Github Repo"/>
                <ThreeDCardDemo header="ChatApp" content="Real time chat application using websocket" liveLink="Live" githubLink="GitHub Repo"/>
            </div>
        </div>
    );
}