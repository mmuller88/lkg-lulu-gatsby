import request from "superagent";

let GOOGLE_CALENDAR_URL = `https://www.googleapis.com/calendar/v3/calendars/lkg.ludwigslust@gmail.com/events?key=AIzaSyBRuoNBnzU5Z5Cdzmg56noRz9RXTd9j0Qc`;

    export function getEvents(callback) {
  request.get(GOOGLE_CALENDAR_URL).end((err, resp) => {
    if (!err) {
      const events = [];
      JSON.parse(resp.text).items.map(event => {
        console.log(`event: ${JSON.stringify(event)}`);
        return events.push({
          start: new Date(event.start.dateTime.toString()),
          end: new Date(event.end.dateTime.toString()),
          title: event.summary,
          desc: event.description
        });
      });
      callback(events);
    }
  });
}