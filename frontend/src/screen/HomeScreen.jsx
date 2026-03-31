import { useGetProductsQuery } from '../slices/productApiSlice'

function HomeScreen() {
  const { data, error, isLoading } = useGetProductsQuery()

  if (isLoading) return <h1>Loading...</h1>
  if (error) return <h1>Error</h1>

  return (
    <div>
      <h1>Products</h1>
      {data.products.map((p) => (
        <div key={p._id}>{p.name}</div>
      ))}
    </div>
  )
  
}

export default HomeScreen