import React, { Component } from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import 'moment/locale/de'
import { getEvents } from "./fetch";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import 'react-big-calendar/lib/sass/styles.scss'
import './styles.scss'
import './prism.scss'

const momenteLocalizer = momentLocalizer(moment)

// let allViews = Object.keys(Views).map(k => Views[k])

const ColoredDateCellWrapper = ({ children }) =>
  React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: 'lightblue',
    },
  })

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }

  componentDidMount() {
    getEvents(events => {
      this.setState({ events });
    });
  }

  render() {
    return (
      <div>
        <Calendar
          localizer={momenteLocalizer}
          events={this.state.events}
          views={ [ Views.AGENDA, Views.MONTH, Views.DAY ]}
        //   views={allViews}
          step={60}
          showMultiDayTimes
          startAccessor="start"
          endAccessor="end"
          defaultView="agenda"
          culture="de"
          messages={{
            next: "Nächster",
            previous: "Vorheriger",
            today: "Heute",
            month: "Monat",
            week: "Woche",
            day: "Tag",
            agenda: "Events"
          }}
          components={{
            timeSlotWrapper: ColoredDateCellWrapper,
          }}
        //   onNavigate
        />
      </div>
    );
  }
}