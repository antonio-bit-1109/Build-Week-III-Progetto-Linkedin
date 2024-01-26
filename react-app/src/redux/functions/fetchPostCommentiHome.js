export const fetchDataPost = (option, action) => async (dispatch) => {
    const URLPOST = `https://striveschool-api.herokuapp.com/api/comments/`;

    try {
        const response = await fetch(URLPOST, option);

        if (!response.ok) {
            throw new Error("qualcosa è andato storto");
        }

        const fetchData = await response.json();

        dispatch(action(fetchData));
    } catch (error) {
        console.error(error);
    }
};
