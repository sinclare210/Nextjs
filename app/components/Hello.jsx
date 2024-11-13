"use client"



const Hello = () => {
    async function doing() {
        const response = await fetch("https://jsonplaceholder.typicode.com/albums");
        if(!response.ok) throw new error("failed to fetch data")
            const albums = await response.json()

      
        
    }
     
  return (
    <div>album</div>
  )
}

export default Hello