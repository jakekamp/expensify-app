
// HOC higer order component - a componenet that renders another component
// allows you to reuse code
// Render hijacking
// Prop manipulation
// Abstract state



import React from 'react'
import ReactDOM from 'react-dom'



const Info = (props) => (
    <div>
        <h1>the info is: </h1>
        <p>{props.info}</p>
    </div>
)


const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {!props.isAdmin && <p>Please log in as admin to view information</p>}
            {props.isAdmin && <p>this is private info. please don't share.</p>}
            {props.isAdmin && <WrappedComponent {...props} />}
        </div>
    )
}


const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props} />
            ) : (
                <p>Please log in to see clint info</p>
            )}
        </div>
    )
}

const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)

// ReactDOM.render(<AdminInfo isAdmin={true} info="there are the details" />, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={false} info="there are the details" />, document.getElementById('app'))
