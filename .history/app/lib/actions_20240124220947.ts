'use server';
import { z } from 'zod';

const FormSchema = 

export async function createInvoice(formData: FormData) {
    const rawFormData = {
        customerId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status'),
    };
    // const rawFormData = Object.fromEntries(formData.entries())
    console.log(rawFormData);
    console.log(typeof rawFormData.amount);
}