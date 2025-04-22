import React, { useState } from 'react';
import Button from '../components/Button';

function Configuracoes() {
  const [notificacoes, setNotificacoes] = useState(true);
  const [modoAltoContraste, setModoAltoContraste] = useState(false);
  const [modoDaltonismo, setModoDaltonismo] = useState('nenhum');

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">Configurações</h1>

      <div className="card space-y-4">
        <h2 className="text-xl font-semibold text-gray-700">Preferências</h2>
        
        <div className="flex items-center justify-between">
          <span>Receber notificações</span>
          <input 
            type="checkbox" 
            checked={notificacoes} 
            onChange={() => setNotificacoes(!notificacoes)}
            className="w-5 h-5"
          />
        </div>

        <div className="flex items-center justify-between">
          <span>Modo alto contraste</span>
          <input 
            type="checkbox" 
            checked={modoAltoContraste} 
            onChange={() => setModoAltoContraste(!modoAltoContraste)}
            className="w-5 h-5"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1">Modo Daltonismo</label>
          <select
            value={modoDaltonismo}
            onChange={(e) => setModoDaltonismo(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="nenhum">Nenhum</option>
            <option value="protanopia">Protanopia</option>
            <option value="deuteranopia">Deuteranopia</option>
            <option value="tritanopia">Tritanopia</option>
            <option value="monocromacia">Monocromacia</option>
          </select>
        </div>
      </div>

      <div className="card space-y-4">
        <h2 className="text-xl font-semibold text-gray-700">Dados Pessoais</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Nome completo" className="border p-2 rounded" />
          <input type="text" placeholder="Telefone" className="border p-2 rounded" />
          <input type="text" placeholder="Endereço" className="border p-2 rounded md:col-span-2" />
        </div>
        <Button variant="primary">Salvar alterações</Button>
      </div>

      <div className="card space-y-4">
        <h2 className="text-xl font-semibold text-gray-700">Segurança</h2>
        <input type="password" placeholder="Nova senha" className="border p-2 rounded w-full" />
        <Button variant="danger">Alterar senha</Button>
      </div>
    </div>
  );
}

export default Configuracoes;
