'use server';

import { redirect } from 'next/navigation';
import { upsertAdmin as upsertAdminHandler } from '@/app/admin/upsert-admin';
import { getRepository } from '@/repositories';

export async function upsertAdmin(inputs: FormData) {
  await isAdminExists();

  const result = await upsertAdminHandler(inputs);

  if (result.data) {
    redirectAdmin();
  } else {
    return result;
  }
}

export async function isAdminExists() {
  const exists = await getRepository('admin').getOne();

  if (exists) {
    redirectAdmin();
  }
}

function redirectAdmin() {
  redirect('/admin/guest/login');
}
