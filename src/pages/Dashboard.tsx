import { FaClinicMedical } from "react-icons/fa"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Dashboard() {
  return (
    <div className="my-20 flex flex-col gap-8 items-center">
      <strong className="text-2xl flex items-center gap-2">
        <FaClinicMedical className="text-blue-600 text-3xl -mt-2" />
        Bem-vindo Dr. ...
      </strong>
      <div className="flex gap-4 w-full max-w-2xl">
        <Input
          className="placeholder:text-gray-400 w-full"
          type="text"
          placeholder="Buscar Paciente"
        />
        <Button className="bg-blue-600 text-white hover:bg-blue-600 hover:brightness-90">
          Buscar
        </Button>
      </div>
      <div className="w-full flex flex-col max-w-2xl gap-4 items-center">
        <strong className="text-xl">Receita</strong>
        <div className="flex gap-2 w-full">
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-center">Bulário</CardTitle>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-blue-600 text-white hover:bg-blue-600 hover:brightness-90">
                Acessar
              </Button>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-center">Manual</CardTitle>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-blue-600 text-white hover:bg-blue-600 hover:brightness-90">
                Acessar
              </Button>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-center">Cadastrado</CardTitle>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-blue-600 text-white hover:bg-blue-600 hover:brightness-90">
                Acessar
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="w-full flex flex-col max-w-2xl gap-4 items-center">
        <strong className="text-xl">Atestado</strong>
        <div className="flex gap-2 w-full">
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-center">Atestado</CardTitle>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-blue-600 text-white hover:bg-blue-600 hover:brightness-90">
                Acessar
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="w-full flex flex-col max-w-2xl gap-4 items-center">
        <strong className="text-xl">Pedidos de Exames</strong>
        <div className="flex gap-2 w-full">
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-center">CITUSS</CardTitle>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-blue-600 text-white hover:bg-blue-600 hover:brightness-90">
                Acessar
              </Button>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-center">SITUSS</CardTitle>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-blue-600 text-white hover:bg-blue-600 hover:brightness-90">
                Acessar
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="w-full flex flex-col max-w-2xl gap-4 items-center">
        <strong className="text-xl">Relatórios</strong>
        <div className="flex gap-2 w-full">
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-center">CIJRE</CardTitle>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-blue-600 text-white hover:bg-blue-600 hover:brightness-90">
                Acessar
              </Button>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-center">Personalizados</CardTitle>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-blue-600 text-white hover:bg-blue-600 hover:brightness-90">
                Acessar
              </Button>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-center">Modelos</CardTitle>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-blue-600 text-white hover:bg-blue-600 hover:brightness-90">
                Acessar
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="w-full flex flex-col max-w-2xl gap-4 items-center">
        <strong className="text-xl">Resultados de Exames</strong>
        <div className="flex gap-2 w-full">
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-center">Resultados de Exames</CardTitle>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-blue-600 text-white hover:bg-blue-600 hover:brightness-90">
                Acessar
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="w-full flex flex-col max-w-2xl gap-4 items-center">
        <strong className="text-xl">Recomendações</strong>
        <div className="flex gap-2 w-full">
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-center">Retorno</CardTitle>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-blue-600 text-white hover:bg-blue-600 hover:brightness-90">
                Acessar
              </Button>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-center">Personalizadas</CardTitle>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-blue-600 text-white hover:bg-blue-600 hover:brightness-90">
                Acessar
              </Button>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-center">Modelos</CardTitle>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-blue-600 text-white hover:bg-blue-600 hover:brightness-90">
                Acessar
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
