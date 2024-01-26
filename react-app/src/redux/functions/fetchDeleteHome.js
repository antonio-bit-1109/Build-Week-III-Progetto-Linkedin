export const fetchDeleteHome = async (options, postId) => {
    const URLPOST = `https://striveschool-api.herokuapp.com/api/posts/${postId}`;

    try {
        const response = await fetch(URLPOST, options);

        if (!response.ok) {
            throw new Error("Qualcosa è andato storto");
        }

        return response;
    } catch (error) {
        console.error(error);
    }
};
