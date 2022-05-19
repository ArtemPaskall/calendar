import './Calendar.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Calendar from 'react-calendar';
import dayjs from 'dayjs';
// import locale from 'dayjs/locale/ru';
import arrow from '../../Images/arrow_icon.png';

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

  // const formatDate = (dateFormated: Date) => {
  //   const month = dateFormated.getMonth() + 1;
  //   const day = dateFormated.getDate();
  //   const year = dateFormated.getFullYear();

  //   const monthString = month < 10 ? (`0${month}`) : (`${month}`);
  //   const dayString = day < 10 ? (`0${day}`) : (`${day}`);

  //   return [year, monthString, dayString].join('-');
  // };

  return (
    <>
      <div>
        <Calendar
          formatMonthYear={(_, d) => dayjs(d).format('MMMM')}
          onChange={setDate}
          value={date}
          onClickDay={(d) => navigate(`/movies-list/${formatDate(d)}`)}
          nextLabel={<Icon />}
          prevLabel={<Icon />}
        />
      </div>
    </>
  );
};
