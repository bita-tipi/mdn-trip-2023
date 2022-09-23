import React from 'react';
import yoshii from "../../assets/img/yoshi.png"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { pink } from '@mui/material/colors';



function Contents() {
    const [value, setValue] = React.useState('female');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue((event.target as HTMLInputElement).value);
    };
  
    return (
    <div className="background">
      <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group" sx={{color: pink[800],'&.Mui-checked': {color: pink[200],},}} >Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
          sx={{color:pink[800]}}
          >
          <FormControlLabel value="female" 
          control={<Radio sx={{

            color: pink[800],
            '&.Mui-checked': {
            color: pink[200],

        },}}/>} label="Female" />

          <FormControlLabel value="male" control={<Radio sx={{color: pink[800],'&.Mui-checked': {color: pink[200],},}} />} label="Male" />
        </RadioGroup>
      </FormControl>
    </div>
    );
}

export default Contents;