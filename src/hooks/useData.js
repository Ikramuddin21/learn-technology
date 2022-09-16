import { useContext } from "react";
import { ServicesContext } from "../context/ServiceProvider";

const useData = () => {
    const allData = useContext(ServicesContext);
    return allData;
};

export default useData;