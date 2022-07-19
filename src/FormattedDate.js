import React from "react";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  let day = days[props.date.getDay()];

  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let time = `${hours}:${minutes}`;
  if (hours < 1) {
    time = `${hours + 12}:${minutes} AM`;
  } else {
    if (hours > 12) {
      time = `${hours - 12}:${minutes} PM`;
    } else {
      time = `${props.date.getHours()}:${minutes} AM`;
    }
  }

  return (
    <div>
      {day} {time}
    </div>
  );
}
