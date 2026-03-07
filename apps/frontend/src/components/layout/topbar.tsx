import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function Topbar() {
  return (
    <div className="h-16 border-b bg-white flex items-center justify-between px-6">

      <Input
        placeholder="Search..."
        className="w-64"
      />

      <Avatar>
        <AvatarFallback>VE</AvatarFallback>
      </Avatar>

    </div>
  )
}