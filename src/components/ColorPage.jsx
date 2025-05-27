import { useParams } from 'react-router-dom';
import '../styles/ColorPage.css';

function ColorPage() {
  const { id } = useParams();

  const pageStyle = {
    backgroundColor: id,
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    fontSize: '2rem',
    transition: '0.3s ease',
  };

  return (
    <div style={pageStyle}>
      선택한 색상: {id.toUpperCase()}
    </div>
  );
}

export default ColorPage;
