import React from 'react'
import propTypes from 'prop-types'

export default function TextInputGroup({label,name,value,placeholder,type,onChange,error}) {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input type={type} className="form-control" placeholder={placeholder} name={name}  onChange={onChange} value={value} />
            {error && <span className="invalid-feedback">{error}</span>}
        </div>
    )
}

TextInputGroup.propTypes ={
    name:propTypes.string.isRequired,
    value:propTypes.string.isRequired,
    label:propTypes.string.isRequired,
    placeholder:propTypes.string.isRequired,
    type:propTypes.string.isRequired,
    onChange:propTypes.func.isRequired,
    error:propTypes.string,
}