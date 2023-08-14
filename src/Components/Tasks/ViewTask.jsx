import { Grid } from "@mui/material";
import { Fragment, useState } from "react";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function BasicMenu() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const editTaskHandler = () =>{
        // setTask(false);
        // editTask(true);
    }
    return (
      <div>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <img src="assets/icon-vertical-ellipsis.svg"></img>
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={editTaskHandler}>Edit Task</MenuItem>
          <MenuItem sx={{color:"red"}} onClick={handleClose}>Delete Task</MenuItem>
        </Menu>
      </div>
    );
  }
const ViewTask = ({col, Task, CurrentBoard}) =>{
    const AllColumns = CurrentBoard.columns.filter((col)=>col.columnName);
    console.log(Task);
    return(
        <Fragment>
            <div style={{
                position: "absolute",
                width: "100%",
                height: "100vh",
                zIndex: "3",
                backgroundColor: "rgba(0,0,0,0.6)",
                backdropFilter: "blur(1px)",
                overflowY:"scroll",
                display:"block"
            }}>
            <Grid container direction="column" onClick={(e)=>e.stopPropagation()} sx={{
                position: "absolute",
                left: "33%",
                zIndex: "1",
                top:"20%",
                margin: "15px",
                padding: "25px",
                width: "30%",
                height: "fit-content",
                backdropFilter: "blur(5px)",
                backgroundColor: "rgba(255, 255, 255, 1)",
                textAlign: "left",
            }}>
                <Grid item sx={{
                    fontWeight: "700"
                }}>
                    <Grid container sx={{
                        padding: "5px 0",
                        // margin: "5px 0",
                        color: "#000000",
                        fontWeight: "700",
                        width:"100%",
                        alignItems:"center"
                    }}>
                        <Grid item sx={{
                            width:"80%",
                            wordWrap:"break-word",
                            fontSize:"20px",
                            lineHeight:"15px"
                        }}>
                            {Task.name}
                        </Grid>
                        <Grid item>
                            <BasicMenu  ></BasicMenu>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sx={{
                     padding: "5px 0",
                     margin: "5px 0",
                     color:"rgb(130, 143, 163)",
                     width:"100%",
                     height:"auto",
                     fontSize:"16px"
                }}>
                    <div style={{width:"100%",height:"auto",wordBreak: "break-word",lineHeight:"21px"}}>
                    {Task.description}
                    </div>
                </Grid>
                <Grid item>
                    <Grid direction="column" container>
                        <Grid item sx={{
                            padding: "5px 0",
                            margin: "5px 0",
                        }}>
                            <label style={{
                                color:"rgb(130, 143, 163)",
                                fontWeight:"700"
                            }}>Subtasks</label>
                        </Grid>
                        {Task.subtasks.length!==0 && Task.subtasks.map((ele,i)=>(
                            <Grid  item sx={{
                            padding: "7px 5px",
                            margin: "5px 0",
                            width:"100%",
                            backgroundColor:"#f4f7fd",
                            fontSize:"16px",
                            color: "rgb(130, 143, 163)",
                            fontWeight:"600"
                            }}>
                                <input style={{padding:"5px"}} type="checkbox" id={i} />
                                <label style={{padding:"5px"}}>{ele}</label>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <Grid item sx={{
                    padding: "5px 0",
                    margin: "5px 0",
                }}>
                    <label style={{
                        color:"rgb(130, 143, 163)",
                        fontSize:"16px",
                        lineHeight: "20px",
                        fontWeight:"500"
                    }}>Current Status</label><br />
                    <select style={{width:"100%", border:"solid 2px lightgrey", padding:"7px 5px", borderRadius:"7px"}}>
                    {AllColumns.length!==0 && AllColumns.map((Ele)=>(
                        <option disabled selected={(Ele.columnName===col.columnName) ? 'selected' : ""} value={Ele.columnName}>{Ele.columnName}</option>
                    ))}
                    </select>
                </Grid>
            </Grid>
            </div>
        </Fragment>
    );
}

export default ViewTask;