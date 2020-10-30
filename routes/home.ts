import express = require("express");
import wrap = require("express-async-error-wrapper");

const router = express.Router();

router.all("/", wrap(async (req: express.Request, res: express.Response) => {
	res.render("home/index");
}));

router.all("/index2", wrap(async (req: express.Request, res: express.Response) => {
	res.render("home/index2");
}));

export = router;
