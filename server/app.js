const Koa = require("koa");
const app = new Koa();

app.use(async (ctx, next) => {
  ctx.body = "Hello World from the Backend container";
});

const port = process.env.PORT || 3000;

app.listen(port, err => {
  if (err) consoler.log(err);
  console.log(`App Listening on Port ${port}`);
});
