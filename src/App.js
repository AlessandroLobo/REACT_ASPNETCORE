function App() {
  const atividades = [
    {
      id: 1,
      descricao: "Primeira atividade",
    },
  ];
  return (
    <div className="mt-3">
      <ul className="list-group">
        <li className="list-group-item">
          {atividades[0].id} {atividades[0].descricao}
        </li>
        <li className="list-group-item" onClick={() => console.log("JSX")}>
          Segunda Atividade{" "}
        </li>
        <li className="list-group-item">Terceira Atividade</li>
        <li className="list-group-item">Quarta Atividade</li>
      </ul>
    </div>
  );
}

export default App;
