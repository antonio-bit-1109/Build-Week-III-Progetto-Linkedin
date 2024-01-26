import React from "react";
import { useSelector } from "react-redux";

const Rete = () => {
    const elencoCommenti = useSelector((state) => state.FetchData.dataFetchGetCommenti);
    console.log(elencoCommenti);
    return <div>rete</div>;
};

export default Rete;
