import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


const AuthenticationPage = () => {
    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <Tabs defaultValue="login" className="w-[400px]">
                <TabsList className="flex justify-center w-full mb-2">
                    <TabsTrigger value="login">Login</TabsTrigger>
                    <TabsTrigger value="register">Criar conta</TabsTrigger>
                </TabsList>
                <TabsContent value="login">
                    <Card>
                        <CardHeader className="flex flex-col items-center justify-center">
                            <CardTitle>Login</CardTitle>
                            <CardDescription>
                                Faça login para continuar.
                            </CardDescription>
                        </CardHeader>
                        {/* <CardContent className="grid gap-6">
                            <div className="grid gap-3">
                                <Label htmlFor="tabs-demo-name">Name</Label>
                                <Input id="tabs-demo-name" defaultValue="Pedro Duarte" />
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="tabs-demo-username">Username</Label>
                                <Input id="tabs-demo-username" defaultValue="@peduarte" />
                            </div>
                        </CardContent> */}
                        <CardFooter className="flex justify-center">
                            <Button className="w-[90%] h-[50px]">Entrar</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="register">
                    <Card>
                        <CardHeader className="flex flex-col items-center justify-center">
                            <CardTitle>Criar conta</CardTitle>
                            <CardDescription>
                                Crie sua conta para continuar.
                            </CardDescription>
                        </CardHeader>
                        {/* <CardContent className="grid gap-6">
                            <div className="grid gap-3">
                                <Label htmlFor="tabs-demo-current">Current password</Label>
                                <Input id="tabs-demo-current" type="password" />
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="tabs-demo-new">New password</Label>
                                <Input id="tabs-demo-new" type="password" />
                            </div>
                        </CardContent> */}
                        <CardFooter className="flex justify-center">
                            <Button className="w-[90%] h-[50px]">Criar conta</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default AuthenticationPage;