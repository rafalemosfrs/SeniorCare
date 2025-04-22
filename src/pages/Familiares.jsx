import React, { useState } from 'react';
import Button from '../components/Button';
import { AiOutlineUser, AiOutlinePlus } from 'react-icons/ai';

function Familiares() {
  const [familiares, setFamiliares] = useState([]);
  const [formData, setFormData] = useState({
    nome: '',
    idade: '',
    parentesco: '',
    telefone: '',
    foto: '',
    emergencia: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFamiliares([...familiares, formData]);
    setFormData({ nome: '', idade: '', parentesco: '', telefone: '', foto: '', emergencia: false });
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Familiares</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {familiares.map((familiar, index) => (
          <div key={index} className="card flex items-center p-4 space-x-4">
            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
              {familiar.foto ? (
                <img src={familiar.foto} alt={familiar.nome} className="w-full h-full object-cover" />
              ) : (
                <AiOutlineUser className="text-gray-500 text-3xl" />
              )}
            </div>
            <div>
              <h3 className="text-lg font-semibold">{familiar.nome}</h3>
              <p className="text-gray-600 text-sm">{familiar.parentesco} - {familiar.idade} anos</p>
              <p className="text-gray-500 text-sm">{familiar.telefone}</p>
              {familiar.emergencia && <span className="text-red-500 text-xs font-bold">Contato de Emergência</span>}
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="nome" value={formData.nome} onChange={handleChange} placeholder="Nome completo" className="w-full p-3 border rounded" required />
        <input type="number" name="idade" value={formData.idade} onChange={handleChange} placeholder="Idade" className="w-full p-3 border rounded" required />
        <input type="text" name="parentesco" value={formData.parentesco} onChange={handleChange} placeholder="Grau de parentesco" className="w-full p-3 border rounded" required />
        <input type="tel" name="telefone" value={formData.telefone} onChange={handleChange} placeholder="Telefone" className="w-full p-3 border rounded" required />
        <input type="text" name="foto" value={formData.foto} onChange={handleChange} placeholder="URL da Foto" className="w-full p-3 border rounded" />
        
        <label className="flex items-center space-x-2">
          <input type="checkbox" name="emergencia" checked={formData.emergencia} onChange={handleChange} />
          <span>É contato de emergência</span>
        </label>
        
        <Button type="submit" variant="primary" fullWidth>
          <AiOutlinePlus className="mr-2" /> Adicionar Familiar
        </Button>
      </form>
    </div>
  );
}

export default Familiares;
