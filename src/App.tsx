import UserDisplay from "./components/UserDisplay.tsx";
import { useQuery } from 'urql'
import {GetMessagesDocument, GetUsersDocument} from './graphql/generated'


function App() {
    const [results] = useQuery({
        query: GetUsersDocument
    })
    const [messages] = useQuery({
        query: GetMessagesDocument
    })

    return (
        <div className="bg-zinc-800 flex-col h-screen w-full flex items-center justify-center p-4 gap-y-12 overflow-scroll">
            {
                results.data?.users.map((user, i) => <UserDisplay user={user} key={i}/>)
            }
        </div>
    )
}

export default App