import { GoogleGenAI } from "@google/genai";

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key not found");
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
      You are an expert digital marketing consultant specifically for the 'Celebrant' industry (Weddings, Funerals, Naming Ceremonies, etc.).
      
      A client has approached you with the following details:
      - Niche: ${niche}
      - Location: ${location}
      - Current Focus/Struggle: ${focusArea}

      Please provide a concise, high-impact 3-step action plan to help them grow their business.
      
      Structure the response in Markdown:
      1. **Immediate Action**: A quick win they can implement today.
      2. **Digital Presence**: Specific advice on Website/SEO/Socials for their niche.
      3. **Differentiation**: How to stand out in ${location}.

      Keep the tone professional, encouraging, and sophisticated.
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