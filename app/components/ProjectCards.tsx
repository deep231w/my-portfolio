import { ThreeDCardDemo } from "./ThreeDCardDemo";
export default function (){
    return (
        <div className="text-white border-white mx-20">
            <div>Projects</div>
            <ThreeDCardDemo header="Payment App" content="Payment application which has features like p2p transaction" liveLink="Live" githubLink="Github"/>
        </div>
    );
}