import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export const getElapsedTimeFromNow = date => dayjs(date).fromNow();

export const getFormattedDayAndTime = date => dayjs(date).format("dddd, h A");
