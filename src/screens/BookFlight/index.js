import React from 'react';
import SeatPicker from "react-seat-picker";
import { Button, Typography } from "antd";
import { InputNumber } from "antd";
import { useDispatch } from 'react-redux';
import { totalAdults, totalChild, totalUnderAge, totalYouth } from '../../redux/reducers/flightReducer';

const BookFlight = () => {
    // const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    function onAudultChange(value) {
        dispatch(totalAdults(value))
    }
    function onYouthChange(value) {
        dispatch(totalYouth(value))
    }
    function onChildChange(value) {
        dispatch(totalChild(value));
    }
    function onUnderAgeChange(value) {
        dispatch(totalUnderAge(value));
    }
    // const addSeatCallback = ({ row, number, id }, addCb) => {
    //     setLoading(true,
    //         async () => {
    //             await new Promise(resolve => setTimeout(resolve, 1500));
    //             console.log(`Added seat ${number}, row ${row}, id ${id}`);
    //             const newTooltip = `tooltip for id-${id} added by callback`;
    //             addCb(row, number, id, newTooltip);
    //             setLoading(false);
    //         }
    //     );

    // };
    // const removeSeatCallback = ({ row, number, id }, removeCb) => {
    //     setLoading(true,
    //         async () => {
    //             await new Promise(resolve => setTimeout(resolve, 1500));
    //             console.log(`"Removed seat ${number}, row ${row}, id ${id}"`);
    //             const newTooltip = ["A", "B", "C"].includes(row) ? null : "";
    //             removeCb(row, number, newTooltip);
    //             setLoading(false);
    //         }
    //     );

    // };
    return (
        <div style={{ width: "500px", height: "500px", textAlign: "center", }}>
            <Typography>Total Passengers</Typography>
            <div >
                <InputNumber
                    style={{ width: 200, margin: "10px" }}
                    placeholder="Adult (18+)..."
                    min={0}
                    max={10}
                    onChange={onAudultChange}
                />
                <InputNumber
                    style={{ width: 200, margin: "10px" }}
                    placeholder="Youth (12-17)..."
                    min={0}
                    max={10}
                    onChange={onYouthChange}
                />
                <InputNumber
                    style={{ width: 200, margin: "10px" }}
                    placeholder="Child (3-11)..."
                    min={0}
                    max={10}
                    onChange={onChildChange}
                />
                <InputNumber
                    style={{ width: 200, margin: "10px" }}
                    placeholder="Infant (Under 2)..."
                    min={0}
                    max={10}
                    onChange={onUnderAgeChange}
                />
            </div>
            <Typography>Select Seats</Typography>
            <div style={{ marginLeft: "150px", marginTop: "50px" }}>
                <SeatPicker
                    rows={rows}
                    maxReservableSeats={4}
                    // addSeatCallback={addSeatCallback}
                    // removeSeatCallback={removeSeatCallback}
                    remove
                    alpha
                    // loading={loading}
                    visible
                    selectedByDefault
                    tooltipProps={{ multiline: true }}
                />
            </div>
            <Button type="primary" style={{ marginTop: "50px" }}>Done</Button>
        </div>
    )
}

export default BookFlight;


const rows = [
    [
        { id: 1, number: "1" },
        { id: 2, number: "2" },
        null,
        { id: 3, number: "3", isReserved: true, tooltip: "Reserved" },
        { id: 4, number: "4" }
    ],
    [
        { id: 5, number: "1" },
        { id: 6, number: "2" },
        null,

        { id: 7, number: "3" },
        { id: 8, number: "4" }
    ],
    [
        { id: 9, number: "1", isReserved: true, tooltip: "Reserved" },
        { id: 10, number: "2" },
        null,

        { id: 11, number: "3" },
        { id: 12, number: "4" }
    ],
    [
        { id: 13, number: "1" },
        { id: 14, number: "2" },
        null,

        { id: 15, number: "3" },
        { id: 16, number: "4" }
    ],
    [
        { id: 17, number: "1" },
        { id: 28, number: "2" },
        null,
        { id: 19, number: "3", isReserved: true, tooltip: "Reserved" },
        { id: 20, number: "4", isReserved: true, tooltip: "Reserved" }
    ],
    [
        { id: 21, number: "1", isReserved: true, tooltip: "Reserved" },
        { id: 22, number: "2" },
        null,

        { id: 23, number: "3" },
        { id: 24, number: "4" }
    ],
    [
        { id: 25, number: "1" },
        { id: 26, number: "2" },
        null,

        { id: 27, number: "3" },
        { id: 28, number: "4" }
    ]
];