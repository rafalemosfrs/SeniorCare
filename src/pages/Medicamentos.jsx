import React, { useState } from 'react';
import { AiFillPlusCircle, AiFillDelete } from 'react-icons/ai';
import Button from '../components/Button';
import Modal from '../components/Modal';

function Medicamentos() {
  const [medicamentos, setMedicamentos] = useState([
    { id: 1, nome: 'Paracetamol', horario: '08:00' },
    { id: 2, nome: 'Losartana', horario: '14:00' },
  ]);
  
  const [modalAberto, setModalAberto] = useState(false);
  const [modalRemoverAberto, setModalRemoverAberto] = useState(false);
  const [novoNome, setNovoNome] = useState('');
  const [novoHorario, setNovoHorario] = useState('');
  const [medicamentoParaRemover, setMedicamentoParaRemover] = useState(null);

  const adicionarMedicamento = () => {
    if (!novoNome || !novoHorario) return;
    const novo = {
      id: Date.now(),
      nome: novoNome,
      horario: novoHorario,
    };
    setMedicamentos([...medicamentos, novo]);
    setNovoNome('');
    setNovoHorario('');
    setModalAberto(false);
  };

  const confirmarRemocao = (id) => {
    setMedicamentoParaRemover(id);
    setModalRemoverAberto(true);
  };

  const removerMedicamento = () => {
    setMedicamentos(medicamentos.filter((m) => m.id !== medicamentoParaRemover));
    setModalRemoverAberto(false);
    setMedicamentoParaRemover(null);
  };

  return (
    <div className="space-y-6 relative">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Medicamentos</h1>
        <Button onClick={() => setModalAberto(true)}>
          <AiFillPlusCircle className="inline mr-2 text-xl" />
          Adicionar
        </Button>
      </div>

      <div className="space-y-4">
        {medicamentos.map((med) => (
          <div key={med.id} className="card flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-700">{med.nome}</h2>
              <p className="text-gray-500">Horário: {med.horario}</p>
            </div>
            <button 
              className="text-danger hover:text-danger/70 transition-colors text-xl"
              onClick={() => confirmarRemocao(med.id)}
              title="Remover"
            >
              <AiFillDelete />
            </button>
          </div>
        ))}
      </div>

      <Modal
        title="Novo Medicamento"
        isOpen={modalAberto}
        onClose={() => setModalAberto(false)}
        footer={
          <>
            <Button variant="danger" onClick={() => setModalAberto(false)}>
              Cancelar
            </Button>
            <Button onClick={adicionarMedicamento}>
              Salvar
            </Button>
          </>
        }
      >
        <input
          type="text"
          placeholder="Nome do medicamento"
          value={novoNome}
          onChange={(e) => setNovoNome(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 text-gray-700"
        />

        <input
          type="time"
          placeholder="Horário"
          value={novoHorario}
          onChange={(e) => setNovoHorario(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 mt-3"
        />
      </Modal>

      <Modal
        title="Tem certeza?"
        isOpen={modalRemoverAberto}
        onClose={() => setModalRemoverAberto(false)}
        footer={
          <>
            <Button variant="danger" onClick={() => setModalRemoverAberto(false)}>
              Cancelar
            </Button>
            <Button onClick={removerMedicamento}>
              Remover
            </Button>
          </>
        }
      >
        <p className="text-gray-600">Tem certeza que deseja remover este medicamento?</p>
      </Modal>
    </div>
  );
}

export default Medicamentos;
