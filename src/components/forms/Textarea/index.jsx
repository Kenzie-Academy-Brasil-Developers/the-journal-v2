import { forwardRef } from "react"

export const Textarea = forwardRef(({error,...rest}, ref) => {
    return(
        <div>
            <textarea ref={ref} {...rest} />
            {error ? <p>{error.message}</p> : null}
        </div>
    )
})