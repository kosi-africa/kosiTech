"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";

// import{CalendarEvent, google} from "calendar-link"
// import { Button } from "./button";

export default function GoogleMeetupButton() {
  // const bookingEvent:CalendarEvent={
  //   url:"",
  //   title:"",
  //   description:"test description",
  //   start:"",
  //   duration:[30,"minutes"],
  // }
  // const showCalender=()=>{
  //   const googleCalendarLink=google(bookingEvent)
  //   alert(googleCalendarLink)
  //   window.open(googleCalendarLink,'_blank')

  // }
  return (
    <>
      {/* <Button
        variant="ghost"
        className="border text-white hover:bg-slate-200 transition ease-in hover:scale-105"
        onClick={showCalender}
      >
        Book a Meeting
      </Button> */}

      <Dialog>
        <DialogTrigger className="px-1 py-2 rounded-md border text-white hover:bg-slate-200 transition ease-in hover:scale-105 hover:text-black">
          Book a Meeting
        </DialogTrigger>
        <DialogContent className="max-w-[900px]">
          <DialogHeader>
            <DialogTitle></DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <iframe
            src="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0R5eDy9eXccPmgHFscps0QThcIZl0vhbQCY4ImBG187-lD5GFjawnRtU8hdx4bA_Y87b9rLDxW"
            className="w-full h-[70vh]"
          ></iframe>
        </DialogContent>
      </Dialog>
    </>
  );
}
