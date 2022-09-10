import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid' // a plugin!
import interactionPlugin from '@fullcalendar/interaction'
import SideBar from './Sidebar'

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

  const newPepeEvent = {
    id: '1234',
    title: 'New pepe event',
    start: '2022-09-09T11:30:00',
    end: '2022-09-09T20:30:00',
  }

  const calendarRef = React.createRef()

  function handleEventClick(e) {
    console.log(
      e.event.title,
      'starts at',
      e.event.start,
      'and ends on',
      e.event.end
    )
  }

  function getAllEvents() {
    const calendarApi = calendarRef.current.getApi()
    const events = calendarApi.getEvents()

    events.map((element) => {
      console.log(element)
    })
  }

  function addNewEvent() {
    const calendarApi = calendarRef.current.getApi()
    calendarApi.addEvent(newPepeEvent)
  }

  function delEvent() {
    const calendarApi = calendarRef.current.getApi()
    const events = calendarApi.getEvents()

    events[0].remove()
  }

  return (
    <>
      <h1>Pepe Test</h1>
      <h2>Why you like this jp</h2>
      <button onClick={getAllEvents}>Get Events</button>
      <button onClick={addNewEvent}>New Event</button>
      <button onClick={delEvent}>Delete Event</button>

      <div className="demo-app">
        <SideBar />
        <div className={'demo-app-main'}>
          <FullCalendar
            ref={calendarRef}
            plugins={[timeGridPlugin, dayGridPlugin, interactionPlugin]}
            headerToolbar={headerObj}
            titleFormat={dateObj}
            timeZone="local" //"New_Zealand/Wellington"
            initialView="timeGridWeek"
            editable={true}
            selectable={true}
            eventClick={handleEventClick}
            events={myEvent}
          />
        </div>
      </div>
    </>
  )
}
