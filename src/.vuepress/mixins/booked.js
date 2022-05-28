export default {
  computed: {
    bookedDates() {
      const currentDate = new Date();
      const nextMonthDate = new Date();
      nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);
      const [year, month, day] = currentDate.toISOString().substring(0, 10).split('-');
      const [nextYear, nextMonth, nextDay] = nextMonthDate.toISOString().substring(0, 10).split('-');

      return [
        `${year}-${month}-02`,
        [`${year}-${month}-06`, `${year}-${month}-11`],
        `${year}-${month}-18`,
        `${year}-${month}-19`,
        `${year}-${month}-20`,
        `${year}-${month}-25`,
        `${year}-${month}-28`,
        `${nextYear}-${nextMonth}-03`,
        `${nextYear}-${nextMonth}-08`,
        `${nextYear}-${nextMonth}-15`,
      ];
    },
  },
}