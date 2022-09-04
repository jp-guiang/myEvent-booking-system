import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

export default function Calendar() {
  return (
    <>
      <h1>Pepe Test</h1>
      <h2>Why you like this jp</h2>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={[{ title: 'Pepe please work', date: new Date(Date.now()) }]}
      />
    </>
  )
}
