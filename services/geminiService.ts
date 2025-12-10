import { GoogleGenAI } from "@google/genai";

const getClient = () => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error("Missing VITE_GEMINI_API_KEY. Add it to your environment before building.");
  }

  return new GoogleGenAI({ apiKey });
};

export const generateBusinessStrategy = async (
  niche: string,
  location: string,
  focusArea: string
): Promise<string> => {
  try {
    const ai = getClient();
    
    const prompt = `
      You are a senior brand strategist at 'Celebrant Success', a premier agency helping wedding and funeral celebrants grow their businesses.
      
      A client has approached you with the following details:
      - Niche: ${niche}
      - Location: ${location}
      - Current Focus/Struggle: ${focusArea}

      Please provide a high-value, sophisticated 3-step action plan to help them dominate their market.
      
      Structure the response in Markdown:
      1. **Immediate Impact**: A quick, actionable win they can implement this week.
      2. **Digital Authority**: Specific, high-level advice on Website/SEO/Socials for their specific niche.
      3. **Market Differentiation**: How to stand out in ${location} specifically.

      Keep the tone empowering, premium, and direct. Use bullet points for clarity.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "Unable to generate strategy at this time.";
  } catch (error) {
    console.error("Error generating strategy:", error);
    throw error;
  }
};