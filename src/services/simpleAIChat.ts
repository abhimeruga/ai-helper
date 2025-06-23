import constants, {preamblesType} from "../constants/main.constant";


async function chatWithAssistant(userMessage: string, chatId: string): Promise<string> {
    const role = constants.preambles[chatId as keyof preamblesType];
    console.log(chatId, role);

    try {
      const response = await fetch("http://localhost:5000/api/chat", {
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