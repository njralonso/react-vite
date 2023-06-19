import useRequest from "../hooks/useRequest"

const Call = ({ url }) => {
    const { data, loading, error } = useRequest(url)

    if (data !== null) {
        const datos = data.data
        console.log(data)
        return (
            <>
                {
                    datos.map((data) => (
                        <li key={data.mal_id}>{data.title}</li>
                    ))
                }
            </>
        )
    }
}

export default Call