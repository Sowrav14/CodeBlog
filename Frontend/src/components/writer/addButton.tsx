
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import DataObjectIcon from '@mui/icons-material/DataObject';
import EditIcon from '@mui/icons-material/Edit';

const actions = [
  { icon: <FormatColorTextIcon />, name: 'Add Text', type : 'text' },
  { icon: <AddPhotoAlternateIcon />, name: 'Add Image', type : 'image' },
  { icon: <DataObjectIcon />, name: 'Add Code', type : 'code' },
];

export default function OpenIconSpeedDial({handleAdd} : any) {
  return (
    <div >
      <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        icon={<SpeedDialIcon  openIcon={<EditIcon />} />}
				direction='right'
        sx={{opacity:0.7}}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
						onClick={()=>handleAdd(action.type)}
          />
        ))}
      </SpeedDial>
    </div>
  );
}
