import Head from 'next/head'
import React, { useState } from 'react'
import Image from 'next/image'
import { SubmitHandler, useForm } from 'react-hook-form'
import useAuth from '../hooks/useAuth'

interface Inputs {
    email: string
    password: string
}

const Login = () => {
    const [login, setLogin] = useState(false)
    const { signUp, signIn } = useAuth()

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
        if (login) {
            await signIn(email, password)
        } else {
            await signUp(email, password)
        }
    }

    return (
        <div
            className="relative flex h-screen w-screen flex-col bg-black md:items-center
                       md:justify-center md:bg-transparent"
        >
            <Head>
                <title>Netflix</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Image
                src="https://rb.gy/p2hphi"
                layout="fill"
                className="-z-10 !hidden opacity-60 sm:!inline"
                objectFit="cover"
            />
            <img
                className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
                src="https://rb.gy/ulxxee"
                width={150}
                height={150}
                alt="netflix"
            />
            <form
                className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6
                           md:mt-0 md:max-w-md md:px-14"
                onSubmit={handleSubmit(onSubmit)}
            >
                <h1 className="text-4xl font-semibold">Sign In</h1>
                <div className="space-y-4">
                    <label className="inline-block w-full">
                        <input
                            className="input"
                            type="email"
                            placeholder="Email"
                            {...register('email', {
                                required: true,
                                pattern:
                                    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                            })}
                        />
                        {errors.email && (
                            <p className="p-1 text-[13px] font-light text-orange-500">
                                Please enter a valid email
                            </p>
                        )}
                    </label>

                    <label className="inline-block w-full">
                        <input
                            className="input"
                            type="password"
                            placeholder="Password"
                            {...register('password', {
                                required: true,
                                minLength: 8,
                                maxLength: 20,
                            })}
                        />
                        {errors.password && (
                            <p className="p-1 text-[13px] font-light text-orange-500">
                                Your password must contain between 8 and 20
                                characters.
                            </p>
                        )}
                    </label>
                </div>
                <button
                    className="w-full rounded bg-[#e50914] py-3 font-semibold"
                    type="submit"
                    onClick={() => setLogin(true)}
                >
                    Sign in
                </button>
                <div className="text-[gray]">
                    New to Netflix?
                    <button className="text-white hover:underline"
                    onClick={() => setLogin(false)}>
                        Sign up now
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Login
