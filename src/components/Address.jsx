function Address({Street, state = 'random', zipcode = '41235'}) {

    return (
        <div className="Address componentBox">
            <strong>{Street}</strong> is in {state}, {zipcode}
        </div>
    )
}

export default Address;