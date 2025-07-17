import { GoogleGenerativeAI } from "@google/generative-ai";

// Type definitions
interface MessageHistory {
  role: "user" | "assistant";
  content: string;
}

interface GenerationConfig {
  temperature?: number;
  topK?: number;
  topP?: number;
  maxOutputTokens?: number;
}

// Initialize Gemini AI with API key
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY as string);

export async function getGeminiResponse(
  message: string,
  history: MessageHistory[] = [],
  systemPrompt: string | null = null,
): Promise<string> {
  try {
    // Use the simpler approach that works more reliably
    return getGeminiResponseWithContext(message, history, systemPrompt);
  } catch (error) {
    console.error("Gemini API error:", error);
    throw new Error("Failed to get response from Gemini");
  }
}

// Simplified approach using conversation context as a single prompt
export async function getGeminiResponseWithContext(
  message: string,
  history: MessageHistory[] = [],
  systemPrompt: string | null = null,
): Promise<string> {
  try {
    // Get the model
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    // Build conversation context
    let contextPrompt: string = "";

    // Add system prompt if provided
    if (systemPrompt) {
      contextPrompt += `${systemPrompt}\n\n`;
    }

    // Add conversation history
    if (history && history.length > 0) {
      contextPrompt += "Previous conversation:\n";
      history.forEach((msg) => {
        const role: string = msg.role === "assistant" ? "Assistant" : "User";
        contextPrompt += `${role}: ${msg.content}\n`;
      });
      contextPrompt += "\n";
    }

    // Add current message
    contextPrompt += `User: ${message}\nAssistant:`;

    // Set generation config
    const generationConfig: GenerationConfig = {
      temperature: 0.7,
      topK: 40,
      topP: 0.95,
      maxOutputTokens: 1024,
    };

    // Generate content
    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: contextPrompt }] }],
      generationConfig,
    });

    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini API error:", error);
    throw new Error(
      `Failed to get response from Gemini: ${
        error instanceof Error ? error.message : String(error)
      }`,
    );
  }
}

// Export types for use in other files
export type { MessageHistory, GenerationConfig };
