import React,{useState, useEffect} from 'react'

const ListItem = ({item}) => {
    return (
        <>
        <img  src={item.thumbnailUrl}/>
        <h2>{item.title}</h2></>
        )
}


export default function Test() {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getPhotos(2).then((res) => {
            debugger;
            setPhotos(res);
            setLoading(false);
        })
    },[]);

    const getPhotos = (albumId) => {
        return fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`, {
            method: "GET"
        }).then(res => {
           return res.json();
        }).then((res) => {
            return res;
        });
    };

    return (
        <div>
            {
                !loading && (
                    <>
                        {
                            photos.map((item) => ( <ListItem key={item.id} item={item} />))
                        }
                    </>
                )
            }
        </div>
    )
}
