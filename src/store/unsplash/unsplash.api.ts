import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IImagesUrls, IServerResponse} from "../../models/unsplash.model";
import {ISearchedUrls, IServerResponse as ISearchedServerResponse} from "../../models/searched.model";
// import.meta.env.UNSPLASH_API_KEY  => SECRET KEY

const baseUrl = 'https://api.unsplash.com/';
export const unsplashApi = createApi({
    reducerPath: 'unsplashApi',
    baseQuery: fetchBaseQuery({
        baseUrl
    }),
    endpoints: (build) => ({
        getSearchedImage: build.query<Array<ISearchedUrls>, string>({
            query: (searched: string) => ({
                url: 'search/photos',
                params: {
                    client_id:import.meta.env.VITE_UNSPLASH_API_KEY,
                    query: searched,
                    per_page: 20
                }
            }),
            transformResponse: (response: ISearchedServerResponse) => response.results.map(item => item.urls),
        })
        ,
        getRandomImages: build.query<Array<IImagesUrls>, string>({
            query: (_: string) => ({
                url: 'photos/random',
                params: {
                    client_id: import.meta.env.VITE_UNSPLASH_API_KEY,
                    count: 20
                }
            }),
            transformResponse: (response: Array<IServerResponse>) => response.map(item => item.urls),
        })
    })
})
export const {useLazyGetSearchedImageQuery, useLazyGetRandomImagesQuery} = unsplashApi