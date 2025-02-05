/* eslint-disable react/prop-types */
const Button = ({
    children,
    className = "",
    ...props
}) => {
  return (
    <Button className={className} {...props}>
        {children}
    </Button>
  )
}

export default Button