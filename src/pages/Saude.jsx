import React from 'react';
import CardInfo from '../components/CardInfo';
import { 
  AiOutlineHeart, 
  AiOutlineDashboard, 
  AiOutlineStock, 
  AiOutlineAlert 
} from 'react-icons/ai';

function Saude() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Saúde</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CardInfo 
          title="Batimentos Cardíacos" 
          value="72 BPM" 
          icon={AiOutlineHeart} 
          color="primary" 
        />
        <CardInfo 
          title="Pressão Arterial" 
          value="120/80 mmHg" 
          icon={AiOutlineDashboard} 
          color="success" 
        />
        <CardInfo 
          title="Temperatura" 
          value="36.7°C" 
          icon={AiOutlineStock} 
          color="danger" 
        />
        <CardInfo 
          title="Oxigenação" 
          value="98%" 
          icon={AiOutlineDashboard} 
          color="primary" 
        />
        <CardInfo 
          title="Glicemia" 
          value="95 mg/dL" 
          icon={AiOutlineStock} 
          color="success" 
        />
        <CardInfo 
          title="Última Atualização" 
          value="22/03/2025 - 08:45" 
          icon={AiOutlineAlert} 
          color="danger" 
        />
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-700">Resumo Diário</h2>
        <p className="text-gray-600 mt-2">
          Todos os sinais vitais estão dentro da normalidade. Nenhuma anomalia detectada nas últimas 24 horas.
        </p>
      </div>
    </div>
  );
}

export default Saude;
