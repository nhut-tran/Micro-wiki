import React, { useState } from 'react'
import { connect } from 'react-redux'
import { updatePassword } from '../../store/action/userAction'
import { useHistory } from 'react-router-dom'


function Login(props) {
    const [oldPassword, setoldPassword] = useState()
    const [password, setPassword] = useState()
    const [passwordConfirm, setPasswordConfirm] = useState()
    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault()
        props.dispatch(updatePassword({
            oldPassword,
            password, passwordConfirm
        }, history))
    }
    return (
        <form className='form' onSubmit={(e) => handleSubmit(e)}>
            { }
            <div className='form__box'>
                <a className='btn btn-action'
                    onClick={(e) => {
                        handleSubmit(e)
                    }}>Save
                </a>
            </div>
        </form>
    )

}
const mapStateToProps = (state) => {
    return {
        error: state.user.error
    }
}

export default connect(mapStateToProps)(Login)