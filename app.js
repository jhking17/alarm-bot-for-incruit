"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const body_parser_1 = __importDefault(require("body-parser"));
const constants_json_1 = __importDefault(require("./constants.json"));
const slackbot_1 = __importDefault(require("./slackbot"));
const app = express_1.default();
const api_router = require("./router");
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static(path_1.default.resolve(__dirname)));
app.use("/get", api_router);
app.get("/", (req, res) => {
    res.sendFile("index.html");
});
app.listen(constants_json_1.default.port, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("LISTEN ON : ", constants_json_1.default.port);
    yield slackbot_1.default.start();
    // let t = await SearchByName(1, "원");
    // await saramin(t);
    // await jobkorea(t);
    // await SearchByCategory(1,"11111","우");
}));
