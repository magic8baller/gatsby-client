import React from "react"
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import googleCalendarPlugin from "@fullcalendar/google-calendar"
import timeGridPlugin from '@fullcalendar/timegrid'
import "@fullcalendar/core/main.css"
import "@fullcalendar/daygrid/main.css"
import '@fullcalendar/timegrid/main.css'

const Calendar = () => (
  <div style={{padding: '2em'}}>
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, googleCalendarPlugin]}
      googleCalendarApiKey={`${process.env.GOOGLE_API_KEY}`}
      eventSources={[
        {
          googleCalendarId: `${process.env.GOOGLE_CAL_ID}`,
        },
      ]}
      defaultView={`timeGridWeek`}
      minTime={`08:00:00`}
      maxTime={`22:00:00`}
      scrollTime={`${new Date().toLocaleTimeString('en-US', { hour12: false })}`}
      nowIndicator={true}
      weekends={true}
      aspectRatio={1.7}
    />
  </div>
)

export default Calendar
