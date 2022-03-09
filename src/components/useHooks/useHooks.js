import { useEffect, useState } from "react";

const useServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return [services, setServices];
};

const useCarts = () => {
    const [cart, setCart] = useState([]);
    return [cart, setCart];
};

export { useServices, useCarts };