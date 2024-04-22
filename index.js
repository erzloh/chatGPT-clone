import express from 'express';
import OpenAI from 'openai';

const app = express();
const openai = new OpenAI();

// POSTリクエストが'/'に送信された場合の処理
app.post('/', async (req, res) => {
  try {
    // ChatGPTからのメッセージを生成
    const completion = await openai.chat.completions.create({
      messages: [{ role: 'system', content: 'You are a helpful assistant.' }],
      model: 'gpt-3.5-turbo',
    });

    // ChatGPTからの返答を取得
    const message = completion.choices[0].message.content;

    // レスポンスとして返す
    res.status(200).json({ message });
  } catch (error) {
    // エラーが発生した場合はエラーメッセージを返す
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// サーバーを起動
const port = 3080;
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
