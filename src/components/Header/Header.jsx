import React from "react";
import { useState } from "react";
import "./header.css";
import { BiSolidHotel, BiSolidTaxi } from "react-icons/bi";
import { MdFlightTakeoff } from "react-icons/md";
import { AiFillCar } from "react-icons/ai";
import { PiPersonFill } from "react-icons/pi";
import { BsFillCalendarDateFill } from "react-icons/bs";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { format } from "date-fns";

const Header = ({ type }) => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adults: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerList">
          <button className="headerListItem active">
            <BiSolidHotel />
            <span>Stays</span>
          </button>

          <button className="headerListItem">
            <MdFlightTakeoff />
            <span>Flight</span>
          </button>

          <button className="headerListItem">
            <AiFillCar />
            <span>Car Rentals</span>
          </button>

          <button className="headerListItem">
            <BiSolidHotel />
            <span>Attraction</span>
          </button>

          <button className="headerListItem">
            <BiSolidTaxi />
            <span>Airport Taxi</span>
          </button>
        </div>
        {type !== "list" && (
          <>
            <h1 className="headerTitle">Find your next stay</h1>
            <p className="headerDesc">
              Get rewarded for travels Unlock instant savings of 10% or more
              with a free Xpress Booking Account
            </p>
            <button className="headerBtn">Sign in / Register</button>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <BiSolidHotel className="headerIcon" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="headerSearchInput"
                />
              </div>
              <div className="headerSearchItem">
                <BsFillCalendarDateFill className="headerIcon" />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <PiPersonFill className="headerIcon" />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText"
                >{`${options.adults} Adults . ${options.children} Children . ${options.room} Rooms `}</span>

                {openOptions && (
                  <div className="options">
                    <div className="optionItems">
                      <span className="optionText">Adults</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.adults <= 1}
                          className="optionCounterBtn"
                          onClick={() => handleOption("adults", "d")}
                        >
                          -
                        </button>
                        <span className="optionCountertext">
                          {options.adults}
                        </span>
                        <button
                          className="optionCounterBtn"
                          onClick={() => handleOption("adults", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItems">
                      <span className="optionText">Children</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.children <= 0}
                          className="optionCounterBtn"
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                        <span className="optionCountertext">
                          {options.children}
                        </span>
                        <button
                          className="optionCounterBtn"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItems">
                      <span className="optionText">Rooms</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.room <= 1}
                          className="optionCounterBtn"
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span className="optionCountertext">
                          {options.room}
                        </span>
                        <button
                          className="optionCounterBtn"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItembtn">
                <button className="headerBtnLast">Search</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
