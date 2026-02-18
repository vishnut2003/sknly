import React, { ReactNode } from 'react'

const PageContentElement = ({
    items,
}: {
    items: {
        type: "h2" | "h3" | "h4" | "p" | "ul" | "ol",
        content: string | ReactNode | (string | ReactNode)[],
    }[],
}) => {
  return (
    <div
        className='space-y-3'
    >
        {items.map((item, index) => {

            if (item.type === "h2") {
                return (
                    <h2
                        className='text-2xl font-extrabold'
                        key={index}
                    >{item.content}</h2>
                )
            }
            
            if (item.type === "h3") {
                return (
                    <h3
                        className='text-lg font-bold'
                        key={index}
                    >{item.content}</h3>
                )
            }
            
            if (item.type === "h4") {
                return (
                    <h4
                        className='text-lg font-bold'
                        key={index}
                    >{item.content}</h4>
                )
            }

            if (item.type === "p") {
                return (
                    <p
                        key={index}
                    >{item.content}</p>
                )
            }

            if ((item.type === "ol" || item.type === "ul") && Array.isArray(item.content)) {
                return (
                    <ul
                        key={index}
                        className={`ml-5 ${item.type === "ul" ? "list-disc" : "list-decimal"}`}
                    >
                        {item.content.map((text, idx) => (
                            <li
                                key={idx}
                            >{text}</li>
                        ))}
                    </ul>
                )
            }

        })}
    </div>
  )
}

export default PageContentElement