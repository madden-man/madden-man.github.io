import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Badge, Calendar } from 'antd';
import { EVENT_LIST_BY_DAY } from "../events/eventList";
import type { Dayjs } from 'dayjs';
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
        <li key={event.description} className="no-list-style">
          <Badge status="success" text={event.title} />
        </li>
      ))}
    </ul>
  );
}

const monthCellRender = (value: Dayjs) => {
  return (
    <div className="notes-month">
      <section>The Month!</section>
    </div>
  );
};

const cellRender = (current: Dayjs, info: CellRenderInfo<Dayjs>) => {
  if (info.type === 'date') return dateCellRender(current);
  if (info.type === 'month') return monthCellRender(current);
  return info.originNode;
};

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <div className="bg" />
      <h1>DCC Young Adults!</h1>
      <Calendar cellRender={cellRender}/>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
