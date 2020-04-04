const Koa = require("koa");
const app = new Koa();

app.use(async (ctx) => {
  ctx.body = `
    <h1>first koa example</h1>
  `;
});

app.listen(7777);
