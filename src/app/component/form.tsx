"use client";
import React from 'react'
import { Checkbox, Label, TextInput } from "flowbite-react";
import Link from "next/link";
import CustomButton from './button';

const Form = () => {
  return (
    <form className="flex max-w-md flex-col gap-4 text-left shadow-xl p-5">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email2" value="Your email" />
        </div>
        <TextInput id="email2" type="email" placeholder="name@flowbite.com" required shadow />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password2" value="Your password" />
        </div>
        <TextInput id="password2" type="password" required shadow />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="repeat-password" value="Repeat password" />
        </div>
        <TextInput id="repeat-password" type="password" required shadow />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="agree" />
        <Label htmlFor="agree" className="flex">
          I agree with the&nbsp;
          <Link href="/addData" className="text-cyan-600 hover:underline dark:text-cyan-500">
            terms and conditions
          </Link>
        </Label>
      </div>
      <CustomButton href='/coba' className='btn btn-success w-full text-white' children='Submit' />
    </form>
  )
}

export default Form