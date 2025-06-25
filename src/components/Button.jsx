
function Button({
    label,
    color = "primary",
    variant = "solid",
    onClick,
    className,
    ...props
}) {
    return (
        <button
            className={`btn__${color} btn__${variant} ${className}`}
            onClick={onClick}
            {...props}
        >{label}</button>
    )
}

export default Button