import api from "./api";

export const getMovies = async (params = {}) => {
    try {
        const response = await api.get("/api/movies", { params });
        return await response.data;
    } catch (error) {
        console.error("Error fetching movies:", error);
        throw error;
    }
};

export const searchMovies = async (text) => {
    try {
        const response = await api.get(`/api/search${text}`);
        return await response.data;
    } catch (error) {
        console.error("Error searching movies:", error);
        throw error;
    }
};

