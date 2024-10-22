import { EmailTemplateProps } from '@/types/emailTemplateProps'
import * as React from 'react'

export default function EmailTemplate({name}:EmailTemplateProps) {
  return (
    <>
        <div>
            <p className="text-center p-2 max-w-lg mx-auto">Hello, {name}</p>
        </div>
    </>
  )
}
