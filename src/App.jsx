
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
    <div className="App" onClick={selectLunch}>
      <h1>오늘 점심은 뭐 먹지</h1>
      <button onClick={selectLunch}>점심 메뉴 추천</button>
      {lunch && <h2>{lunch}</h2>}

      {/* Render the new MenuRecommendationForm component */}
      <MenuRecommendationForm />
    </div>
  );
}

export default App;
