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
            <div className="item box3 flex flex-col" style={{gridArea:"box3"}}>
                <div className="sub-item sub1">
                    <div className="set-sub">
                        set sub1
                    </div>
                    <div className="set-sub">
                        set sub2
                    </div>
                </div>
                <div className="sub-item">sub 2</div>
            </div>

            <div className="item" style={{gridArea:"box4"}}>item 4</div>
            <div className="item" style={{gridArea:"box5"}}>
                <NewGitStats/>
            </div>
        </div>
    )
}