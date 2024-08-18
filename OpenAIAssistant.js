import axios from "axios";

class OpenAIAssistant {
  constructor(apiKey) {
    this.api = axios.create({
      baseURL: "https://api.openai.com/v1",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "OpenAI-Beta": "assistants=v2",
      },
    });
  }

  async createAssistant(data) {
    try {
      const response = await this.api.post("/assistants", data);
      return response.data;
    } catch (error) {
      console.error("Error creating assistant:", error.message);
      throw error;
    }
  }

  async listAssistants() {
    try {
      const response = await this.api.get("/assistants");
      return response.data;
    } catch (error) {
      console.error("Error listing assistants:", error.message);
      throw error;
    }
  }

  async retrieveAssistant(assistantId) {
    try {
      const response = await this.api.get(`/assistants/${assistantId}`);
      return response.data;
    } catch (error) {
      console.error("Error retrieving assistant:", error.message);
      throw error;
    }
  }

  async updateAssistant(assistantId, data) {
    try {
      const response = await this.api.patch(`/assistants/${assistantId}`, data);
      return response.data;
    } catch (error) {
      console.error("Error updating assistant:", error.message);
      throw error;
    }
  }

  async deleteAssistant(assistantId) {
    try {
      const response = await this.api.delete(`/assistants/${assistantId}`);
      return response.data;
    } catch (error) {
      console.error("Error deleting assistant:", error.message);
      throw error;
    }
  }

  async createThread(data) {
    try {
      const response = await this.api.post("/threads", data);
      return response.data;
    } catch (error) {
      console.error("Error creating thread:", error.message);
      throw error;
    }
  }

  async retrieveThread(threadId) {
    try {
      const response = await this.api.get(`/threads/${threadId}`);
      return response.data;
    } catch (error) {
      console.error("Error retrieving thread:", error.message);
      throw error;
    }
  }

  async updateThread(threadId, data) {
    try {
      const response = await this.api.post(`/threads/${threadId}`, data);
      return response.data;
    } catch (error) {
      console.error("Error updating thread:", error.message);
      throw error;
    }
  }

  async deleteThread(threadId) {
    try {
      const response = await this.api.delete(`/threads/${threadId}`);
      return response.data;
    } catch (error) {
      console.error("Error deleting thread:", error.message);
      throw error;
    }
  }

  async createMessage(threadId, data) {
    try {
      const response = await this.api.post(
        `/threads/${threadId}/messages`,
        data
      );
      return response.data;
    } catch (error) {
      console.error("Error creating message:", error.message);
      throw error;
    }
  }

  async retrieveMessage(threadId, messageId) {
    try {
      const response = await this.api.get(
        `/threads/${threadId}/messages/${messageId}`
      );
      return response.data;
    } catch (error) {
      console.error("Error retrieving message:", error.message);
      throw error;
    }
  }

  async listMessages(threadId) {
    try {
      const response = await this.api.get(`/threads/${threadId}/messages`);
      return response.data;
    } catch (error) {
      console.error("Error listing messages:", error.message);
      throw error;
    }
  }

  async updateMessage(threadId, messageId, data) {
    try {
      const response = await this.api.patch(
        `/threads/${threadId}/messages/${messageId}`,
        data
      );
      return response.data;
    } catch (error) {
      console.error("Error updating message:", error.message);
      throw error;
    }
  }

  async deleteMessage(threadId, messageId) {
    try {
      const response = await this.api.delete(
        `/threads/${threadId}/messages/${messageId}`
      );
      return response.data;
    } catch (error) {
      console.error("Error deleting message:", error.message);
      throw error;
    }
  }

  async createRun(threadId, data) {
    try {
      const response = await this.api.post(`/threads/${threadId}/runs`, data);
      return response.data;
    } catch (error) {
      console.error("Error creating run:", error.message);
      throw error;
    }
  }

  async retrieveRun(threadId, runId) {
    try {
      const response = await this.api.get(`/threads/${threadId}/runs/${runId}`);
      return response.data;
    } catch (error) {
      console.error("Error retrieving run:", error.message);
      throw error;
    }
  }

  async listRuns(threadId) {
    try {
      const response = await this.api.get(`/threads/${threadId}/runs`);
      return response.data;
    } catch (error) {
      console.error("Error listing runs:", error.message);
      throw error;
    }
  }

  async cancelRun(threadId, runId) {
    try {
      const response = await this.api.post(
        `/threads/${threadId}/runs/${runId}/cancel`
      );
      return response.data;
    } catch (error) {
      console.error("Error canceling run:", error.message);
      throw error;
    }
  }
}

export default OpenAIAssistant;
