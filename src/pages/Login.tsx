import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Input } from "@components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@components/ui/form"

import LogoHubCas from "@assets/logo.png"
import { Button } from "@/components/ui/button"

const schema = z.object({
  email: z.string({
    required_error: "Informe o e-mail do participante",
    invalid_type_error: "Informe o e-mail do participante"
  }).email("Informe um e-mail válido"),
  password: z.string()
})

type SignInSchema = z.infer<typeof schema>

export function Login() {
  // const navigate = useNavigate()
  // const { signIn } = useAuth()

  const form = useForm<SignInSchema>({
    resolver: zodResolver(schema)
  })

  function handleSignIn({ email, password }: SignInSchema) {
    console.log({ email, password })
    // signIn({ password })
  }

  return (
    <div>
      <div className="mx-auto h-svh flex flex-col justify-center items-center max-w-lg p-4">
        <a href="/">
          <img src={LogoHubCas} className="mx-auto w-full max-w-64 mb-8" alt="" />
        </a>
        <Form {...form}>
          <div className="mx-2 w-full">
            <FormField
              control={form.control}
              name="email"
              render={({ field: { ...props } }) => (
                <FormItem className="mb-4">
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input
                      className="placeholder:text-gray-400"
                      type="text"
                      placeholder="E-mail"
                      {...props}
                    />
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.email?.message}
                  </FormMessage>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field: { ...props } }) => (
                <FormItem className="mb-4">
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input
                      className="placeholder:text-gray-400"
                      type="password"
                      placeholder="Senha"
                      {...props}
                    />
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.password?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
          </div>

          <Button onClick={form.handleSubmit(handleSignIn)} className="w-full bg-blue-600 text-white hover:bg-blue-600 hover:brightness-90">
            Entrar
          </Button>
        </Form>
        <a
          className="text-blue-600 font-semibold mt-4 cursor-pointer hover:brightness-90"
        // onClick={() => navigate("/participant/forgot-my-password/")}
        >
          Esqueci Minha Senha
        </a>
      </div>
    </div>
  )
}
