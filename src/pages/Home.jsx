import React from 'react';
import CardInfo from '../components/CardInfo';
import { AiOutlineHeart, AiFillMedicineBox, AiOutlineBell } from 'react-icons/ai';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar, ResponsiveContainer } from 'recharts';

const heartData = [
  { time: '8h', bpm: 68 },
  { time: '10h', bpm: 72 },
  { time: '12h', bpm: 75 },
  { time: '14h', bpm: 70 },
  { time: '16h', bpm: 74 },
];

const medData = [
  { day: 'Seg', count: 3 },
  { day: 'Ter', count: 2 },
  { day: 'Qua', count: 4 },
  { day: 'Qui', count: 1 },
  { day: 'Sex', count: 2 },
];

const activities = [
  "Tomou remédio às 8h",
  "BPM elevado às 12h (75)",
  "Nova notificação recebida",
];

function Home() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">Bem-vindo ao SeniorCare</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CardInfo title="Batimentos Cardíacos" value="72 BPM" icon={AiOutlineHeart} color="primary" />
        <CardInfo title="Próximo Medicamento" value="15:00" icon={AiFillMedicineBox} color="success" />
        <CardInfo title="Notificações" value="2 novas" icon={AiOutlineBell} color="danger" />
      </div>

      <div className="card">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Batimentos nas últimas horas</h2>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={heartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis domain={[60, 80]} />
            <Tooltip />
            <Line type="monotone" dataKey="bpm" stroke="#6366f1" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="card">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Medicamentos por dia</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={medData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#10b981" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="card">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Atividades Recentes</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          {activities.map((act, i) => <li key={i}>{act}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default Home;
