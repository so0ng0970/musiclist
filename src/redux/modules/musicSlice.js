import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const musicServer = process.env.REACT_APP_MUSICS;

const initialState = {
  music: [],
  isLoading: false,
  err: null,
};

export const getMusic = createAsyncThunk(
  "music/getmusic",
  async (payload, thunkAPI) => {
    try {
      const data= await axios.get("http://localhost:3001/music");
        console.log(data.data)
      return thunkAPI.fulfillWithValue(data.data);
  
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);  

export const postMusic = createAsyncThunk(
  "music/postmusic",
  async (arr, thunkAPI) => {
    try {
      const getList = await axios.get(musicServer);
      const { user, title, body } = { ...arr };
      const response = await axios.post(musicServer, {
        id: getList.data.at(-1)?.id + 1,
        user,
        title,
        body,
      });

      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
const musicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {},
  extraReducers: {
 
    [getMusic.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.music = action.payload;
    },
   
    [postMusic.pending]: (state, action) => {
      state.isLoading = true;
    },
    [postMusic.fulfiled]: (state, action) => {
      state.isLoading = false;
      state.musics = action.paylod;
    },
    [postMusic.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.paylod;
    },
  },
});

export default musicSlice.reducer;