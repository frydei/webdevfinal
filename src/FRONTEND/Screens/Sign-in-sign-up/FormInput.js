import React from "react";

const FormInput = React.forwardRef((props, ref) => {
    return (
        <div className="form-group f-form-group f-bg d-flex align-items-center"
             style={{"padding": "0px 0px 0px 10px", "borderRadius": "3px", "width": "100%"}}>
            <input className="form-input shadow-none"
                   ref={ref}
                   placeholder={props.placeholder}
                   type={props.type}
                   name={props.name}
                   required
                   style={{"width": "100%"}}

            />

        </div>

    );
});

export default FormInput;