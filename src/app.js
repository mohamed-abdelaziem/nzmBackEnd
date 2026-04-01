import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contact.routes.js";
import { env } from "./config/config.js";
import { notFound } from "./middlewares/notFoundMiddleware.js";
import { errorHandler } from "./middlewares/errorMiddleware.js";
console.log("CLIENT_URL =", process.env.CLIENT_URL);
const app = express();

app.use(
  cors({
     origin: "https://nzm-website.vercel.app/", // عنوان الفرونت المحلي
  methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ success: true, message: "API is running" });
});

app.use("/api", contactRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;