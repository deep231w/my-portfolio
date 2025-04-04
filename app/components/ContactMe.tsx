import { Input } from "./ui/input";
export default function ContactMe (){
    return(
        <div className="text-white">
            <div>
                <div>
                    <div>
                        <h1>Get in touch</h1>
                    </div>
                    <div>
                            <p>
                            If you have any inquiries, 
                            please feel free to reach out.
                            You can contact me via email at 
                            maharanad449@gmail.com
                            </p>
                    </div>
                    <div>
                        Social Handles
                    </div>
                </div>
            
                <div>
                    <div>
                        <Input placeholder="Full Name" />
                        <Input placeholder="phone No" />
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
}