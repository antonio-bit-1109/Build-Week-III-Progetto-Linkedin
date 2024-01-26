export const postImage = (userid, end, options) => async () => {
  try {
    // Set to true before fetching
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userid}/${end}`, options);

    if (!response.ok) {
      if (response.status > 400 && response.status < 500) {
        if (response.status === 429) {
          throw new Error("429 INFAME PER TE TANTE COSE BRUTTE");
        } else {
          throw new Error("STAI CAPPELLANDO , RIGUARDA QUELLO CHE HAI SCRITTO");
        }
      }
      if (response.status > 500 && response.status < 600) {
        throw new Error("SERVER SPOMPATO, NON FUNZIA??");
      }
    }

    const fetchData = await response.json();
    console.log(fetchData);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
