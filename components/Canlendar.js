import React, { useState } from "react";
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

const CanlendarWrap = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const onClose = () => {
    setModalVisible(false);
  };
  return (
    <>
      <ModalContainer show={isModalVisible} onClose={onClose} />

      <CalendarList
        current={new Date()}
        minDate={undefined}
        maxDate={undefined}
        onDayPress={(day) => setModalVisible(true, day)}
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
    </>
  );
};

export default CanlendarWrap;
