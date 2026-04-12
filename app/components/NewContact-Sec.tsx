export default function NewContactSec(){
    return(
        <div>
            <div className="flex flex-col gap-1">
                <span className="text-white">Email</span>
                <input className="input-sec" type="text" />
            </div>
            <div className="flex flex-col gap-1">
                <span>Name</span>
                <input className="input-sec" type="text" />
            </div>
            <div className="flex flex-col gap-1">
                <span>Message</span>
                <input

                    className="input-sec h-12"
                    type="text" />
            </div>
            <div className="pt-2">
                <button className="border-2 rounded-xl p-1">Submit</button>
            </div>
        </div>
    )
}