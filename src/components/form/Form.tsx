import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { MdOutlineMarkEmailUnread } from 'react-icons/md';
import * as yup from 'yup';

import Button from '@/components/buttons/Button';

export type ReceiveResumeForm = {
  fname: string;
  lname: string;
  email: string;
};

export const validationSchema = yup
  .object()
  .shape({
    fname: yup.string().trim().required('First name is required'),
    lname: yup.string().trim().required('Last name is required'),
    email: yup.string().required('Email is required').email('Email is invalid'),
  })
  .required();

export const Form = () => {
  const methods = useForm<ReceiveResumeForm>({
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  });
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitSuccessful, isSubmitting, isValid },
    watch,
  } = methods;
  const [error, showError] = useState(false);
  const onSubmit = async (data: ReceiveResumeForm) => {
    showError(false);
    try {
      const response = await fetch('/api/sendgrid', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) showError(true);
    } catch {
      showError(true);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p className='mb-2 text-sm leading-6'>
          Nice to meet you! Please enter your details below so I can send you my
          CV in both <span className='font-semibold'>PDF</span> and{' '}
          <span className='font-semibold'>Word</span> format.
        </p>
        <p className='mb-4 text-sm leading-6'>
          Do you prefer an instant answer or do you need help urgently? Then
          give me a phone call or send a message to +31 (0)6 169 100 79.
        </p>
        <div className='flex flex-col md:flex-row'>
          <div className='md:mr-2'>
            <label
              className='mb-2 block text-base font-medium text-black'
              htmlFor='fname'
            >
              First name
              <span className='ml-1 text-sm text-red-500'>*</span>
            </label>
            <input
              {...register('fname')}
              className={clsx(
                'focus:shadow-outline w-full appearance-none rounded border px-3 py-3 leading-tight text-gray-700 focus:outline-none',
                isSubmitSuccessful && 'opacity-25',
                errors['fname'] && 'border-red-500'
              )}
              type='text'
              required
              disabled={isSubmitSuccessful || isSubmitting}
            />
          </div>
          <div className='md:ml-2'>
            <label
              className='mb-2 block text-base font-medium text-black'
              htmlFor='lname'
            >
              Last name
              <span className='ml-1 text-sm text-red-500'>*</span>
            </label>
            <input
              {...register('lname')}
              className={clsx(
                'focus:shadow-outline w-full appearance-none rounded border px-3 py-3 leading-tight text-gray-700 focus:outline-none',
                isSubmitSuccessful && 'opacity-25',
                errors['lname'] && 'border-red-500'
              )}
              type='text'
              required
              disabled={isSubmitSuccessful || isSubmitting}
            />
          </div>
        </div>

        <label
          className='mt-3 mb-2 block text-base font-medium text-black'
          htmlFor='email'
        >
          Email
          <span className='ml-1 text-sm text-red-500'>*</span>
        </label>
        <input
          {...register('email')}
          className={clsx(
            'focus:shadow-outline w-full appearance-none rounded border px-3 py-3 leading-tight text-gray-700 focus:outline-none',
            isSubmitSuccessful && 'opacity-25',
            errors['email'] && 'border-red-500'
          )}
          type='email'
          required
          disabled={isSubmitSuccessful || isSubmitting}
        />

        <Button
          type='submit'
          className={clsx('mt-6', !isValid && 'opacity-25')}
          variant='dark'
          disabled={!isValid || isSubmitSuccessful || isSubmitting}
          isLoading={isSubmitting}
        >
          <MdOutlineMarkEmailUnread
            size={22}
            className='relative mr-2'
            style={{ marginTop: '0.05rem' }}
          />
          {isSubmitSuccessful && !error
            ? `Thanks ${watch('fname')}. Please check your inbox.`
            : `Send CV${watch('email') ? ` to ${watch('email')}` : ''}`}
        </Button>
        {error && (
          <p className='border-red relative mt-4 block rounded border border-red-500 px-2 py-2 text-center text-sm font-medium leading-6 text-red-500'>
            Oops. Something broke. Please try again later.
          </p>
        )}
      </form>
    </FormProvider>
  );
};
