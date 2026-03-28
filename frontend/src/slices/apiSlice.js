import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react'

const BASE_URL = 'http://localhost:5000/api'

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: () => ({}),
})
