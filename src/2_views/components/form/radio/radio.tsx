
interface RadioProps {
  
}

import default function Radio(props: RadioProps) {
  return(
    <div>
      <p>{item?.title}</p>
      <div>
        { item?.radio?.forEach((ele, index) => 
          { 
            <div>
              <input className={_className} onChange={handleChange}  type="radio" name={ele.name} value={ele.value} />
              <label for>{ele.text}</label>
            </div>
          }) 
        }
      </div>
    </div>
  )
}