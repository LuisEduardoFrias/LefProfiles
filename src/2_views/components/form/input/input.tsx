
interface InputProps {
  
}

import default function Input(props: InputProps) {
  return (
    <div className="container-input" > 
      <label for> {item?.title} </label> 
      <input
        type={item?.type}
        name={item?.name}
        value={item?.value}
        placeholder={item?.placeholder}
        className={_className}
        onChange={handleChange}
        readOnly={item?.readOnly} />
    </div>
  )
}