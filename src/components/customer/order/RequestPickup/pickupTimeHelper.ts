const OPERATIONAL_START_HOUR = 8;
const OPERATIONAL_END_HOUR = 23;

export function getPickupTimeOptions(pickupDate: string) {
  const options: {
    value: string;
    label: string;
  }[] = [];

  const now = new Date();

  for (
    let hour = OPERATIONAL_START_HOUR;
    hour < OPERATIONAL_END_HOUR;
    hour++
  ) {
    const time = `${String(hour).padStart(2, "0")}:00`;

    if (!pickupDate) {
      options.push({
        value: time,
        label: time,
      });

      continue;
    }

    const pickupDateTime = new Date(
      `${pickupDate}T${time}:00`,
    );

    if (pickupDateTime > now) {
      options.push({
        value: time,
        label: time,
      });
    }
  }

  return options;
}