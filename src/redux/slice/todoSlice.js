import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// Action
export const fetchTodos = createAsyncThunk('fetchTodos', async () => {
    const response = await fetch('http://localhost:192.168.1.47/api/book/create',
    {
        method: 'POST',
        body: JSON.stringify({
            bookName: 'Math',
            authorName: 'Brijesh',
            // bookPrice: 250,
            // date:12-10-22,
            // isbnCode:'14',
            // availblity:'',
            // locAvailblity:'',
            // subjectCode:'',
            // publisher:'',
            // edition:'',
        }),
    
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
    return response.json();
})

const todoSlices = createSlice({
    name: 'todoSlice',
    initialState: {
        isLoading: false,
        data: null,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchTodos.rejected, (state, action) => {
            console.log('error', action.payload)
            state.isError = true;
        })
    }
})

export default todoSlices.reducer;