import dayjs from 'dayjs';

const dateUtil = {
  getFormattedDateFromISO: (dateString: string) => {
    return dayjs(dateString).format('DD MMM YYYY H:mm A');
  },
};

export default dateUtil;
