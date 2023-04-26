import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({category}) => {

    const {images, isLoading} = useFetchGifs(category);
    // console.log({isLoading})

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && ( <h2> Cargando... </h2> )
            }
            <div className="card-grid">
            {
                images.map((image) => (
                    // <li key={image.id}>{image.title}</li>
                    <GifItem 
                    key={image.id}
                    // Esto permite esparcir todas las propiedades del objeto
                    { ...image }

                    // title={image.title}
                    // url={image.url}
                    />
                ))
            }
            </div>
            
        </>
    )
}
