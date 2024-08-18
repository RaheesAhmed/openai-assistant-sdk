
# OpenAI Assistant SDK

**⚠️ UNDER DEVELOPMENT: This package is currently in active development and not ready for production use.**

This package provides an easy-to-use interface for interacting with OpenAI's API to manage assistants, threads, messages, and runs.

## Features
- Create, retrieve, update, and delete Assistants.
- Manage threads to handle conversations.
- Send and manage messages within threads.
- Initiate and control runs for processing interactions.

## Installation
You can add this package to your project by including it in your JavaScript environment. Ensure you have `axios` installed:
```bash
npm install axios
```

## Usage
Here is a basic example of how to use the `OpenAIAssistant` class to interact with OpenAI's API.

```javascript
import OpenAIAssistant from './OpenAIAssistant.js';

const apiKey = 'your-openai-api-key';
const assistant = new OpenAIAssistant(apiKey);

async function createAndManageAssistant() {
    const assistantData = {
        model: 'gpt-4o',
        instructions: 'You are a helpful assistant.',
        name: 'My Assistant'
    };

    // Create a new assistant
    const newAssistant = await assistant.createAssistant(assistantData);
    console.log('Assistant Created:', newAssistant);

    // Retrieve an assistant
    const fetchedAssistant = await assistant.retrieveAssistant(newAssistant.id);
    console.log('Assistant Details:', fetchedAssistant);
}

createAndManageAssistant();
```

## Methods
The SDK includes several methods for interacting with the OpenAI API:
- `createAssistant(data)`
- `listAssistants()`
- `retrieveAssistant(assistantId)`
- `updateAssistant(assistantId, data)`
- `deleteAssistant(assistantId)`
- `createThread(data)`
- `retrieveThread(threadId)`
- `updateThread(threadId, data)`
- `deleteThread(threadId)`
- `createMessage(threadId, data)`
- `retrieveMessage(threadId, messageId)`
- `listMessages(threadId)`
- `updateMessage(threadId, messageId, data)`
- `deleteMessage(threadId, messageId)`
- `createRun(threadId, data)`
- `retrieveRun(threadId, runId)`
- `listRuns(threadId)`
- `cancelRun(threadId, runId)`

## Configuration
Ensure your API key is securely stored and not hardcoded in your production applications.

For detailed API documentation and more examples, visit [OpenAI API Documentation](https://openai.com/docs/).

## License
This project is licensed under the MIT License - See the [LICENSE.md](LICENSE.md) file for details..
