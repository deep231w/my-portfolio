import ExperienceSec from "../components/Experience-sec";
import NewGitStats from "../components/NewGitStats";
import ProfileSec from "../components/ProfileSec";

export default function GridLayoutStyle(){
    return(
        <div className="grid-container">
            <div className="item profile-sec" style={{gridArea:"box1"}}>
                <ProfileSec/>
            </div>
            <div className="item" style={{gridArea:"box2"}}>
                <ExperienceSec/>
            </div>
            <div className="item" style={{gridArea:"box3"}}>item 3</div>
            <div className="item" style={{gridArea:"box4"}}>item 4</div>
            <div className="item" style={{gridArea:"box5"}}>
                <NewGitStats/>
            </div>
        </div>
    )
}