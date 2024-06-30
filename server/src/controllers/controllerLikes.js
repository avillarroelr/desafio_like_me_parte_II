import { getLikesModel, addLikesModel } from "../models/modelLikes.js";

export const raizServer = (req, res) => {
    res.send('OK');
}

export const getLikes = async (req, res) => {
    try {
        const likesget = await getLikesModel();
        if (likesget.length === 0) {
            return res.status(404).json({ message: "No data found" });
        }
        res.status(200).json({ likesget });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const addLikes = async (req, res) => {
    const { titulo, img, descripcion } = req.body;
    try {
        const newLike = await addLikesModel({ titulo, img, descripcion });
        res.status(201).json(newLike);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}