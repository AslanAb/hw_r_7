import { useState, useEffect } from "react"
import axios from "axios"
import { IUser } from "../../common/models" 

interface IAuthor {
    id: any
}

const Author = (props: IAuthor) => {

    const [author, setAuthor] = useState<IUser>(Object)
    const getAuthor = async () => {
        try {
            const author = await axios.get("https://jsonplaceholder.typicode.com/users/" + props.id)
            setAuthor(author.data)
            
        } catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        getAuthor()
    }, [props])

    return (
        <div>
            <h4>Author name: {author.name}</h4>
        </div>
    )
}
export default Author