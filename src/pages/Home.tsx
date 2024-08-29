import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useNavigate } from "react-router-dom"

export function Home() {
  const navigate = useNavigate()
  
  return (
    <div className="my-20 flex flex-col gap-8 items-center">
      <div className="w-full flex flex-col max-w-2xl gap-4 items-center">
        <strong className="text-xl">Home</strong>
        <div className="flex gap-2 w-full">
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-center">Dashboard</CardTitle>
            </CardHeader>
            <CardContent>
            <Button onClick={() => navigate("/dashboard")} className="bg-blue-600 text-white hover:bg-blue-600 hover:brightness-90 w-full">
            Dashboard
          </Button>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-center">Login</CardTitle>
            </CardHeader>
            <CardContent>
            <Button onClick={() => navigate("/login")} className="bg-blue-600 text-white hover:bg-blue-600 hover:brightness-90 w-full">
            Login
          </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
