import Koa from "koa";
import dotenv from "dotenv";

dotenv.config();
const { PORT } = process.env;

const app = new Koa();

app.listen(PORT ?? 4000, () => {
  console.log(`server is running on ${PORT}`);
});
