import { useState, useEffect } from "react"
import axios from "axios"
import { IComment } from "../../common/models"

interface IAuthor {
    id: any
}

const Comments = (props: IAuthor) => {

    const [comments, setComments] = useState<IComment[]>([])
    const getComments = async () => {
        try {
            const commentsFetch = await axios.get("https://jsonplaceholder.typicode.com/posts/" + props.id + "/comments")
            setComments(commentsFetch.data)
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        getComments()
    }, [props])

    return (
        <div>
            <h4>Comments:</h4>
            {
                comments.map(el => {
                    return (
                        <div className="border" key={el.id}>
                            <h5>{el.name}</h5>
                            <h6>{el.email}</h6>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Comments