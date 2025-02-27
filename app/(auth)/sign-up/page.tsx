"use client"

import AuthForm from '@/components/AuthForm'
import { signUp } from '@/lib/actions/auth'
import { signUpSchema } from '@/lib/validations'
import React from 'react'

const SignUp = () => {
  return (
    <AuthForm 
      type="SIGN_UP"
      schema={signUpSchema}
      defaultValues={{
        fullName: "",
        universityId: 0,
        universityCard: "",
        email: "",
        password: ""
      }}
      onSubmit={signUp}
    />
  )
}

export default SignUp