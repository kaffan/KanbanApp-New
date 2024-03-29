import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDisplay } from "../../Reducers/AddNewBoardB";
import { toggleClick } from "../../Reducers/Boards";

const StyledDiv = styled('div')({
    fontFamily: `'Plus Jakarta Sans', sans-serif`,
    width:"100%",
    height:"48px",
    position:"relative"
});
const InnerDiv = styled('div',{
    shouldForwardProp:(prop)=>prop
})(({ Element })=>({
    backgroundColor:(Element) ? "rgb(99, 95, 199)" : "white",
    borderRadius:"0px 100px 100px 0px",
    position:"relative",
    height:"100%",
    color:(Element) ? "white" :"#979797",
    '&:hover':{
        backgroundColor:"rgb(244, 247, 253)",
        color:"#635FC7"
    }
}));

const SpanEle = styled('div')(({obj="inherit", size="inherit"})=>({
    paddingLeft:"11%",
    // height:"100%",
    position:"relative",
    // left: "11%",
    // right: "33%",
    top: "30%",
    fontWeight:obj,
    fontSize:size
    // bottom: "70%"
}));

const clickHandler = (e) =>{
    e.currentTarget.style.backgroundColor = ""
}
const SideColumn = () =>{
    const Dispatch = useDispatch();
    const state = useSelector((state)=>state.Boards);
    const CurrentBoard = useSelector((state)=>state.Boards.find((ele)=>ele.clicked));
    return(
        <Fragment>
                <Grid container direction="column" sx={{
                    color:"#828FA3",
                    fontSize:"15px",
                    lineHeight:"20px",
                    fontWeight:"700",
                    width:"92%",
                    textAlign:"left",
                }}>
                    <Grid item
                    style={{
                    }}>
                        {/* <span>ALL BOARDS ({})</span> */}
                        <StyledDiv>
                            <SpanEle obj="400" size="12px">ALL BOARDS ({})</SpanEle>
                        </StyledDiv>
                    </Grid>
                    {console.log(state)}
                    {(state) && state.map((ele,i,arr)=>(
                        <Grid item key={i}
                        onClick={()=>{
                                Dispatch(toggleClick(ele.name));
                        }}
                        style={{
                            cursor:"pointer"
                        }}>
                            <StyledDiv>
                                <InnerDiv Element={ele.clicked}>
                                    <SpanEle ><img src="assets/icon-board.svg" /> &nbsp;&nbsp; {ele.name}</SpanEle>
                                </InnerDiv>
                            </StyledDiv>
                        </Grid>
                    ))}
                    <Grid item
                    onClick={()=>Dispatch(toggleDisplay())}
                    style={{
                        cursor:"pointer"
                    }}>
                        <StyledDiv>
                            <InnerDiv Element={false}>
                                <SpanEle ><img src="assets/icon-board.svg" /> &nbsp;&nbsp; +Create New Board</SpanEle>
                            </InnerDiv>
                        </StyledDiv>
                    </Grid>
                    
                </Grid>
        </Fragment>
    );
}

export default SideColumn;