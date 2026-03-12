import { useState } from "react"
import { PostComposer } from "@/components/post/post-composer"
import { PostPreview } from "@/components/post/post-preview"

export function PostsPage() {

  const [content, setContent] = useState("")
  const [brandName, setBrandName] = useState("")
  const [instagram, setInstagram] = useState(true)
  const [facebook, setFacebook] = useState(false)

  return (

    <div className="grid grid-cols-2 gap-6 max-w-6xl mx-auto">

      <PostComposer
        setContent={setContent}
        setBrandName={setBrandName}
        setInstagram={setInstagram}
        setFacebook={setFacebook}
      />

      <PostPreview
        brandName={brandName}
        content={content}
        instagram={instagram}
        facebook={facebook}
      />

    </div>

  )

}