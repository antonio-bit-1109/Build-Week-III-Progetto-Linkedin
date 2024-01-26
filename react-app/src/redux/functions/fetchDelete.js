export const fetchDelete = async (options, userId, expId) => {
    const URLPOST = `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}`;

    try {
        const response = await fetch(URLPOST, options);

        if (!response.ok) {
            throw new Error("qualcosa è andato storto");
        }

        return response;
    } catch (error) {
        console.error(error);
    }
};
