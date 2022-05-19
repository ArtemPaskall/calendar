import './Calendar.scss';
import './CalendarComponent.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Calendar from 'react-calendar';
import dayjs from 'dayjs';
import arrow from '../../Images/arrow_icon.svg';
import TVset from '../../Images/TV-set.png';

const Icon = () => (
  <img src={arrow} alt="Icon" />
);

export const formatDate = (dateFormated: Date) => {
  const month = dateFormated.getMonth() + 1;
  const day = dateFormated.getDate();
  const year = dateFormated.getFullYear();

  const monthString = month < 10 ? (`0${month}`) : (`${month}`);
  const dayString = day < 10 ? (`0${day}`) : (`${day}`);

  return [year, monthString, dayString].join('-');
};

export const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <div className="home-page__content">
        <img src={TVset} alt="TVset" className="home-page__img" />
        <p className="home-page__description">
          For the list of serials,
          please, choose the necessary
          <br />
          month and day.
        </p>
      </div>

      <Calendar
        formatMonthYear={(_, d) => dayjs(d).format('MMMM')}
        onChange={setDate}
        value={date}
        onClickDay={(d) => navigate(`/movies-list/${formatDate(d)}`)}
        nextLabel={<Icon />}
        prevLabel={<Icon />}
      />
    </div>
  );
};
