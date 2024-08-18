import OpenAIAssistant from "./OpenAIAssistant.js";
import dotenv from "dotenv";

dotenv.config();

const openAI = new OpenAIAssistant(process.env.OPENAI_API_KEY);

async function chatWithAssistant() {
  try {
    // Create a new assistant if needed (this could be skipped if you already have an assistant ID)
    const assistantData = {
      model: "gpt-4o", // Specify the model, ensure this aligns with the available options
      instructions:
        "You are a helpful assistant that can chat about various topics.",
      name: "Chat Assistant",
    };
    const assistant = await openAI.createAssistant(assistantData);
    console.log("Assistant Created:", assistant);

    // Create a thread for the chat
    const threadData = {
      assistant_id: assistant.id, // Use the newly created assistant's ID
    };
    const thread = await openAI.createThread(threadData);
    console.log("Thread Created:", thread);

    // Post a message to the thread
    const messageData = {
      role: "user",
      content: "Hello, can you tell me more about AI?",
    };
    const message = await openAI.createMessage(thread.id, messageData);
    console.log("Message Posted to Thread:", message);

    // Create a run to process the message
    const runData = {
      assistant_id: assistant.id, // Ensure the correct assistant ID is used
    };
    const run = await openAI.createRun(thread.id, runData);
    console.log("Run Created and Processing:", run);

    // Retrieve all messages from the thread after the run
    const messages = await openAI.listMessages(thread.id);
    console.log("Messages in Thread after Run:", messages);
  } catch (error) {
    console.error(
      "An error occurred while chatting with the assistant:",
      error
    );
  }
}

chatWithAssistant();
