'use client';
import { AppShell, Group, Text } from '@mantine/core';
export function FieldOpsAppShell({children,role}:{children:React.ReactNode;role:'Worker'|'Driver'}){return <AppShell header={{height:56}} padding="md"><AppShell.Header><Group h="100%" px="md" justify="space-between"><Text fw={800}>Popo Laundry</Text><Text size="sm">{role}</Text></Group></AppShell.Header><AppShell.Main maw={720} mx="auto">{children}</AppShell.Main></AppShell>}
