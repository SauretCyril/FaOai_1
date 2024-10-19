import express from 'express';
import bodyParser from 'body-parser';
import { agent } from './agents/agent.js';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.post('/ask', async (req, res) => {
  const userInput = req.body.question;
  try {
    const response = await agent(userInput);
    res.json({ response });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
