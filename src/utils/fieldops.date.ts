import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import "dayjs/locale/id";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.locale("id");

const FIELD_OPS_TIMEZONE = "Asia/Jakarta";

type DateValue = string | Date | null | undefined;

export function formatFieldOpsDate(value: DateValue) {
  if (!value) return "—";

  const date = dayjs(value);

  if (!date.isValid()) return "—";

  return date
    .tz(FIELD_OPS_TIMEZONE)
    .format("D MMMM YYYY");
}

export function formatFieldOpsTime(value: DateValue) {
  if (!value) return "—";

  const date = dayjs(value);

  if (!date.isValid()) return "—";

  return date
    .tz(FIELD_OPS_TIMEZONE)
    .format("HH:mm");
}