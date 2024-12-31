
import { Box, Grid } from "@mui/material";
import Blog from "./blog";

interface Blogs{
    start : number
}

export default function Blogs({start} : Blogs){
    const blogs : number[] = Array.from({length:9}, (_, i) => i+start);
    return(
        <div>
            <Box sx={{ flexGrow: 1, padding:1 }}>
                <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {blogs.map((blog, index) => (
                        <Grid item xs={4} sm={4} md={4} key={index}>
                            <Blog id={blog}/>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    )
}