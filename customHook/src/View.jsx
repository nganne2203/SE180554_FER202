import Details from "./Details";
import useAPI from "./useAPI";

const Views = () => {
    const [data, loading, error] = useAPI("https://68356c13cd78db2058c16e30.mockapi.io/nganmttse180554");
    
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!data || !Array.isArray(data) || data.length === 0) return <div>No data available</div>;
    
    return (
        <>
            {data.map((item) => (
                <div key={item.id}>
                    <Details art={item} />
                </div>
            ))}
        </>
    )
}

export default Views;