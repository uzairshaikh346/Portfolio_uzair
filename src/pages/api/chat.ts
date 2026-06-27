import type { NextApiRequest, NextApiResponse } from "next";
import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") return res.status(405).end();

  const { message, history = [] } = req.body;

  try {
    const formattedMessages = history.map((msg: any) => {
      const role = msg.role === "model" ? "assistant" : "user";
      const content = msg.parts?.[0]?.text || "";
      return { role, content };
    });

    // Ensure the current user message is at the end of the history
    if (
      formattedMessages.length === 0 ||
      formattedMessages[formattedMessages.length - 1].content !== message
    ) {
      formattedMessages.push({ role: "user", content: message });
    }

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content: `You are an AI assistant on Muhammad Uzair's portfolio website. 
      
About Uzair:
- Full Stack AI Engineer based in Karachi, Pakistan
- Specializes in: AI Agents, RAG Systems, Multi-Agent Systems, LLM Integration
- Tech stack: OpenAI Agent SDK, FastAPI, Next.js, React.js, Node.js, PostgreSQL, Docker, n8n
- Work Experience: Junior Full Stack Developer at Orionsols (Jan 2025 - Mar 2026)
- Currently studying: Cloud-Native Agentic AI Engineering at Panaversity (GIAIC)

Key Projects:
1. Personal AI Employee (Customer Support Agent) - OpenAI SDK + FastAPI + PostgreSQL + Docker
2. Humanoid Robotics RAG Chatbot - RAG pipeline + vector embeddings + Docusaurus
3. AI Agentic Todo App - Natural language task creation + Vercel deployment
4. Zaura E-Commerce - Next.js + Sanity CMS + Stripe

Contact: uzairshaikh346@gmail.com | LinkedIn: linkedin.com/in/muhammad-uzair-2526732a6

Your job:
- Answer questions about Uzair's skills, projects, and experience
- Help visitors understand what Uzair can build for them
- If someone asks about hiring or working together, encourage them to reach out via email
- Be professional, friendly, and concise
- If asked something unrelated to Uzair or web/AI development, politely redirect`,
        },
        ...formattedMessages,
      ],
      max_tokens: 500,
      temperature: 0.7,
    });

    const reply =
      completion.choices[0]?.message?.content ||
      "Sorry, I couldn't process that.";

    res.status(200).json({ text: reply });
  } catch (error) {
    console.error("Groq API Error:", error);
    res.status(500).json({ error: "Failed to process the request with Groq." });
  }
}
