import { Container, Paper, Stack, Text, Title } from '@mantine/core';
import { LoginForm } from '@/components/auth/LoginForm';
export default function Page(){return <Container size={420} py={80}><Stack><Title ta="center">Masuk ke Popo Laundry</Title><Text ta="center" c="dimmed">Satu pintu login untuk seluruh role. Role ditentukan otomatis oleh sistem.</Text><Paper withBorder shadow="sm" p="xl"><LoginForm/></Paper></Stack></Container>}
