export const fetchDataPost = async (option, idUtente, linkEnd) => {
    const URLPOST = `https://striveschool-api.herokuapp.com/api/profile/${idUtente}/${linkEnd}`;

    try {
        const response = await fetch(URLPOST, option);

        if (!response.ok) {
            throw new Error("qualcosa è andato storto");
        }

        return response.json();
    } catch (error) {
        console.error(error);
    }
};
