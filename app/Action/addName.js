const addData = (name, password) => {
    return (
        {
            type: 'ADD',
            value:
            {
                Name: name,
                Password: password
            }
        }
    )
}

export default addData