"use client";

import { CardWrapper } from "./card-wrapper"

import * as z from "zod";
import { LoginSchema } from "@/schemas";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form"

export const LogInForm = () => {
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    });
    return (
        <CardWrapper
        headerLabel="Welcome back"
        backButtonLabel="Don't have an account yet?"
        backButtonHref="/auth/register"
        showSocials
        >
            login form
        </CardWrapper>
    )
}