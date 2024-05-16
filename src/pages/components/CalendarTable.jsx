import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Modal from "./Modal"; // Import the modal component

const CalendarTable = () => {
  const localizer = momentLocalizer(moment);
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [eventTitle, setEventTitle] = useState("");
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Meeting 1",
      start: new Date(2024, 4, 1, 10, 0),
      end: new Date(2024, 4, 1, 12, 0),
    },
    {
      id: 2,
      title: "Meeting 2",
      start: new Date(2024, 4, 3, 11, 0),
      end: new Date(2024, 4, 3, 13, 0),
    },
  ]);

  const eventStyleGetter = (event, start, end, isSelected) => {
    const backgroundColor = "rgb(239, 68, 68)";
    return {
      style: {
        backgroundColor,
        borderRadius: "5px",
        opacity: 0.8,
        color: "white",
        border: "none",
      },
    };
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
    const event = events.find((event) =>
      moment(event.start).isSame(date, "day")
    );
    if (event) {
      setSelectedEvent(event);
      setEventTitle(event.title);
    } else {
      setSelectedEvent(null);
      setEventTitle("");
    }
    setShowModal(true);
  };

  const handleAddEvent = () => {
    if (selectedEvent) {
      const updatedEvents = events.map((event) =>
        event.id === selectedEvent.id ? { ...event, title: eventTitle } : event
      );
      setEvents(updatedEvents);
    } else {
      const newEvent = {
        id: events.length + 1,
        title: eventTitle || "New Meeting",
        start: selectedDate,
        end: moment(selectedDate).add(1, "hour").toDate(),
      };
      setEvents([...events, newEvent]);
    }
    setShowModal(false);
    setEventTitle("");
  };

  const handleDeleteEvent = () => {
    const updatedEvents = events.filter(
      (event) => event.id !== selectedEvent.id
    );
    setEvents(updatedEvents);
    setShowModal(false);
    setEventTitle("");
  };

  return (
    <div className="max-w-[60rem] mx-auto mt-8 shadow-lg p-4">
      <h1 className="text-2xl font-semibold">Calendar</h1>
      <p className="mb-4 mt-1 text-sm text-gray-400 after:block after:content-[''] after:w-16 after:h-[3px] after:bg-primary">
        Calender Table
      </p>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 400 }}
        selectable
        onSelectSlot={(slotInfo) => handleDateClick(slotInfo.start)}
        onSelectEvent={(event) => {
          setSelectedDate(event.start);
          setSelectedEvent(event);
          setEventTitle(event.title);
          setShowModal(true);
        }}
        eventPropGetter={eventStyleGetter} // Apply custom styles to events
      />
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <h2 className="text-xl font-bold mb-2">
          {selectedEvent ? "Edit Event" : "Add Event"}
        </h2>
        <input
          type="text"
          className="border border-gray-300 rounded-md px-3 py-2 mb-2 w-full"
          placeholder="Event Title"
          value={eventTitle}
          onChange={(e) => setEventTitle(e.target.value)}
        />
        <div className="flex justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-400"
            onClick={handleAddEvent}
          >
            {selectedEvent ? "Save Changes" : "Add Event"}
          </button>
          {selectedEvent && (
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-red-400"
              onClick={handleDeleteEvent}
            >
              Delete Event
            </button>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default CalendarTable;
