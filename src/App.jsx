
import { useState } from 'react';
import './App.css';
import MenuRecommendationForm from './components/MenuRecommendationForm';

function App() {
  const lunchOptions = [
    "됏소", "삼성각", "담뽁화로 된장찌게", "더 하누", "장수 감자탕",
    "순대생각", "두껍삼", "쭈꾸미", "두루치기", "청경채도가니",
    "양대창", "보승회관", "한성돈가스", "백합칼국수", "강남포차부페"
  ];

  const [lunch, setLunch] = useState('');

  const selectLunch = () => {
    const randomIndex = Math.floor(Math.random() * lunchOptions.length);
    setLunch(lunchOptions[randomIndex]);
  };

  return (
    <div className="App" style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }} onClick={selectLunch}>
      <h1 style={{fontSize: '2em'}}>오늘 점심 뭐 먹지</h1>
      <button onClick={selectLunch} style={{ fontSize: '1.5em', padding: '15px 30px' }}>점심 메뉴 추천</button>
      {lunch && <h2 style={{ fontSize: '2.5em', marginTop: '20px' }}>{lunch}</h2>}

      {/* Render the new MenuRecommendationForm component */}
      <MenuRecommendationForm />
      <div style={{
        backgroundColor: 'blue',
        color: 'white',
        padding: '10px',
        marginTop: '20px',
        textAlign: 'center'
      }}>
        양육비에 강한 법무법인 진성
      </div>
    </div>
  );
}

export default App;
