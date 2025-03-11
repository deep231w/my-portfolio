"use client";

import { motion } from "framer-motion";
import { FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { SiTypescript, SiPrisma, SiPostgresql, SiFirebase } from "react-icons/si";

const tools = [
  { name: "Node.js", icon: <FaNodeJs />, color: "bg-green-700" },
  { name: "Python", icon: <FaPython />, color: "bg-yellow-500" },
  { name: "React", icon: <FaReact />, color: "bg-blue-500" },
  { name: "TypeScript", icon: <SiTypescript />, color: "bg-blue-600" },
  { name: "Prisma", icon: <SiPrisma />, color: "bg-gray-800" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "bg-blue-800" },
  { name: "Firebase", icon: <SiFirebase />, color: "bg-yellow-400" },
];

export default function() {
  return (
    <div className="mt-1 flex text-center">
      <h2 className="text-xl font-bold mb-4">Tools that I have used</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {tools.map((tool, index) => (
          <motion.div
            key={tool.name}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-white ${tool.color}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }} // Staggered animation
            whileHover={{ scale: 1.1 }} // Hover effect
          >
            {tool.icon}
            <span>{tool.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
