import { useMemo } from 'react';

export default function WeeklyCalendar({ classes }) {
  const daysOfWeek = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
  const dayIndices = [1, 2, 3, 4, 5, 6, 0]; // Lundi à Dimanche

  // Couleurs par catégorie
  const getCategoryColor = (category) => {
    const colors = {
      'Coaching privé': '#AFC4D6',
      'MMA Enfants': '#FFF1B8',
      'MMA Adultes': '#C9E4D6',
      'BOXE THAI': '#FFD6A5',
      'MMA PRO': '#E6A4A4',
      'Grappling': '#D8CFF0',
      'Lady boxing': '#F4C2D7'
    };
    return colors[category] || '#F39200';
  };

  // Générer les heures de la journée (7h - 21h)
  const hours = useMemo(() => {
    const result = [];
    for (let i = 7; i <= 21; i++) {
      result.push(`${i.toString().padStart(2, '0')}:00`);
    }
    return result;
  }, []);

  // Convertir une heure (HH:MM) en position pixel
  const timeToPosition = (time) => {
    const [hours, minutes] = time.split(':').map(Number);
    const totalMinutes = hours * 60 + minutes;
    const startMinutes = 7 * 60; // 7h du matin
    const pixelsPerMinute = 30 / 60; // 30px par heure, donc 0.5px par minute
    return (totalMinutes - startMinutes) * pixelsPerMinute;
  };

  // Calculer la hauteur d'un cours en fonction de sa durée
  const calculateHeight = (startTime, endTime) => {
    const [startHours, startMinutes] = startTime.split(':').map(Number);
    const [endHours, endMinutes] = endTime.split(':').map(Number);
    const durationMinutes = (endHours * 60 + endMinutes) - (startHours * 60 + startMinutes);
    const pixelsPerMinute = 30 / 60;
    return durationMinutes * pixelsPerMinute;
  };

  // Grouper les cours par jour
  const classesByDay = useMemo(() => {
    const grouped = {};
    dayIndices.forEach(day => {
      grouped[day] = classes.filter(cls => cls.day_of_week === day);
    });
    return grouped;
  }, [classes]);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* En-tête avec les jours de la semaine */}
      <div className="grid grid-cols-8 border-b border-gray-200">
        {/* Colonne vide pour l'alignement avec les heures */}
        <div className="bg-gray-50 border-r border-gray-200 p-4">
          <div className="text-sm font-semibold text-gray-500">Heure</div>
        </div>

        {/* Jours de la semaine */}
        {daysOfWeek.map((day, index) => (
          <div
            key={index}
            className="bg-gray-50 p-4 text-center border-r border-gray-200 last:border-r-0"
          >
            <div className="text-sm font-bold text-gray-900">{day}</div>
          </div>
        ))}
      </div>

      {/* Grille horaire */}
      <div className="relative overflow-x-auto">
        <div className="grid grid-cols-8 min-w-[800px]">
          {/* Colonne des heures */}
          <div className="border-r border-gray-200">
            {hours.map((hour, index) => (
              <div
                key={hour}
                className="border-b border-gray-100 px-2 py-1 text-xs text-gray-500 font-medium"
                style={{ height: '30px' }}
              >
                {hour}
              </div>
            ))}
          </div>

          {/* Colonnes des jours avec les cours */}
          {dayIndices.map((dayIndex) => (
            <div
              key={dayIndex}
              className="relative border-r border-gray-200 last:border-r-0"
            >
              {/* Lignes horaires de fond */}
              {hours.map((hour, index) => (
                <div
                  key={hour}
                  className="border-b border-gray-100"
                  style={{ height: '30px' }}
                />
              ))}

              {/* Cours positionnés absolument */}
              {classesByDay[dayIndex]?.map((cls) => {
                const top = timeToPosition(cls.start_time);
                const height = calculateHeight(cls.start_time, cls.end_time);
                const bgColor = getCategoryColor(cls.category);

                return (
                  <div
                    key={cls.id}
                    className="absolute left-1 right-1 rounded-md p-2 overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer z-10"
                    style={{
                      top: `${top}px`,
                      height: `${height}px`,
                      minHeight: '25px',
                      backgroundColor: bgColor,
                      color: '#1f2937'
                    }}
                  >
                    <div className="text-xs font-bold truncate leading-tight">{cls.title}</div>
                    <div className="text-xs opacity-90 mt-0.5 leading-tight">
                      {cls.start_time} - {cls.end_time}
                    </div>
                    {cls.instructor && (
                      <div className="text-xs opacity-75 mt-0.5 truncate leading-tight">
                        {cls.instructor}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
