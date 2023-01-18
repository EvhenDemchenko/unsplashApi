import {ImageItem} from './components/ImageItem'
import {Header} from './components/Header'
import {useEffect} from "react";
import {useLazyGetRandomImagesQuery} from "./store/unsplash/unsplash.api";
import InfiniteScroll from 'react-infinite-scroll-component';

import {useAppSelector} from "./hooks/redux.selectors";
import {useAppActions} from "./hooks/redux.actions";
import {Loader} from "./components/Loader";

function App() {
    const images = useAppSelector(state => state.unsplash.urls)
    const {setUrls} = useAppActions()
    const [fetchRandomImages, {data, isLoading, isFetching}] = useLazyGetRandomImagesQuery();

    useEffect(() => {
        if (data) setUrls(data)
        if (!data) fetchRandomImages('')
    }, [data])

    return (
        <div className="flex  flex-col gap-5">
            <Header/>
            {(isLoading || isFetching) && <Loader/>}
            <InfiniteScroll
                className='container mx-auto grid place-content-center xl:grid-cols-5  lg:grid-cols-3  md:grid-cols-2 md:gap-10 sm:grid-cols-1 '
                dataLength={images.length}
                next={() => fetchRandomImages('')}
                hasMore={true}
                loader={<Loader/>}
            >
                {images?.map(image => <ImageItem key={image.full + image.regular} url={image.small}/>)}
            </InfiniteScroll>
        </div>
    )
}

export default App