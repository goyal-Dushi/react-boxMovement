import React from "react-dom";
import {Box} from "@material-ui/core";

function BlackBox(props)
{
    return(
        <Box
       width={90} height={90} className="box" 
      style={
        {right:props.posRight, left: props.posLeft, top: props.posTop, bottom: props.posBottom}
      }
      >  
        </Box>
    );
}

export default BlackBox;