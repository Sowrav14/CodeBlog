
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.primary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const skills : string[] = ['C', 'C++', 'Python', 'Java', 'Javascript', 'Go'];


export default function Skills() {
  return (
    <Box sx={{ flexGrow: 1, padding:1 }}>
      <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {skills.map((skill, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item>{skill}</Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
