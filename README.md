![RuggedEdge Logo](/logo.svg)

# RuggedEdge Functions
This repository contains the backend Firebase Cloud Functions that power various features in Rugged Edge applications. The main functionality provided includes integrating with OpenAI's API to enable conversational AI capabilities using their GPT models.

## Included Functions

### chatBotGpt4
Triggers an HTTPS callable function which sends user input to OpenAI's GPT-4-Turbo model and returns the generated response as JSON data.
#### Request Structure
`{
  "messages": [
    {"role": "system", "content": "You are a helpful assistant."},
    {"role": "user", "content": "<USER_MESSAGE>"}
  ]
}`
Replace `<USER_MESSAGE>` with the desired prompt or question you want to send to the GPT-4-Turbo model.

### chatBotGpt35Turbo
Triggers an HTTPS callable function which sends user input to OpenAI's GPT-3.5-Turbo model and returns the generated response as JSON data.

For more information on available roles and system prompts when interacting with these models through this package, refer to [OpenAI's Chat Completion Documentation](https://platform.openai.com/docs/guides/text-generation/chat-completions-api).

**Note:** Make sure to set up environment variables within Firebase Console before deploying these cloud functions. Specifically, provide the value for OPENAI_API_KEY. For instructions on how to add configuration settings for your project see the [Firebase Configuration Guide](https://firebase.google.com/docs).

## Credits
* Developed by Christopher Jones
* AI assistant powered by OpenAI

## License
Proprietary - Copyright © RuggedEdge. All rights reserved.
