import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { siteConfig } from "@lib/site-config"
import GoogleSignInButton from "./signin-google"
  
  export function SigninCard() {
    return (
      <Card className="w-[350px] shadow-lg shadow-gray-500">
        <CardHeader>
          <CardTitle>Sing in into {siteConfig.name}</CardTitle>
          <CardDescription>Choose the authentication provider.</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-center">
          <GoogleSignInButton />
        </CardContent>
      </Card>
    )
  }
  