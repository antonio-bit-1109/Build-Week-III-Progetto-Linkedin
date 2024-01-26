import { TokenCommenti } from "../../token";

export const fetchDeleteCommentiHome = async (url) => {
    const options = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${TokenCommenti} `,
        },
    };

    try {
        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error("Qualcosa è andato storto");
        }

        console.log(response);
        return response.json(); // O gestisci la risposta come preferisci
    } catch (error) {
        console.error(error);
    }
};
