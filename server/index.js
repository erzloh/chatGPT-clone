import express from 'express';
import OpenAI from 'openai';
import cors from 'cors'
import rateLimit from 'express-rate-limit';

const app = express();
const openai = new OpenAI();

// -------------------- Middlewares --------------------
const corsOptions = {
	origin: 'https://mychatgptclient-erzlohs-projects.vercel.app',
	methods: ['POST'],
	credentials: true
  };

app.use(cors(corsOptions));
// app.use(cors());

app.use(express.json());

// -------------------- Rate Limiter --------------------
const limiter = rateLimit({
	windowMs: 24 * 60 * 60 * 1000,
	max: 5,
	message: 'You have exceeded your request limit!'
});

app.use(limiter);

// -------------------- Routes --------------------
app.post('/', async (req, res) => {
  try {
    const completion = await openai.chat.completions.create({
      messages: req.body.messages,
      model: 'gpt-3.5-turbo',
    });

    const message = completion.choices[0].message.content;

	res.json({
		message: message
	})
	// res.json({
	// 	message: 'Hello, how can I help you?'
	// })
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
