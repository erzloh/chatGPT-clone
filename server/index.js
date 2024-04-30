import express from 'express';
import OpenAI from 'openai';
import cors from 'cors'

const app = express();
const openai = new OpenAI();

// -------------------- Middlewares --------------------
app.use(cors({
    origin: 'http://localhost:5173'
}));

app.use(express.json());

// -------------------- Routes --------------------
app.post('/', async (req, res) => {
  try {
    const completion = await openai.chat.completions.create({
      messages: req.body.messages,
      model: 'gpt-3.5-turbo',
    });

    const message = completion.choices[0].message.content;

	// res.json({
	// 	message: message
	// })
	res.json({
		message: 'Hello, how can I help you?'
	})
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// -------------------- Launch the server --------------------
const port = 3080;
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
