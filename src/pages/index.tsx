import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Drawer, Calendar } from 'antd';
import { EVENT_LIST_BY_DAY } from "../events/eventList";
import dayjs, { Dayjs } from 'dayjs';
import type { CellRenderInfo } from 'rc-picker/lib/interface';

import '../global.css';

// https://ant.design/components/calendar
// https://ant.design/components/drawer

const pageStyles = {
  color: '#000000',
  // backgroundColor: '#ffeebd',
  backgroundColor: 'rgba(255, 238, 189, 0.62)',
  padding: '3rem',
  borderRadius: '0.5rem',
  maxWidth: '780px',
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const dateCellRender = (value: Dayjs, ) => {
  const eventList = EVENT_LIST_BY_DAY(value);

  return (
    <ul className="events">
      {eventList.map((event) => (
        <li key={event.description}>
          {event.title}
        </li>
      ))}
    </ul>
  );
}

const monthCellRender = (value: Dayjs) => {
  return (
    <div className="notes-month">
      <section>{(value.month() >= 5 && value.month() <= 8) ? 'Summer Fun!' : 'Not So Much!'}</section>
    </div>
  );
};

const cellRender = (current: Dayjs, info: CellRenderInfo<Dayjs>) => {
  if (info.type === 'date') return dateCellRender(current);
  if (info.type === 'month') return monthCellRender(current);
  return info.originNode;
};

const IndexPage: React.FC<PageProps> = () => {
  const [currentDay, setCurrentDay] = React.useState(dayjs());
  const [isOpen, setOpen] = React.useState(false);

  const currentDayInfo = EVENT_LIST_BY_DAY(currentDay);
  const calendarIFrame = (
  <iframe
    src="https://calendar.google.com/calendar/embed?src=rpbvnpni8nrocdj8et0usmmbaqjavpkb%40import.calendar.google.com&ctz=America%2FDenver"
    style={{border: 0, overflow: "hidden" }}>
  </iframe>
  )
  return (
    <main style={pageStyles}>
      <div className="bg" />
      <h1>DCC Young Adults!</h1>
      <div className="googleCalendar">
        <div className="deskContent">
          {calendarIFrame}
        </div>
        <div className="phoneContent">
          {calendarIFrame}
        </div>
      </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
