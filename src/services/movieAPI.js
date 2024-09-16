import axios from "axios";

export const getMoviesData = async (url) => {
    try {
        const response = await axios.get(url);
        return await response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};
