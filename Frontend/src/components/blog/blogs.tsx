import { Box, Grid } from "@mui/material";
import Blog from "./blog";



export default function Blogs(){
    const blogs : number[] = Array.from({length:4});
    return(
        <div>
            <Box sx={{ flexGrow: 1, padding:1 }}>
                <Grid container spacing={{ xs: 0.5, md: 1 }} columns={{ xs: 2, sm: 4, md: 8 }}>
                    {blogs.map((blog, index) => (
                        <Grid item xs={2} sm={2} md={2} key={index}>
                            <Blog id={blog}/>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    )
}