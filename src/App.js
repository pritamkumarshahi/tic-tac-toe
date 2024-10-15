import TicTac from './component/TicTac';

function App() {
  const square = [null,null, null,null, null, null,null,null, null];

  return (
    <div className="contatiner">
        <TicTac squares={square} />
    </div>
  );
}

export default App;
