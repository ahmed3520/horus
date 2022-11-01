import React, { useState } from "react";
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

function DatePicker({startDate,setStartDate, endDate,setEndDate}) {

  const [selected, setSelected] = React.useState();
  let footer = <p>Please pick a day.</p>;
  if (startDate) {
    footer = <p>You picked {format(startDate, 'PP')}.</p>;
  }
  return (
    <DayPicker
      mode="single"
      selected={startDate}
      onSelect={setStartDate}
      footer={footer}
    />
  );
}

export default DatePicker;
