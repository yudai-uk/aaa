import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <SHeader>
        aaaのwebサイト
      </SHeader>

      <div>
        <h2>代表: 宇川 雄大</h2>
      </div>
    </div>
  );
}

export default App;

const SHeader = styled.header`
  background: black;
  color: white;
`;