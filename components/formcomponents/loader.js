


export const Loader = ({ color }) => {

    const style = {
        border: `8px solid ${color}`,
        borderColor: `${color} transparent transparent transparent`,
    }

    return (
        <div className="flex justify-center">
            <div className="lds-ring">
                <div style={style}></div>
                <div style={style}></div>
                <div style={style}></div>
                <div style={style}></div>
            </div>
        </div>
    )
}