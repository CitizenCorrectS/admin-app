import { CardWrapper } from "./card-wrapper";
import { HelpCircleIcon } from "lucide-react";

export const ErrorCard = () => {
    return (
        <CardWrapper
            headerLabel="Oops! Something went wrong!"
            backButtonHref="/auth/login"
            backButtonLabel="Back to Login"
        >
            <div className="w-full flex justify-center items-center">
                <HelpCircleIcon className="text-destructive"/>
            </div>
        </CardWrapper>
    )
}
