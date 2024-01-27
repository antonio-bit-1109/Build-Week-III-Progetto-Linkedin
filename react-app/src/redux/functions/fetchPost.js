import { Token } from "../../token";

export const fetchDataPost = async (url, data) => {
    /*  const URLPOST = `https://striveschool-api.herokuapp.com/api/profile/${idUtente}/${linkEnd}`; */

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Token} `,
        },
        body: JSON.stringify(data),
    };

    try {
        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error("qualcosa è andato storto");
        }

        return response.json();
    } catch (error) {
        console.error(error);
    }
};
