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

export const DeleteMusic = createAsyncThunk( 
  "music/deletemusic", 
async (id) => {
   axios.delete(`http://localhost:3001/music/${id}`);
   alert('삭제되었습니다!')

});

export const UpdateMusic = createAsyncThunk(
  "music/updateMusic",
  async ({ id,title,body,user,artist}) => {
    axios.put(`http://localhost:3001/music/${id}`, {
     title:title,body:body,user:user,artist:artist
    });alert('수정되었습니다!')
    return { id, title,body,user,artist};
    
  }
);

const musicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {},
  extraReducers: {
    [getMusic.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [getMusic.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.music = action.payload;
    },
    [getMusic.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
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
    [DeleteMusic.fulfilled]: (state, { payload }) =>
    state.filter((data) => data.id !== payload)
  },
    [ UpdateMusic.fulfilled]: (state, { payload }) => {
      return state.map((data) => {
        if (data.id === payload.id) {
          return { ...data,title: payload.title,body:payload.body ,
            artist:payload.artist ,user:payload.user };
        } else {
          return data;
        }
      });
    },
  });

export default musicSlice.reducer;