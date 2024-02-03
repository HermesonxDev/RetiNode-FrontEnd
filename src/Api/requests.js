import axios from "axios";

export const filterCardsAsync = async (card) => {
    card = await axios.get(`http://127.0.0.1:8000/api/discussions/`);
    return card;
};