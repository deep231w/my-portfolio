"use client";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function ContactMe() {
  return (
    <section className="text-white flex flex-col items-center justify-center py-20">
      <h1 className="text-l font-bold mb-2">Socials:</h1>
      <div className="flex gap-6 text-xl">
        <a
          href="https://github.com/deep231w"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/deepak-maharana-286232240/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          <FaLinkedin />
        </a>
        <a
        //   href="https://twitter.com/deep231w"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          <FaTwitter />
        </a>
      </div>
    </section>
  );
}





// import { Input } from "./ui/input";

// export default function ContactMe() {
//     return (
//         <section className="text-white flex items-center justify-center py-0">
//             <div className="flex w-3/4 gap-10">
//                 <div className="w-1/2">
//                     <h1 className="text-3xl font-bold mb-4">Get in touch</h1>
//                     <p className="text-lg text-gray-300 mb-4">
//                         If you have any inquiries, please feel free to reach out.
//                         You can contact me via email at{" "}
//                         <span className="text-blue-400">maharanad449@gmail.com</span>
//                     </p>
//                     <h2 className="text-xl font-semibold">Social Handles</h2>
//                 </div>

//                 <div className="w-1/2">
//                     <Input placeholder="Full Name" className="mb-4 w-full" />
//                     <Input placeholder="Phone No" className="mb-4 w-full" />
//                 </div>
//             </div>
//         </section>
//     );
// }
