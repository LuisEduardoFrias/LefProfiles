
interface SelectProps {
  title:string; 
  name: string;
  options: string;
  _className: string;
}

import default function Select(props: SelectProps) {
  const _options = [];
  
  for(const item in options)
  { 
    const ele = options[item];
    _options.push(<option value={ele.value}>{ele.text}</option>)
  }
  
  return(
    <div className="container-select" >
      <label for>{title}</label> 
      <select name={name} className={_className} onChange={handleChange} >
        <option>select {title}</option>
        {_options}
      </select>
    </div>
  )
}