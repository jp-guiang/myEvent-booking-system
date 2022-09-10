import React from 'react'
import FullCalendar, { formatDate } from '@fullcalendar/react'

export default function SideBar() {
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

  return (
    <>
      <div className={'demo-app-sidebar'}>
        <h1>Sidebar</h1>
        <h2>Also sidebar stuff</h2>
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
