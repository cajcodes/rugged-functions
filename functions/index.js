const functions = require('firebase-functions');
const axios = require('axios');
const cors = require('cors');
const { google } = require('google-auth-library');

const whitelist = ['https://www.cajcodes.com', 'https://cajcodes.com', 'https://ruggededge-demo.webflow.io', 'https://ruggededge.ai', 'https://www.ruggededge.ai'];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

const corsMiddleware = cors(corsOptions);

exports.chatBotGpt4 = functions.https.onRequest(async (req, res) => {
  corsMiddleware(req, res, async () => {
    const { messages } = req.body;

    try {
      const response = await axios.post('https://api.openai.com/v1/chat/completions', {
        model: "gpt-4",
        messages,
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${functions.config().openai.key}`
        }
      });

      const chatResponse = response.data.choices[0].message.content.trim();
      res.json({ message: chatResponse });

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred while processing your request' });
    }
  });
});

exports.chatBotGpt35Turbo = functions.https.onRequest(async (req, res) => {
  corsMiddleware(req, res, async () => {
    const { messages } = req.body;

    try {
      const response = await axios.post('https://api.openai.com/v1/chat/completions', {
        model: "gpt-3.5-turbo-16k",
        messages,
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${functions.config().openai.key}`
        }
      });

      const chatResponse = response.data.choices[0].message.content.trim();
      res.json({ message: chatResponse });

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred while processing your request' });
    }
  });
});

exports.chatBotGpt4Large = functions.https.onRequest(async (req, res) => {
  corsMiddleware(req, res, async () => {
    const { messages } = req.body;

    try {
      const response = await axios.post('https://api.openai.com/v1/chat/completions', {
        model: "gpt-4-32k",
        messages,
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${functions.config().openai.key}`
        }
      });

      const chatResponse = response.data.choices[0].message.content.trim();
      res.json({ message: chatResponse });

    } catch (error) {
      console.error('Error Message:', error.message);
      console.error('Error Response Data:', error.response?.data);
      res.status(500).json({ message: 'An error occurred while processing your request' });
    }
  });
});

exports.chatBotGpt35TurboLarge = functions.https.onRequest(async (req, res) => {
  corsMiddleware(req, res, async () => {
    const { messages } = req.body;

    try {
      const response = await axios.post('https://api.openai.com/v1/chat/completions', {
        model: "gpt-3.5-turbo-16k",
        messages,
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${functions.config().openai.key}`
        }
      });

      const chatResponse = response.data.choices[0].message.content.trim();
      res.json({ message: chatResponse });

    } catch (error) {
      console.error('Error Message:', error.message);
      console.error('Error Response Data:', error.response?.data);
      res.status(500).json({ message: 'An error occurred while processing your request' });
    }
  });
});
