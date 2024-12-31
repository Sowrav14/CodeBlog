import * as React from 'react';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';



const categories : string[] = [
    'for you', 'following', 'dynamic programming', 'graph theory', 'number theory',
    'greedy', 'constructive algorithm', 'searching', 'sorting', 'hash', 'string',
    'geometry', 'data structure', 'algorithm', 'react', 'express', 'nodeJs',
    'flutter', 'kotlin'
]





export default function Filter() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        aria-label="visible arrows tabs example"
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            '&.Mui-disabled': { opacity: 0.3 },
          },
        }}
      >
        {categories.map((topic : string) => {
            return(
                <Tab label={topic} />
            )
        })}
      </Tabs>
    </div>
  );
}
