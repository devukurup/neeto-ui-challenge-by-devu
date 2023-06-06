import dayjs from "dayjs";

export const getElapsedTime = date => dayjs(date).fromNow();

export const formatDate = date => dayjs(date).format("dddd, h A");
