import {
  Button,
  Card,
  Group,
  Stack,
  Text,
  ThemeIcon,
} from "@mantine/core";

import {
  IconMapPin,
  IconPhone,
} from "@tabler/icons-react";

type DriverDestinationCardProps = {
  title: string;
  name: string;
  address: string;
  phone?: string;
  latitude: number;
  longitude: number;
};

export function DriverDestinationCard({
  title,
  name,
  address,
  phone,
  latitude,
  longitude,
}: DriverDestinationCardProps) {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;

  return (
    <Card withBorder radius="lg" p="lg">
      <Stack gap="md">
        <Group gap="sm" align="flex-start">
          <ThemeIcon
            variant="light"
            radius="xl"
            size="lg"
          >
            <IconMapPin size={18} />
          </ThemeIcon>

          <Stack gap={2}>
            <Text fw={600}>
              {title}
            </Text>

            <Text size="xs" c="dimmed">
              Lokasi tujuan tugas driver
            </Text>
          </Stack>
        </Group>

        <Stack gap={4}>
          <Text fw={600}>
            {name}
          </Text>

          <Text
            size="sm"
            c="dimmed"
            style={{ lineHeight: 1.5 }}
          >
            {address}
          </Text>
        </Stack>

        {phone && (
          <Group gap="xs">
            <IconPhone
              size={16}
              color="var(--color-text-secondary)"
            />

            <Text
              component="a"
              href={`tel:${phone}`}
              size="sm"
              fw={500}
              style={{
                color: "var(--color-primary-dark)",
                textDecoration: "none",
              }}
            >
              {phone}
            </Text>
          </Group>
        )}

        <Button
          component="a"
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          variant="light"
          leftSection={<IconMapPin size={18} />}
        >
          Buka di Maps
        </Button>
      </Stack>
    </Card>
  );
}