import { AiFillAlert } from 'react-icons/ai';

function BotaoEmergencia() {
  const handleClick = () => {
    alert('Emergência acionada!');
  };

  return (
    <button 
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-red-600 text-white p-4 rounded-full shadow-lg hover:bg-red-700 transition-colors z-50"
    >
      <AiFillAlert className="text-3xl" />
    </button>
  );
}

export default BotaoEmergencia;
