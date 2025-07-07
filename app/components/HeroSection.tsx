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
            <Typography variant="body1" >
                A passionate <b>Softwate Engineer</b>,
                open-source contributor, 
                and tech enthusiast who loves turning ideas into reality with clean, scalable code.
                I thrive on building innovative solutions, contributing to the developer community, and constantly learning new technologies.
            </Typography>
            <Box >
                <Typography variant="h6" gutterBottom>
                    What I bring to the table:
                </Typography>
                <List sx={{ listStyleType: 'disc', pl: 4 }}>
                    <ListItem sx={{ display: 'list-item' }}>
                        Proficiency in Next.js, React, TypeScript, Prisma, and Firebase
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        Strong backend skills with Node.js and databases (PostgreSQL, MongoDB)
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        Open-source contributions and collaboration with developers worldwide
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        Interest in DSA (C++), system design, and scalable architectures
                    </ListItem>
                </List>
            </Box>
        </Grid>

        <Grid>
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


{/* <section className="flex text-white w-full max-w-6xl items-center justify-between mx-auto px-20 ">
            <div>
                <div><h1>Hey there! I’m <b>Deepak</b>👋</h1></div>
                <div>
                    A passionate <b>Softwate Engineer</b>,
                    open-source contributor, 
                    and tech enthusiast who loves turning ideas into reality with clean, scalable code.
                    I thrive on building innovative solutions, contributing to the developer community, and constantly learning new technologies.
                </div>
                <ul className="px-2">
                    <div>What I bring to the table:</div>
                    <li>  Proficiency in Next.js, React, TypeScript, Prisma, and Firebase</li>
                    <li>  Strong backend skills with Node.js and databases (PostgreSQL, MongoDB)</li>
                    <li>  Open-source contributions and collaboration with developers worldwide</li>
                    <li>  Interest in DSA (C++), system design, and scalable architectures</li>
                </ul>
            </div>
            
            <div>
                <Image src="/IMG_20231025_215552_679.jpg" alt="profilepic" className="w-64 h-auto rounded-lg shadow-lg" width={500} height={300}/>
            </div>
        </section> */}