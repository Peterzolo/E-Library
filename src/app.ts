import express, {
  Request,
  Response,
  NextFunction,
  Application,
  ErrorRequestHandler,
} from "express";
import createHttpError from "http-errors";

const app: Application = express();

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("App is working");
});

app.use((req: Request, res: Response, next: NextFunction) => {
  next(new createHttpError.NotFound());
});

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    status: err.status || 500,
    message: err.message,
  });
};
app.use(errorHandler);

export default app;
