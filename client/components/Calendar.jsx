import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid' // a plugin!
import interactionPlugin from '@fullcalendar/interaction'

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
      start: '2022-09-10T12:30:00',
      end: '2022-09-10T14:30:00',
    },
    {
      id: 'Another Pepe test',
      title: 'All-day event',
      start: new Date().toISOString().replace(/T.*$/, ''),
    },
    {
      id: 'Pepe test again and again',
      title: 'Timed event',
      start: new Date().toISOString().replace(/T.*$/, '') + 'T12:00:00',
    },
  ]

  return (
    <>
      <h1>Pepe Test</h1>
      <h2>Why you like this jp</h2>
      <FullCalendar
        plugins={[timeGridPlugin, dayGridPlugin, interactionPlugin]}
        headerToolbar={headerObj}
        titleFormat={dateObj}
        timeZone="local" //"New_Zealand/Wellington"
        initialView="timeGridWeek"
        editable={true}
        selectable={true}
        events={myEvent}
      />
    </>
  )
}
