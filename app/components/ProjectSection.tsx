"use client";
import { Box, Typography } from "@mui/material";
import Project from "./Project";

type ProjectData = {
  id: string;
  title?: string;
  description?: string;
  image?: string;
  liveUrl?: string;
  gitUrl?: string;
};

const projects:ProjectData[]=[
    {
        id:"1",
        title:"Chat app",
        description:"A real time chatt application , using websocket , firebase auth , prostgress DB ,react , nodejs",
        image:"/chat.png",
        liveUrl:"",
        gitUrl:"https://github.com/deep231w/ChatApp"
    },
    {
        id:"2",
        title:"Payment app",
        description:"Its has p2p money transfer and can add money from bank (not real but it has a webhook to confirm add money ) . The tech stack is monorepo ,  nextJs , Oauth as Authentication,  and nodejs.",
        image:"/paymentApp.png",
        liveUrl:"",
        gitUrl:"https://github.com/deep231w/payment-app"
    },
    {
        id:"3",
        title:"Garage  management",
        description:"A full-stack garage and parking management app with admin and user panels. Admins can create floors, slots, and assign reservations. Users can view available slots, park vehicles, and view parking history. Email alerts are sent via Nodemailer for parking and departure events.",
        image:"/garage.png",
        liveUrl:"",
        gitUrl:"https://github.com/deep231w/garage-management"
    }
]

export default function ProjectsSection() {


  return (
    <Box sx={{  }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h5" fontWeight={600}>
          Projects
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: 0, 
        }}
      >
          {projects.map((p)=>(
            
            <Project
                key={p.id}
                title={p.title ||""}
                description={p.description || ""}
                liveLink={p.liveUrl || ""}
                gitHub={p.gitUrl || ""}
                imageUrl={p.image || ""}
            />
          ))}

      </Box>
    </Box>
  );
}
