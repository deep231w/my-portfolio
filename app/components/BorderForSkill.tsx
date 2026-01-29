export default function BorderForSkill({icon, label}:{icon:React.ReactNode ,label:string}){
    return(
        <div className="skill-sec-border flex flex-row justify-center items-center gap-1">
            {icon}
            <span className="text-sm">{label}</span>
        </div>
    )
}