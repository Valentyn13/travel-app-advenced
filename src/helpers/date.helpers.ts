import { IBookingList } from "../types/booking.types";

export const formatDate = (inputDate: string) => {
    const date = new Date(inputDate);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
  
    return formattedDate;
  }

export const sortByDate = (objectsArray:IBookingList) => {
    const sortedArray = [...objectsArray];
  
    sortedArray.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
  
      return dateA - dateB;
    });
  
    return sortedArray;
  }

  export const isDateBeforeCurrent = (date: string) => {
    const dateInput = new Date(date);
    const currentDate = new Date();
    return dateInput < currentDate;
  }

  export const isTomorrowOrLater = (date: string) => {
    const inputDate = new Date(date);
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 1);

    return inputDate >= currentDate;
  }

  export const getTomorrowDate = () => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 1);
    return currentDate
  }