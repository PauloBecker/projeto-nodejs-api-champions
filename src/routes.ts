import { Router } from "express";
import * as PlayerController from "./controllers/players-controllers";
import * as ClubsController from "./controllers/clubs-controllers";
const router = Router();

router.get('/players', (req, res) => {(
    PlayerController.getPlayers(req, res)
)});
router.delete('/players/:id', PlayerController.deletePlayer);
router.get('/players/:id', PlayerController.getPlayerById);
router.patch('/players/:id', PlayerController.updatePlayer);
router.post('/players', PlayerController.postPlayer);

router.get('/clubs', ClubsController.getClubs);



export default router;