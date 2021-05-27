import { Box, Button, Container, CssBaseline } from '@material-ui/core';
import React, { useState } from 'react';
import "./App.css";

function App() {

  const [rightMove, setRightMove] = useState(null);
  const [leftMove, setLeftMove] = useState("0");
  const [topMove, setTopMove] = useState("0");
  const [bottomMove, setBottomMove] = useState(null);

  function forwardFunction()
  {
     if(leftMove === "0" && topMove === "0"){
      setRightMove("0");
      setLeftMove(null);
    }
    else if(rightMove === "0" && topMove === "0"){
      setTopMove(null);
      setBottomMove("0");
    }
    else if(rightMove === "0" && bottomMove === "0"){
      setRightMove(null);
      setLeftMove("0");
    }
    else if(leftMove === "0" && bottomMove === "0"){
      setTopMove("0");
      setBottomMove(null);
    }
  }

  function backwardFunction()
  {
    if(leftMove === "0" && topMove === "0"){ 
      setBottomMove("0");
      setTopMove(null);
    }
    else if(rightMove === "0" && topMove === "0"){
      setLeftMove("0");
      setRightMove(null);
    }
    else if(rightMove === "0" && bottomMove === "0"){
      setTopMove("0");
      setBottomMove(null);
    }
    else if(leftMove === "0" && bottomMove === "0"){
      setRightMove("0");
      setLeftMove(null);
    }
  }

  function diagonalFunction()
  {
    if(leftMove === "0" && topMove === "0"){ 
      setLeftMove('');
      setTopMove('');
      setRightMove(0)
      setBottomMove(0);
    }
    else if(rightMove === "0" && topMove === "0"){
      setRightMove('');
      setTopMove('');
      setLeftMove(0);
      setBottomMove(0);
    }
    else if(rightMove === "0" && bottomMove === "0"){
      setRightMove('');
      setBottomMove('');
      setTopMove(0);
      setLeftMove(0);
    }
    else if(leftMove === "0" && bottomMove === "0"){
      setLeftMove('');
      setBottomMove('');
      setTopMove(0);
      setRightMove(0);
    }
  }

  return (
    <CssBaseline>
    <Container maxWidth='lg'  style={{paddingTop:"5%", height:"92vh"}} >
      <Container maxWidth="md"   className="box-container" >
      <Box
       width={80} height={80} className="box" 
      style={
        {right:rightMove, left: leftMove, top: topMove, bottom: bottomMove}
      }
      >  
        </Box>
      </Container>
      <Container maxWidth="md" style={{marginTop:"2%", padding:"0"}} >
      <Button variant="contained" color="primary" onClick={()=> forwardFunction()} > Forward </Button>
      <Button variant="contained" color="primary" style={{marginLeft:"2%"}} onClick={()=> diagonalFunction()} > Diagonal </Button>
      <Button variant="contained" color="secondary" style={{marginLeft:"2%"}} onClick={() => backwardFunction()} > Backward </Button>
      </Container>
    </Container>
    </CssBaseline>
  );
}

export default App;
