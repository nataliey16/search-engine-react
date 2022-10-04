import React from "react";

export default function FormattedDate(props) {
  let days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];

  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  let day = days[props.date.getDay()];
  let month = months[props.date.getMonth()];
  let date = props.date.getDate();
  let year = props.date.getFullYear();
  let time = props.date.toLocaleTimeString([], {
    hour: `2-digit`,
    minute: `2-digit`,
  });

  // let hours = props.date.getHours();
  // if (hours < 10) {
  //   hours = `0${hours}`;
  // }

  // let minutes = props.date.getMinutes();
  // if (minutes < 10) {
  //   minutes = `0${minutes}`;
  // }

  return (
    <div className="Current-date">
      <div>
        {month} {date}, {year}
      </div>
      {day}, {time}
    </div>
  );
}
