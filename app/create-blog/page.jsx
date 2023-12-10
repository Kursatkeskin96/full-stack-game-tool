import dynamic from 'next/dynamic'
import React from 'react'

const DynamicHeader = dynamic(() => import("../../components/Quill"), {
  ssr: false,
})

export default function CreateBlog() {
  return (
    <div>
      <DynamicHeader />
    </div>
  )
}
