const express = require("express");
const pool = require("./db");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/pedido", async (req, res) => {
  const { produto, acompanhamentos } = req.body;
  try {
    await pool.query(
      "INSERT INTO pedidos (produto, acompanhamentos) VALUES ($1, $2)",
      [produto, acompanhamentos]
    );
    res.send("Pedido salvo com sucesso!");
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao salvar pedido.");
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Servidor rodando na porta " + port));
