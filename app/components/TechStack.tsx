import { Box, Button, Grid, Typography } from "@mui/material";
import { FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { SiTypescript, SiPrisma, SiPostgresql, SiFirebase } from "react-icons/si";

const tools = [
  { name: "Node.js", icon: <FaNodeJs size={20} color="#68A063" /> },
  { name: "Python", icon: <FaPython size={20} color="#FFD43B" /> },
  { name: "React", icon: <FaReact size={20} color="#61DBFB" /> },
  { name: "TypeScript", icon: <SiTypescript size={20} color="#007ACC" /> },
  { name: "Prisma", icon: <SiPrisma size={20} color="#A0AEC0" /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={20} color="#336791" /> },
  { name: "Firebase", icon: <SiFirebase size={20} color="#FFCB2B" /> },
];

export default function TechStack() {
  return (
    <Box>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h5" gutterBottom>Tech Stack</Typography>
      </Box>
      <Grid container sx={{
        
        
        gap: 3,
        // Responsive gridColumn spans:
        
      }}
 justifyContent="center">
        {tools.map((tool, index) => (
          <Grid
            key={index}
          >
            <Button
              variant="outlined"
              sx={{ display: 'flex', alignItems: 'center', gap: 1, borderRadius:"60px" ,  height:"36px",textTransform: "none","&.Mui-disabled": {
      color: "#000",        // override disabled gray
      borderColor: "white",  // override border too
      opacity: 1,           // keep full visibility
      pointerEvents: "none", // still prevents interaction
    },
}}
              size="small"
              disabled
            >
{tool.icon}
              <Typography variant="subtitle2" color="white">{tool.name}</Typography>
            </Button>
            
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
