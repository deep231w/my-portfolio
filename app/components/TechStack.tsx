"use client";

import { motion } from "framer-motion";
import { FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { SiTypescript, SiPrisma, SiPostgresql, SiFirebase } from "react-icons/si";

const tools = [
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Python", icon: <FaPython className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "Prisma", icon: <SiPrisma className="text-gray-400" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
];

export default function TechStack() {
  return (
    <div className="mt-10 text-center w-full max-w-6xl mx-auto px-20">
      <h2 className="text-xl font-bold mb-4 text-white flex items-left">Tools that I have used</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {tools.map((tool, index) => (
          <motion.div
            key={tool.name}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800 text-white"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.1 }}
          >
            {tool.icon}
            <span>{tool.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
