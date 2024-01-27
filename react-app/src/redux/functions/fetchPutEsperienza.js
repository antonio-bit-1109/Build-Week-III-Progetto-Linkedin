import { Token } from "../../token";

export const fetchPutEsperienza = async (url, datas) => {
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
        const response = await fetch(url, optionsPut);

        if (!response.ok) {
            throw new Error("qualcosa è andato storto");
        }

        console.log(response);
        return response.json();
    } catch (error) {
        console.error(error);
    }
};
