let GOOGLE_CALENDAR_URL = `https://www.googleapis.com/calendar/v3/calendars/lkg.ludwigslust@gmail.com/events?key=AIzaSyBRuoNBnzU5Z5Cdzmg56noRz9RXTd9j0Qc`;

    export function getEvents(callback) {
  fetch(GOOGLE_CALENDAR_URL).then(response => response.json())
  .then(data => {
    console.log(data);
    const events = [];
    data.items.map(event => {
      console.log(`event: ${JSON.stringify(event)}`);
      return events.push({
        start: new Date(event.start.dateTime.toString()),
        end: new Date(event.end.dateTime.toString()),
        title: event.summary,
        desc: event.description
      });
    });
    callback(events);
  });
  
  
  // .then(response => {
  //   if (!response.ok) {
  //     throw new Error('Network response was not ok');
  //   }
  //   console.log(`response: ${JSON.stringify(response.json())}`);
  //   const events = [];
  //   JSON.parse(response).items.map(event => {
  //     console.log(`event: ${JSON.stringify(event)}`);
  //     return events.push({
  //       start: new Date(event.start.dateTime.toString()),
  //       end: new Date(event.end.dateTime.toString()),
  //       title: event.summary,
  //       desc: event.description
  //     });
  //   });
  //   callback(events);
  // });
}