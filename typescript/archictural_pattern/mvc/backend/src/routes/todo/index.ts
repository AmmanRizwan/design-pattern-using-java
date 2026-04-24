import { Router } from "express";
import {
    create,
    updateById,
    get,
    getById,
    deleteById
} from "../../controller/todo";

const router = Router();

router.route("/").post(create).get(get);
router.route("/:id").get(getById).delete(deleteById).put(updateById);

export default router;