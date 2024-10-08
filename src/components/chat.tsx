'use client'

import { useChat } from 'ai/react'
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
import { ScrollArea } from '@/components/ui/scroll-area'

export const Chat = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat',
  })

  return (
    <Card className="w-full max-w-[440px] animate-enter border-2">
      <CardHeader>
        <CardTitle>Core AI</CardTitle>
        <CardDescription>
          Using Vercel SDK to create a chat bot.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[600px] w-full pr-4">
          {messages.map((message) => {
            return (
              <div key={message.id} className="mb-4 flex gap-3 text-sm">
                {message.role === 'user' && (
                  <Avatar className="flex h-8 min-w-8 items-center justify-center rounded-full bg-zinc-50">
                    <AvatarFallback className="text-lg text-black">
                      R
                    </AvatarFallback>
                  </Avatar>
                )}
                {message.role === 'assistant' && (
                  <Avatar className="min-w-7">
                    <AvatarFallback>AI</AvatarFallback>
                    <AvatarImage src={AvatarAI.src} />
                  </Avatar>
                )}
                <p className="leading-relaxed">
                  <span className="block font-bold">
                    {message.role === 'user' ? 'User' : 'AI'}:
                  </span>
                  <span className="text-muted-foreground">
                    {message.content}
                  </span>
                </p>
              </div>
            )
          })}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form className="flex flex-1 gap-2" onSubmit={handleSubmit}>
          <Input
            placeholder="How can I help you?"
            value={input}
            onChange={handleInputChange}
            className="border-2"
          />
          <Button type="submit" className="rounded-[6px] border-none">
            Send
          </Button>
        </form>
      </CardFooter>
    </Card>
  )
}
