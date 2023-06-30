import React, { useState } from 'react';
import "./Service.css";
import EventSeatIcon from '@mui/icons-material/EventSeat';

const Seat_booking = () => {
  const [seatsSide1, setSeatsSide1] = useState([
    [true, false, false, false, true, false, false, false, false, false],
    [false, false, false, true, false, false, false, false, true, false]
  ]);
  const [seatsSide2, setSeatsSide2] = useState([
    [false, true, false, false, false, false, false, false, false, false],
    [false, false, false, true, false, true, false, false, false, false]
  ]);

  const [selectedSeatSide1, setSelectedSeatSide1] = useState(null);
  const [selectedSeatSide2, setSelectedSeatSide2] = useState(null);

  const bookSeatSide1 = (row, column) => {
    if (!seatsSide1[row][column]) {
      const updatedSeats = seatsSide1.map((seatRow, rowIndex) =>
        rowIndex === row ? seatRow.map((seat, columnIndex) => (columnIndex === column ? true : seat)) : seatRow
      );
      setSeatsSide1(updatedSeats);
      setSelectedSeatSide1({ row, column });

    } else {
      alert("Seat is already booked");
    }
  };

  const bookSeatSide2 = (row, column) => {
    if (!seatsSide2[row][column]) {
      const updatedSeats = seatsSide2.map((seatRow, rowIndex) =>
        rowIndex === row ? seatRow.map((seat, columnIndex) => (columnIndex === column ? true : seat)) : seatRow
      );
      setSeatsSide2(updatedSeats);
      setSelectedSeatSide2({ row, column });

    } else {
      alert("Seat is already booked");
    }
  };

  const isSeatSelectedSide1 = (row, column) => {
    return selectedSeatSide1 && selectedSeatSide1.row === row && selectedSeatSide1.column === column;
  };

  const isSeatSelectedSide2 = (row, column) => {
    return selectedSeatSide2 && selectedSeatSide2.row === row && selectedSeatSide2.column === column;
  };

  return (
    <div className='container-ticket'>
      <div className='demo'>
        <div className='ava'> <EventSeatIcon className="seat" style={{ fontSize: '50px' }} /><br></br>
          <p>Available</p>
        </div>
        <div className='booked-demo'> <EventSeatIcon
          className='booked'
          style={{ fontSize: '50px' }} /><br></br>
          <p>Booked</p>
        </div>
      </div>
      <div className='seat-container'>
        <div className="bus-seats">
          {seatsSide1.map((row, rowIndex) => (
            <div className="row" key={rowIndex}>
              {row.map((seat, columnIndex) => (
                <EventSeatIcon
                  className={`seat ${seat ? 'booked' : ''} ${isSeatSelectedSide1(rowIndex, columnIndex) ? 'selected' : ''}`}
                  key={columnIndex}
                  onClick={() => bookSeatSide1(rowIndex, columnIndex)}
                  style={{ fontSize: '50px' }} // Increase the size of the icon
                />
              ))}
            </div>
          ))}
        </div>
        <div className="bus-seats">
          {seatsSide2.map((row, rowIndex) => (
            <div className="row" key={rowIndex}>
              {row.map((seat, columnIndex) => (
                <EventSeatIcon
                  className={`seat ${seat ? 'booked' : ''} ${isSeatSelectedSide2(rowIndex, columnIndex) ? 'selected' : ''}`}
                  key={columnIndex}
                  onClick={() => bookSeatSide2(rowIndex, columnIndex)}
                  style={{ fontSize: '50px' }} // Increase the size of the icon
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      <button className='btn-booking' id='btn' onClick={() => {
        if (selectedSeatSide1) {
          alert(`Your seat on Side 1: Row ${selectedSeatSide1.row + 1}, Seat ${selectedSeatSide1.column + 1} is booked`)
          console.log(`Selected seat on Side 1: Row ${selectedSeatSide1.row + 1}, Seat ${selectedSeatSide1.column + 1}`);
        }
        else if (selectedSeatSide2) {
          alert(`Your seat on Side 2: Row ${selectedSeatSide2.row + 1}, Seat ${selectedSeatSide2.column + 1} is booked`)
          console.log(`Selected seat on Side 2: Row ${selectedSeatSide2.row + 1}, Seat ${selectedSeatSide2.column + 1}`);
        }
      }}>Book now</button>
    </div>
  );
};

export default Seat_booking;
