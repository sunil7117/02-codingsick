import Express from "express";
import router from "./routes/web.js";
import { join } from "path";
const app = Express();
const port = process.env.PORT || 3000;
app.set("view engine", "ejs");
app.use(Express.static(join(process.cwd(), "node_modules")));
app.use(Express.static(join(process.cwd(), "public")));
app.use(router);

app.listen(port, () => {
  console.log(`server at started http://localhost:${port}`);
});
