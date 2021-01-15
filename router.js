var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const express = require("express");
const router = express.Router();
const { SearchByName, SearchByCategory } = require("./mma");
const { saramin } = require("./saramin");
const { jobkorea } = require("./jobkorea");
router.get("/data", (req, res) => __awaiter(this, void 0, void 0, function* () {
    console.log("???");
    console.log(req.query);
    let list = yield SearchByName(1, req.query["name"]);
    res.json({ data: list });
}));
module.exports = router;
