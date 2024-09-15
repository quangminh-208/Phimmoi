import axios from "axios";

export const getMoviesData = async (url) => {
    try {
        const response = await axios.get(url);
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};
