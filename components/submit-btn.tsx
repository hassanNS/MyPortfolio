import React from 'react';
import { useFormStatus } from 'react-dom';
import { FaPaperPlane } from 'react-icons/fa';
export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group flex items-center
      justify-center h-[3rem] w-[8rem] gap-2
      bg-gray-900 text-white rounded-full outline-none focus:scale-110
      hover:scale-110 hover:bg-gray-950 active:scale-105
      dark:bg-white dark:bg-opacity-10 disabled:scale-100 disable:bg-opacity-65 "
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2"></div>
      ) : (
        <>
          Submit
          <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 text-xs opacity-70 transition-all" />{' '}
        </>
      )}
    </button>
  );
}
