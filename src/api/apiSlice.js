import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3002'
    }),
    endpoints: (builder) => ({
        getTasks: builder.query({
            query: () => '/tasks',
            providesTags: ['Tasks'], // Task es una ewiqueta que hace referencia a toda la funcion getTasks
            transformResponse: (response) => response.sort((a, b) => b.id - a.id) // Aqui se ordenan los datos que vienen de la API del indice mayor al menor
        }),
        createTask: builder.mutation({
            query: (newTask) => ({
                url: '/tasks',
                method: 'POST',
                body: newTask
            }),
            invalidatesTags: ['Tasks'], // despues de crear un newTask, invalidateTags recupera aut los datos de la api por medio de la funcion getTasks la cual esta referida por la etiqueta Tasks
        }),
        updateTask: builder.mutation({
            query: (updatedTask) => ({
                url: `/tasks/${updatedTask.id}`,
                method: 'PUT',
                body: updatedTask
            }),
            invalidatesTags: ['Tasks']
        }),
        deleteTask: builder.mutation({
            query: (id) => ({
                url: `/tasks/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Tasks']
        })
    }),
})

export const { useGetTasksQuery, useCreateTaskMutation, useUpdateTaskMutation ,useDeleteTaskMutation } = apiSlice;
