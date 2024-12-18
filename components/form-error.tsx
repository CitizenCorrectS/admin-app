import { AlertCircleIcon } from "lucide-react"

interface FormErrorProps {
    message: string;
}

export const FormError = ({
    message,
}: FormErrorProps) => {
    if(!message) return null;

    return(
        <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive">
            <AlertCircleIcon className="h-4 w-4" />
            <p className="text-sm">{message}</p>
        </div>
    )
}