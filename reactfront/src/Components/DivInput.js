import React, {forwardRef,useEffect,useRef} from 'react'


export default forwardRef(({
    type='text', 
    icon='user', 
    placeholder='',
    name,id,value,className,required,isFocused,handledChange}, ref) =>{

        //const input = ref ? ref :useRef();
        const input = useRef();
        useEffect(()=>{
            if(isFocused){
                input.current.focus();
            }
        },[]);
        return(
            <div className='input-group mb-3'>
                <span className='input-group-text'>
                    <i className={'fa-solid '+icon}></i>
                </span>
                <input type={type} placeholder={placeholder} name={name}> id={id} value={value} className={className} ref={input} require={required} onChange={(e) => handledChange(e)}</input>
            </div>
        )

});

