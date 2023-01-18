import {useLazyGetSearchedImageQuery} from "../store/unsplash/unsplash.api";
import {useEffect} from "react";
import {useAppActions} from "../hooks/redux.actions";
import {useAppSelector} from "../hooks/redux.selectors";

export const Header = () => {
    const [fetchSearchedImage, {data: searchedImages}] = useLazyGetSearchedImageQuery()
    const inputValue = useAppSelector(state => state.unsplash.searchInputValue)
    const {setNewImages, setSearchInputValue} = useAppActions()

    const handleSearchFunction = () => {
        fetchSearchedImage(inputValue)
    }

    useEffect(() => {
        if (searchedImages) setNewImages(searchedImages)
    }, [searchedImages])

    return (
        <div className='w-screen py-5 bg-lime-50 flex justify-center flex-col  '>
            <h1 className='text-center text-4xl font-thin text-gray-700 py-5 capitalize'> unsplash api application </h1>
            <div className='flex items-center justify-center'>
                <input
                    value={inputValue}
                    onChange={e => setSearchInputValue(e.target.value)}
                    className='border border-b-blue-500 active:border-blue-500 transition-all shadow-md px-4 py-2
                    disabled:bg-gray-300 disabled:cursor-not-allowed disabled:placeholder-gray-300'
                    placeholder='Search for images...'
                    type="text"/>
                <button
                    disabled={inputValue.length === 0}
                    onClick={handleSearchFunction}
                    className='border  disabled:bg-gray-300 disabled:cursor-not-allowed disabled:placeholder-gray-300 border-b-blue-500 bg-white px-5 py-2 active:bg-blue-500 transition-all active:text-white'>
                    Search
                </button>
            </div>
        </div>)
}

