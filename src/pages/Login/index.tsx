import * as z from "zod";
import { useAuth } from "../../services/auth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { LoginSchema } from "../../schemas/Login";
import Typography from "../../components/Typography";
import { Mail, Lock, Eye, EyeOff, LogIn, AlertCircle } from 'lucide-react'
import { useState } from "react";
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom";

type LoginFormData = z.infer<typeof LoginSchema>

export const Login = () => {
    const { login, error, loading } = useAuth();
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(LoginSchema)
    })

    const onSubmit = (data: LoginFormData) => {
        login(data.email, data.password)
    }


    return (
        <div className="bg-dark-gray flex items-center justify-center min-h-screen p-4">            <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-light-gray flex flex-col gap-4 p-8 border border-graphite-700 rounded-lg w-full max-w-md"
        >
            {/* Header */}
            <div className="flex flex-col items-center text-center mb-4">
                <img
                    src={logo}
                    alt="Projex"
                    className="h-24 w-auto mb-4"
                />

                <Typography
                    variant="title"
                    weight="semibold"
                    className="text-white"
                >
                    Bem-vindo de volta!
                </Typography>

                <Typography
                    variant="caption"
                    className="text-graphite-400 mt-2"
                >
                    Acesse o painel do seu portfólio
                </Typography>
            </div>

            {error && (
                <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-lg px-3 py-2">
                    <AlertCircle size={14} className="text-red-400 shrink-0" />
                    <span className="text-red-400 text-sm">{error}</span>
                </div>
            )}

            {/* Campos */}
            <div className="flex flex-col gap-1">
                <span className="text-graphite-300">Email</span>
                <Input
                    {...register('email')}
                    type="email"
                    placeholder="Coloque seu email"
                    leftIcon={<Mail size={16} color="gray" />}
                    error={errors.email?.message}
                    wrapperClassName="bg-mid-gray"
                    className="text-graphite-300"
                />
            </div>

            <div className="flex flex-col gap-1">
                <span className="text-graphite-300">Senha</span>
                <Input
                    {...register('password')}
                    type={showPassword ? "text" : "password"}
                    placeholder="Coloque sua senha"
                    leftIcon={<Lock size={16} color="gray" />}
                    rightIcon={
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword
                                ? <EyeOff size={16} color="gray" />
                                : <Eye size={16} color="gray" />
                            }
                        </button>
                    }
                    error={errors.password?.message}
                    wrapperClassName="bg-mid-gray"
                    className="text-graphite-300"
                />
            </div>

            <Button
                type="submit"
                variant="outline"
                loading={loading}
                rightIcon={<LogIn size={16} color="gray" />}
            >
                Entrar
            </Button>
            <div className="text-center">
                <span className="text-graphite-400 text-sm">
                    Ainda não possui uma conta?{" "}
                </span>

                <Link
                    to="/register"
                    className="text-magenta-400 hover:text-magenta-300 transition"
                >
                    Criar conta
                </Link>
            </div>
        </form>
        </div >
    )
}