import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid' // a plugin!

export default function Calendar() {
  const headerObj = {
    left: 'prev,next today',
    center: 'title',
    right: 'timeGridDay,timeGridWeek,dayGridMonth',
  }
  const dateObj = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }
  //year-month-day

  // Use this function toconvert date to ISO
  // var date = new Date();
  // date.toISOString();
  const myEvent = [
    {
      title: 'Pepe please work',
      start: '2022-09-04T12:30:00',
      end: '2022-09-04T14:30:00',
    },
  ]

  return (
    <>
      <h1>Pepe Test</h1>
      <h2>Why you like this jp</h2>
      <FullCalendar
        plugins={[timeGridPlugin, dayGridPlugin]}
        headerToolbar={headerObj}
        titleFormat={dateObj}
        timeZone="New_Zealand/Wellington"
        initialView="timeGridWeek"
        events={myEvent}
      />
    </>
  )
}
