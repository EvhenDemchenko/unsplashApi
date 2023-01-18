type IProps = { url: string }
export const ImageItem = (props: IProps) => {
    return (
        <img loading='lazy' className='h-72 w-full  object-cover rounded-lg shadow-md' src={props.url} alt=" "/>
    )
}

