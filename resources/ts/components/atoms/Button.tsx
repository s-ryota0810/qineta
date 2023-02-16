import { MouseEventHandler } from "react";

const Button = ({value, onClick}: { value: string | number, onClick: MouseEventHandler<HTMLButtonElement> | undefined }) => {
    return (
        <button onClick={onClick}>{value}</button>
    )
}

export default Button;
