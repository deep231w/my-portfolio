import { Input } from "./ui/input";

export default function ContactMe() {
    return (
        <section className="text-white flex items-center justify-center min-h-screen">
            <div className="flex w-3/4 gap-10">
                <div className="w-1/2">
                    <h1 className="text-3xl font-bold mb-4">Get in touch</h1>
                    <p className="text-lg text-gray-300 mb-4">
                        If you have any inquiries, please feel free to reach out.
                        You can contact me via email at{" "}
                        <span className="text-blue-400">maharanad449@gmail.com</span>
                    </p>
                    <h2 className="text-xl font-semibold">Social Handles</h2>
                </div>

                <div className="w-1/2">
                    <Input placeholder="Full Name" className="mb-4 w-full" />
                    <Input placeholder="Phone No" className="mb-4 w-full" />
                </div>
            </div>
        </section>
    );
}
