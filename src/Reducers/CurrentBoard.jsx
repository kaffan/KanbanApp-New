import { createSlice } from "@reduxjs/toolkit";
import { UpdateBoard } from "./Boards";
import { useDispatch } from "react-redux";

const initialState = {};
const CurrentBoard = createSlice({
    name:"CurrentBoard",
    initialState:initialState,
    reducers:{
        updateCurrentBoard(state,action){
            state = action.payload;
            return state;
        }
    }
});

export const { updateCurrentBoard } = CurrentBoard.actions;

export default CurrentBoard.reducer;