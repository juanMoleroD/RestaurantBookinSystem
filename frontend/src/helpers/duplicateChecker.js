class DuplicateChecker {

    noDuplicatesExists(existingBookings, bookingToCheck) {
        let result = true
        existingBookings.forEach(booking => {
            if (booking.id !== bookingToCheck.id
                && booking.date === bookingToCheck.date
                && booking.tableNumber === parseInt(bookingToCheck.tableNumber)
                && this.checkTableOccupiedAtBookingTime(booking, bookingToCheck)) {
                    result = false;
            }
        })
        return result
    }

    checkTableOccupiedAtBookingTime(existingBooking, bookingToCheck) {
        let result = false;
        let now = new Date();

        const bookingToCheckInDateFormat = new Date(now.getFullYear(), now.getMonth(), now.getDate(), ...bookingToCheck.time.split(":"))
        const bookingToCheckInDateFormatPlusTwoHours = new Date(now.getFullYear(), now.getMonth(), now.getDate(), ...bookingToCheck.time.split(":"))
        bookingToCheckInDateFormatPlusTwoHours.setHours(bookingToCheckInDateFormatPlusTwoHours.getHours() + 2);

        const existingBookingInDateFormat = new Date(now.getFullYear(), now.getMonth(), now.getDate(), ...existingBooking.time.split(":"));
        const existingBookingInDateFormatPlusTwoHours = new Date(now.getFullYear(), now.getMonth(), now.getDate(), ...existingBooking.time.split(":"));
        existingBookingInDateFormatPlusTwoHours.setHours(existingBookingInDateFormatPlusTwoHours.getHours() + 2);

        if (existingBookingInDateFormat <= bookingToCheckInDateFormat 
            && bookingToCheckInDateFormat < existingBookingInDateFormatPlusTwoHours) result = true;
        if (existingBookingInDateFormat <= bookingToCheckInDateFormatPlusTwoHours 
            && bookingToCheckInDateFormatPlusTwoHours < existingBookingInDateFormatPlusTwoHours) result = true;
        return result;
    }
}

export default DuplicateChecker;