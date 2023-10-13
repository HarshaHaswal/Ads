import * as React from 'react';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import TableChartIcon from '@mui/icons-material/TableChart';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ToggleButtons() {
  const [alignment, setAlignment] = React.useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton style={{   borderTopLeftRadius:'25px',borderBottomLeftRadius:'25px' }} value="left" aria-label="left aligned">
        <DonutLargeIcon/>
      </ToggleButton>
      <ToggleButton style={{   borderTopRightRadius:'25px',borderBottomRightRadius:'25px' }} value="right" aria-label="right aligned">
        <TableChartIcon />
      </ToggleButton>
      
    </ToggleButtonGroup>
  );
}
