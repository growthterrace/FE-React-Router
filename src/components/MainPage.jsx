import { useNavigate } from 'react-router-dom';
import '../styles/MainPage.css';

const MainPage = () => {
  const navigate = useNavigate();
  const colors = ['red', 'blue', 'pink', 'orange', 'yellow'];

  const handleColorClick = (color) => {
    navigate(`/color/${color}`);
  };

  return (
    <div className="container">
      <h2>🎨 React 색상 선택</h2>
      <hr />
      <div className="color-list">
        {colors.map((color) => (
          <button
            key={color}
            style={{
              backgroundColor: color,
              color: '#fff',
              padding: '10px 20px',
              margin: '10px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
            onClick={() => handleColorClick(color)}
          >
            {color}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MainPage;