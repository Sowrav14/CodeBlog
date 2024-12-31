import * as React from 'react';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import EngineeringIcon from '@mui/icons-material/Engineering';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InfoIcon from '@mui/icons-material/Info';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import Profile from '../components/account/profile';
import About from '../components/account/about';
import Organization from '../components/account/organization';
import Skill from '../components/account/skills';
import Setting from '../components/account/setting';


export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(2);

  return (
    <div className="w-full min-h-dvh flex justify-center align-middle bg-[#DBEBC0]">
			<div className="w-full lg:w-1/2 p-8 h-fit shadow-xl shadow-slate-400 bg-white">
			
				<BottomNavigation
					showLabels
					value={value}
					//@ts-ignore
					onChange={(event, newValue) => {
						setValue(newValue);
					}}
					className='shadow-md shadow-slate-400'
				>
					<BottomNavigationAction label="Works" icon={<BusinessCenterIcon />} />
					<BottomNavigationAction label="Skills" icon={<EngineeringIcon />} />
					<BottomNavigationAction label="Profile" icon={<AccountCircleIcon />} />
					<BottomNavigationAction label="About" icon={<InfoIcon />} />
					<BottomNavigationAction label="Setting" icon={<AdminPanelSettingsIcon />} />
				</BottomNavigation>
				<br/>

				{(value == 0) && <Organization/>}
				{(value == 1) && <Skill/>}
				{(value == 2) && <Profile/>}
				{(value == 3) && <About/>}
				{(value == 4) && <Setting/>}

			</div>
		</div>
  );
}
