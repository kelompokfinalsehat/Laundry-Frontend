'use client';
import { Button, Group, Modal, PasswordInput, Stack, Text, Textarea } from '@mantine/core';
import { useState } from 'react';

export function ConfirmDialog({ opened, title, message, confirmLabel='Konfirmasi', withPasswordReentry=false, requireReason=false, loading=false, onClose, onConfirm }: { opened:boolean; title:string; message:string; confirmLabel?:string; withPasswordReentry?:boolean; requireReason?:boolean; loading?:boolean; onClose:()=>void; onConfirm:(payload:{ password?:string; reason?:string })=>void }) {
  const [password,setPassword]=useState(''); const [reason,setReason]=useState('');
  const blocked=(withPasswordReentry&&!password)||(requireReason&&!reason.trim());
  return <Modal opened={opened} onClose={onClose} title={title} centered><Stack><Text>{message}</Text>{withPasswordReentry&&<PasswordInput label="Masukkan ulang password" value={password} onChange={(e)=>setPassword(e.currentTarget.value)} required />}{requireReason&&<Textarea label="Keterangan masalah" value={reason} onChange={(e)=>setReason(e.currentTarget.value)} required />}<Group justify="flex-end"><Button variant="default" onClick={onClose}>Batal</Button><Button color="red" loading={loading} disabled={blocked} onClick={()=>onConfirm({password,reason})}>{confirmLabel}</Button></Group></Stack></Modal>;
}
