import React from 'react';
import './top.css';
import yoshii from "../../assets/img/yoshi.png"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";




function Top() {
  return (
    <div className="background">
    <Box sx={{ '& button': { m: 1 } }}>
      <div>
        <Link to={"/contents"}>
        <Button variant="contained" size="large">
          contents
        </Button>
        </Link>
      </div>
    </Box>
    </div>
  );
}

export default Top;
