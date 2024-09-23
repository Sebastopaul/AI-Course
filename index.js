import "dotenv/config";

import { GoogleGenerativeAI } from "@google/generative-ai";

import fs from "fs"; // Permet de lire/ecrire des fichiers

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

console.log("process.env.GOOGLE_API_KEY", process.env.GOOGLE_API_KEY);

async function run() {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = "Que fait-on ce soir ?";

  const result = await model.generateContent(prompt);

  console.log("voici le resultat: ", result.response.text());
}
run();
