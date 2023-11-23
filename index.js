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
const openai_1 = __importDefault(require("openai"));
const readline_1 = __importDefault(require("readline"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config(); // Load environment variables from .env file 
const openai = new openai_1.default({
    apiKey: process.env.API_KEY
});
const userInterface = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout,
});
userInterface.prompt();
userInterface.on("line", (input) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: input }],
        });
        console.log(res.choices[0].message.content);
        userInterface.prompt();
    }
    catch (e) {
        console.log(e);
    }
}));
