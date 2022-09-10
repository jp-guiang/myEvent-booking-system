import React, { useState } from 'react'
import { formatDate } from '@fullcalendar/react'

const initialForm = {
  eventName: '',
  eventDate: '',
  startTime: '',
  endTime: '',
  allDay: false,
}
export default function SideBar() {
  const [form, setForm] = useState(initialForm)

  function renderSidebarEvent(event) {
    return (
      <li key={event.id}>
        <b>
          {formatDate(event.start, {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </b>
        <i>{event.title}</i>
      </li>
    )
  }

  function handleChange(e) {
    const { name, value } = e.target
    const newForm = { ...form, [name]: value }
    setForm(newForm)
  }

  function allDayToggle(e) {
    const { name, checked } = e.target

    const newForm = { ...form, [name]: checked }

    setForm(newForm)
  }

  function handleSubmit(e) {
    e.preventDefault()
    e.target.allDay.checked = false //this will make the checkbox unticked
    console.log(form)
    setForm(initialForm)
  }

  return (
    <>
      <div className={'demo-app-sidebar'}>
        <div className={'demo-app-sidebar-section'}>
          <h1>Book an event!</h1>

          <form onSubmit={handleSubmit}>
            <div>
              <div>
                <label htmlFor="eventName">
                  Event Name:
                  <br></br>
                  <input
                    id={'eventName'}
                    onChange={handleChange}
                    value={form.eventName}
                    name={'eventName'}
                  ></input>
                </label>
              </div>
              <div>
                <label htmlFor="eventDate">
                  Date:
                  <br></br>
                  <input
                    id={'eventDate'}
                    onChange={handleChange}
                    value={form.eventDate}
                    name={'eventDate'}
                  ></input>
                </label>
              </div>
              <div>
                <label htmlFor="startTime">
                  Start Time:
                  <br></br>
                  <input
                    id={'startTime'}
                    onChange={handleChange}
                    value={form.startTime}
                    name={'startTime'}
                  ></input>
                </label>
              </div>
              <div>
                <label htmlFor="endTime">
                  End Time:
                  <br></br>
                  <input
                    id={'endTime'}
                    onChange={handleChange}
                    value={form.endTime}
                    name={'endTime'}
                  ></input>
                </label>
              </div>
              <div>
                <label htmlFor="allDay">
                  All Day:
                  <input
                    type={'checkbox'}
                    id={'allDay'}
                    onChange={allDayToggle}
                    value={form.allDay}
                    name={'allDay'}
                  ></input>
                </label>
              </div>
            </div>
            <input type="submit"></input>
          </form>
        </div>
      </div>
    </>
    // <div className="demo-app-sidebar">
    //   <div className="demo-app-sidebar-section">
    //     <h2>Instructions</h2>
    //     <ul>
    //       <li>Select dates and you will be prompted to create a new event</li>
    //       <li>Drag, drop, and resize events</li>
    //       <li>Click an event to delete it</li>
    //     </ul>
    //   </div>
    //   <div className="demo-app-sidebar-section">
    //     <label>
    //       <input
    //         type="checkbox"
    //         checked={this.state.weekendsVisible}
    //         onChange={this.handleWeekendsToggle}
    //       ></input>
    //       toggle weekends
    //     </label>
    //   </div>
    //   <div className="demo-app-sidebar-section">
    //     <h2>All Events ({this.state.currentEvents.length})</h2>
    //     <ul>{this.state.currentEvents.map(renderSidebarEvent)}</ul>
    //   </div>
    // </div>
  )
}
