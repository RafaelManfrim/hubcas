
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function Dashboard() {
  return (
    <div className="mt-20 flex flex-col gap-8 items-center">
      <strong className="text-2xl">Bem-vindo Dr. ...</strong>
      <div className="flex gap-4 w-full max-w-lg">
        <Input
          className="placeholder:text-gray-400 w-full"
          type="text"
          placeholder="Buscar Paciente"
        />
        <Button className="bg-blue-600 text-white hover:bg-blue-600 hover:brightness-90">
          Buscar
        </Button>
      </div>
      <div className="w-full flex flex-col max-w-lg gap-4 items-center">
        <strong className="text-xl">Receita</strong>
        <div className="flex gap-2 w-full">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Bulário</CardTitle>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-blue-600 text-white hover:bg-blue-600 hover:brightness-90">
                Receitar
              </Button>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Manual</CardTitle>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-blue-600 text-white hover:bg-blue-600 hover:brightness-90">
                Receitar
              </Button>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Cadastrado</CardTitle>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-blue-600 text-white hover:bg-blue-600 hover:brightness-90">
                Receitar
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
