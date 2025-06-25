import constants, {preamblesType} from "../constants/main.constant";
import { API_BASE_URL } from '../config';


async function chatWithAssistant(userMessage: string, chatId: string): Promise<string> {
    const role = constants.preambles[chatId as keyof preamblesType];
    console.log(chatId, role);

    try {
      const response = await fetch(`${API_BASE_URL}/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage , role}),
      });

      const data = await response.json();
      return data.reply;
    } catch (error) {
      console.error("Error talking to backend:", error);
      return "Error: Unable to connect to AI.";
    }
  }

  export default chatWithAssistant;