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
                        color="white"
                    >
                        Home
                    </Typography>
                </Link>
                <Link href={"/projects"}>
                    <Typography color="white">Projects</Typography>    
                </Link>
                <Link href={"/blog"}>
                    <Typography color="white">Blog</Typography>
                </Link>
            </Paper>
        </Box>
    );
};

export default Navbar;
