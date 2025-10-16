import { Box, Grid, List, ListItem, Paper, Stack, Typography } from "@mui/material";
import Image from "next/image";
export default function(){
    return (
    <Box>
        <Stack  spacing={2} direction={"row"}>

        
        <Grid container direction={"column"} >
            <Typography variant="h5" color="white">
                Hey there! I’m Deepak
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
            I’m a passionate <b>Full Stack Developer</b> who loves building
            responsive, high-performance web applications using
            <b> React.js, Next.js, Node.js,</b> and <b>Prisma</b>. 
            I focus on writing clean, maintainable code and creating smooth, engaging user experiences.
          </Typography>
            <Box >
                <Typography variant="h6" gutterBottom>
              Tech I work with:
            </Typography>
            <List sx={{ listStyleType: "disc", pl: 4 }}>
              <ListItem sx={{ display: "list-item" }}>
                Frontend: React.js, Next.js, Tailwind CSS, Material UI
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                Backend: Node.js, Express.js, Prisma, PostgreSQL, MongoDB
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                Tools & Others: Docker, AWS, GitHub, CI/CD, JWT Auth
              </ListItem>
            </List>
            </Box>
        </Grid>

        <Grid
            sx={{
                display: { xs: "none", md: "block" }, 
            }}
        >
            <Box alignContent={"center"} padding={2}>
                <Image 
                    style={{ borderRadius: "8px" }}
                    src="/IMG_20231025_215552_679.jpg" 
                    alt="profilepic"  
                    width={400} 
                    height={300}
                />
            </Box>
        </Grid>

        </Stack>
        
    </Box>
    ); 
}
