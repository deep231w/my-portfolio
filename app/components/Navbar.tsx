import Link from "next/link";
import { Box, Paper, Typography } from '@mui/material';

const Navbar = () => {
    return (
        <Box>
            <Paper         
                elevation={0}
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end', 
                    alignItems: 'center',
                    padding: 2,
                    backgroundColor: 'transparent',
                    
                    gap: 4,
                }}
            >
                <Link href={"/"}>
                    <Typography
                        
                    >
                        Home
                    </Typography>
                </Link>
                <Link href={"/projects"}>
                    <Typography >Projects</Typography>    
                </Link>
                <Link href={"/blog"}>
                    <Typography >Blog</Typography>
                </Link>
            </Paper>
        </Box>
    );
};

export default Navbar;
