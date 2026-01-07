import type { NextApiRequest, NextApiResponse } from "next";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") return res.status(405).end();

  const { message, history = [], systemPrompt = "" } = req.body;

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const chat = await model.startChat({
      history: [
        ...(systemPrompt
          ? [{ role: "user", parts: [{ text: systemPrompt }] }]
          : []),
        ...history, // chat history: [{ role: "user" | "model", parts: [{ text: "message" }] }]
      ],
    });

    const result = await chat.sendMessage(message);
    const response = result.response;
    const text = response.text();

    res.status(200).json({ text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Gemini response failed." });
  }
}
