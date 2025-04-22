import React, { useState } from 'react';
import Button from '../components/Button';

const notificacoesExemplo = [
  { id: 1, titulo: 'Consulta agendada', conteudo: 'Você tem uma consulta no dia 25/03 às 14h.', lida: false },
  { id: 2, titulo: 'Medicamento', conteudo: 'Hora de tomar o remédio X.', lida: false },
];

function Notificacoes() {
  const [notificacoes, setNotificacoes] = useState(notificacoesExemplo);
  const [notificacaoSelecionada, setNotificacaoSelecionada] = useState(null);
  const [modalAberto, setModalAberto] = useState(false);
  const [importantes, setImportantes] = useState([]);
  const [exibirImportantes, setExibirImportantes] = useState(false);

  const abrirModal = (notificacao) => {
    setNotificacaoSelecionada(notificacao);
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
    setNotificacaoSelecionada(null);
  };

  const marcarComoLida = (id) => {
    setNotificacoes((prev) =>
      prev.map((n) => (n.id === id ? { ...n, lida: true } : n))
    );
    fecharModal();
  };

  const marcarComoImportante = (id) => {
    if (!importantes.includes(id)) {
      setImportantes([...importantes, id]);
    }
    fecharModal();
  };

  const notificacoesFiltradas = exibirImportantes
    ? notificacoes.filter((n) => importantes.includes(n.id))
    : notificacoes;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Notificações</h1>
        <Button
          variant={exibirImportantes ? 'primary' : 'danger'}
          onClick={() => setExibirImportantes((prev) => !prev)}
        >
          {exibirImportantes ? 'Ver todas' : 'Importantes'}
        </Button>
      </div>

      <div className="space-y-4">
        {notificacoesFiltradas.map((n) => (
          <div
            key={n.id}
            onClick={() => abrirModal(n)}
            className={`cursor-pointer card flex justify-between items-center ${
              n.lida ? 'opacity-50' : ''
            }`}
          >
            <div>
              <h2 className="text-lg font-semibold">
                {n.titulo}
                {importantes.includes(n.id) && (
                  <span className="ml-2 text-sm text-red-500">★</span>
                )}
              </h2>
              <p className="text-gray-500 truncate max-w-xs">{n.conteudo}</p>
            </div>
            {!n.lida && (
              <Button size="sm" onClick={(e) => {
                e.stopPropagation();
                marcarComoLida(n.id);
              }}>
                Marcar como lido
              </Button>
            )}
          </div>
        ))}
        {notificacoesFiltradas.length === 0 && (
          <p className="text-gray-500 text-center">Nenhuma notificação encontrada.</p>
        )}
      </div>

      {modalAberto && notificacaoSelecionada && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-[90%] max-w-md relative">
            <h2 className="text-xl font-bold mb-2">{notificacaoSelecionada.titulo}</h2>
            <p className="text-gray-700 mb-6">{notificacaoSelecionada.conteudo}</p>
            <div className="flex justify-end space-x-4">
              <Button
                variant="danger"
                onClick={() => marcarComoImportante(notificacaoSelecionada.id)}
              >
                Importante
              </Button>
              <Button
                onClick={() => marcarComoLida(notificacaoSelecionada.id)}
              >
                Marcar como lido
              </Button>
            </div>
            <button
              onClick={fecharModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Notificacoes;
