import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Input } from "@components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@components/ui/form"

import LogoHubCas from "@assets/logo.png"

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
    <div className="bg-imobverse-background">
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
                  <FormLabel className="text-white">E-mail do Participante</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-imobverse-input border-0 placeholder:text-gray-400 text-white" 
                      type="text" 
                      placeholder="E-mail do Participante" 
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
                  <FormLabel className="text-white">Senha</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-imobverse-input border-0 placeholder:text-gray-400 text-white" 
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

          {/* <CheckoutButton onClick={form.handleSubmit(handleSignIn)}>
            Entrar
          </CheckoutButton> */}
        </Form>
        {/* <a 
          className="text-imobverse-emphasis font-semibold mt-4 cursor-pointer hover:brightness-90"
          onClick={() => navigate("/participant/forgot-my-password/")}
        >
          Criar / Esqueci Minha Senha
        </a> */}
      </div>
    </div>
  )
}
