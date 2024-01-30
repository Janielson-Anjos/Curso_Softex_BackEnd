import express, {Request, Response} from "express";
import bodyParser from "body-parser";


const app = express();

app.use(bodyParser.json());

const users = [
    { id: 1, name: "Jhon Doe", age: 25, email: "jhon.doe@example.com" },
    { id: 2, name: "Alice", age: 30, email: "alice@example.com" },
    { id: 3, name: "Bob", age: 28, email: "bob@example.com" },
];

app.get("/", (req: Request, res: Response) => {
    res.send("Bem vindo ao meu web service!");
    
});

app.get("/users", (req: Request, res: Response) => {
    res.json(users);
});

app.get("/users/:id", (req: Request, res: Response) => {

    const userId = parseInt(req.params.id, 10);

    const user = users.find(u => u.id === userId);

    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ error: "Usuario não encontrado."});
    }

});

app.post("/user", (req: Request, res: Response) => {

    const { name, age, email } = req.body;

    const usuarioID = users.length + 1;

    const newUser = { id: usuarioID, name, age, email };

    users.push(newUser);

    res.status(201).json(newUser);

});

app.get("/greet/:name", (req: Request, res: Response) => {

    const userName = req.params.name;
    const greeting = `Olá, ${userName}! Seja Bem-vindo!`;
    res.json({greeting});

});

const PORT: number = 3000;

app.listen(PORT, () => {
    console.log(`WebServer rodando em http://localhost:${PORT}`);
    
});