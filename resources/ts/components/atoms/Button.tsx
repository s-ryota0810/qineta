const Button = ({value, onClick}: { value: string | number, onClick: any }) => {
    return (
        <button onClick={onClick}>{value}</button>
    )
}

export default Button;
