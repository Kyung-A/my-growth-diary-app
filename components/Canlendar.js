import React from "react";
import styled from "styled-components/native";
import { CalendarList, LocaleConfig } from "react-native-calendars";
import ModalContainer from "./Modal";

LocaleConfig.locales["kr"] = {
  monthNames: [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ],
  monthNamesShort: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  dayNames: [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ],
  dayNamesShort: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
  today: "Aujourd'hui",
};
LocaleConfig.defaultLocale = "kr";

const onDayPress = () => {
  <ModalContainer />;
};

const CanlendarWrap = () => (
  <CalendarList
    current={Date()}
    minDate={undefined}
    maxDate={undefined}
    onDayPress={onDayPress}
    onDayLongPress={undefined}
    monthFormat={"MMM yyyy"}
    onMonthChange={(month) => {
      console.log("month changed", month);
    }}
    hideArrows={false}
    renderArrow={undefined}
    hideExtraDays={true}
    disableMonthChange={true}
    firstDay={1}
    hideDayNames={false}
    showWeekNumbers={false}
    onPressArrowLeft={(subtractMonth) => subtractMonth()}
    onPressArrowRight={(addMonth) => addMonth()}
    disableArrowLeft={false}
    disableArrowRight={false}
    disableAllTouchEventsForDisabledDays={true}
    renderHeader={undefined}
    enableSwipeMonths={true}
    horizontal={true}
    pagingEnabled={true}
    markedDates={{
      "2020-09-10": { selected: true, marked: true, selectedColor: "blue" },
    }}
  />
);

export default CanlendarWrap;
