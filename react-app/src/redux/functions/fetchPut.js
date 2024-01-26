import { Token } from "../../token";

export const fetchDataPut = async (datas, userid, expid) => {
    const URLPUT = `https://striveschool-api.herokuapp.com/api/profile/${userid}/experiences/${expid}`;

    const optionsPut = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Token}`,
        },
        body: JSON.stringify(datas),
    };

    console.log("datas", datas);

    try {
        const response = await fetch(URLPUT, optionsPut);

        if (!response.ok) {
            throw new Error("qualcosa è andato storto");
        }

        console.log(response);
        return response.json();
    } catch (error) {
        console.error(error);
    }
};
