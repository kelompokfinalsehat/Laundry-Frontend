'use client';
import { Anchor, Button, Divider, PasswordInput, Stack, TextInput } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import Link from 'next/link';
import { loginSchema } from '@/lib/validation/auth';

export function LoginForm(){const form=useForm({initialValues:{email:'',password:''},validate:zodResolver(loginSchema)});const submit=form.onSubmit(async(values)=>{console.info('Hubungkan ke POST /auth/login',values.email);});return <form onSubmit={submit}><Stack><TextInput label="Email" placeholder="nama@email.com" {...form.getInputProps('email')}/><PasswordInput label="Password" {...form.getInputProps('password')}/><Anchor component={Link} href="/lupa-password" size="sm">Lupa password?</Anchor><Button type="submit">Masuk</Button><Divider label="atau"/><Button variant="default" type="button">Lanjutkan dengan Google</Button><Anchor component={Link} href="/register" ta="center">Daftar sebagai customer</Anchor></Stack></form>}
