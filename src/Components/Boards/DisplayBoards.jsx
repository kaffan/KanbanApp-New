import { Fragment } from "react";
import Header from "../Header/Header";
import { useSelector } from "react-redux";
import NoColumns from "../Columns/NoColumns";
import ColumnDisplay from "../Columns/ColumnDisplay";
import CurrentBoard from "../../Reducers/CurrentBoard";

const DisplayBoards = () =>{
    const state = useSelector((state)=>state.CurrentBoard);
    const globalState = useSelector((state)=>state);
    console.log(state);
    return(
        <Fragment>
            {/* <Header Element={state}></Header> */}
            {(state.columns.length!==0) ? <ColumnDisplay columns={state.columns}></ColumnDisplay> : <NoColumns></NoColumns>}
        </Fragment>
    )
}

export default DisplayBoards;