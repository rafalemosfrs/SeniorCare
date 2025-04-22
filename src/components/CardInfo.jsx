function CardInfo({ title, value, icon: Icon, color = 'primary' }) {
  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-gray-500 text-sm">{title}</h3>
          <p className={`text-2xl font-semibold text-${color}`}>{value}</p>
        </div>
        {Icon && (
          <div className={`p-3 rounded-full bg-${color}/10`}>
            <Icon className={`text-2xl text-${color}`} />
          </div>
        )}
      </div>
    </div>
  );
}

export default CardInfo;