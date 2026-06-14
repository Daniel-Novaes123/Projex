import * as z from "zod";
import { useAuth } from "../../services/auth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { RegisterSchema } from "../../schemas/Register";
import Typography from "../../components/Typography";
import { Mail, Lock, Eye, EyeOff, AlertCircle, ClipboardPenLine } from 'lucide-react'
import { useState } from "react";
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom";

type RegisterFormData = z.infer<typeof RegisterSchema>

export const Register = () => {
    const {
        register: registerUser,
        error,
        loading
    } = useAuth()

    const [showPassword, setShowPassword] =
        useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<RegisterFormData>({
        resolver: zodResolver(RegisterSchema)
    })

    const onSubmit = async (
        data: RegisterFormData
    ) => {
        await registerUser(
            data.email,
            data.password
        )
    }

    return (

        <div className="bg-dark-gray flex items-center justify-center min-h-screen ">

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-light-gray flex flex-col gap-6 p-10 border border-graphite-700 rounded-lg w-full max-w-md">
                <div className="flex flex-col items-center text-center mb-2">
                    <img
                        src={logo}
                        alt="Projex"
                        className="h-24 w-auto flex justify-center"
                    />
                </div>

                <Typography
                    variant="title"
                    weight="semibold"
                    className="text-white">Bem vindo! Crie sua conta aqui!</Typography>

                {error && (
                    <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-lg px-3 py-2">
                        <AlertCircle size={14} className="text-red-400 shrink-0" />
                        <span className="text-red-400 text-sm">{error}</span>
                    </div>
                )}

                <div className="flex flex-col gap-1">
                    <span className="text-graphite-300">Email</span>
                    <Input
                        {...register("email")}
                        name="email"
                        type="email"
                        placeholder="Coloque seu email"
                        leftIcon={<Mail size={16} color="gray" />} error={errors.email?.message}
                        autoComplete="new-password"
                        className="text-graphite-300"
                        wrapperClassName="bg-mid-gray" />
                </div>

                <div className="flex flex-col gap-1">
                    <span className="text-graphite-300">Senha</span>
                    <Input
                        {...register("password")}
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Digite sua senha"
                        leftIcon={<Lock size={16} color="gray" />}
                        autoComplete="new-password"
                        rightIcon={
                            <button
                                type="button"
                                className="flex items-center p-0 bg-transparent border-none cursor-pointer"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword
                                    ? (<EyeOff size={16} color="gray" />)
                                    : (<Eye size={16} color="gray" />)}
                            </button>
                        }
                        error={errors.password?.message}
                        wrapperClassName="bg-mid-gray"
                        className="text-graphite-300" />
                </div>

                <Button
                    type="submit"
                    variant="outline"
                    loading={loading}
                    rightIcon={<ClipboardPenLine size={16} color="gray" className="translate-y-0.5" />} >
                    Finalizar
                </Button>
                <div className="text-center">
                    <span className="text-graphite-400 text-sm">
                        Já possui uma conta?{" "}
                    </span>

                    <Link
                        to="/login"
                        className="text-magenta-400 hover:text-magenta-300 transition"
                    >
                        Entrar
                    </Link>
                </div>
            </form>
        </div >
    )
}