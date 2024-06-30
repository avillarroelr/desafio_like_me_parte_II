import express from "express";
import cors from "cors";
import router from "./src/routes/routesLikes.js";

const crud = express();

const PORT = process.env.PORT || 3000;

crud.use(express.json());
crud.use(cors());

crud.use('/', router);

crud.listen(PORT, () => {
    console.log(`SERVIDOR CORRIENDO EN http://localhost:${PORT}`);
});


