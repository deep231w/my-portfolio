import Link from "next/link";
import { Box, Paper, Typography } from '@mui/material';

const Navbar = () => {
    return (
        <Box>
            <Paper         
                elevation={3}
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end', 
                    alignItems: 'center',
                    padding: 2,
                    backgroundColor: 'transparent',
                    color: 'white',
                    gap: 4,
                }}
            >
                <Link href={"/"}>
                    <Typography
                        sx={{ color: 'white' }}
                    >
                        Home
                    </Typography>
                </Link>
                <Link href={"/projects"}>
                    <Typography sx={{ color: 'white' }}>Projects</Typography>    
                </Link>
                <Link href={"/blog"}>
                    <Typography sx={{ color: 'white' }}>Blog</Typography>
                </Link>
            </Paper>
        </Box>
    );
};

export default Navbar;
