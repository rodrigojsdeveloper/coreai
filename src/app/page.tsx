import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import AvatarAI from '@/assets/avatar-ai.svg'

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-200">
      <Card className="grid h-[700px] w-full max-w-[440px] grid-rows-[min-content_1fr_min-content]">
        <CardHeader>
          <CardTitle>Chat AI</CardTitle>
          <CardDescription>
            Using Vercel SDK to create a chat bot.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-3 text-sm text-slate-600">
            <Avatar className="min-w-7">
              <AvatarFallback>RS</AvatarFallback>
              <AvatarImage src={AvatarAI.src} />
            </Avatar>
            <p className="leading-relaxed">
              <span className="block font-bold text-slate-700">Human:</span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Obcaecati voluptas quis distinctio voluptatum molestiae ex
              delectus totam numquam voluptates at adipisci ducimus facilis,
              alias exercitationem, est incidunt dolorem ratione odit.
            </p>
          </div>
          <div className="flex gap-3 text-sm text-slate-600">
            <Avatar className="min-w-7">
              <AvatarFallback>AI</AvatarFallback>
              <AvatarImage src={AvatarAI.src} />
            </Avatar>
            <p className="leading-relaxed">
              <span className="block font-bold text-slate-700">Human:</span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Obcaecati voluptas quis distinctio voluptatum molestiae ex
              delectus totam numquam voluptates at adipisci ducimus facilis,
              alias exercitationem, est incidunt dolorem ratione odit.
            </p>
          </div>
        </CardContent>
        <CardFooter className="space-x-2">
          <Input placeholder="How can I help you?" />
          <Button type="submit">Send</Button>
        </CardFooter>
      </Card>
    </main>
  )
}
