import { useEffect, useState } from "react";


const Route = ({ path, children}) => {
    const [currentPath, setCurrentPath] = useState(window.location.path);
    //suru ma load huda ni useState le window.location.path default value linxa
    //ani useEffect paxi onLocationChange bhayepaxi setCurrentPath garaune pani tei window.location.path le nai
    //dinxa value........tei bhayera mathi ko UseState use hune bhaneko tei route update garna lai matra ho


    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname);
        };

        window.addEventListener('popstate', onLocationChange);

        return () => {
            window.removeEventListener('popstate', onLocationChange);
        };

    }, []);




    return currentPath === path
    ? children
    : null;

};

export default Route;