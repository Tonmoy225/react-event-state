import './UserCard.css'

export default function UserCard(users){


    return (

        <div className='user'>
            <h3>Name  : {users.user.name}</h3>
            <p>Email : {users.user.email}</p>
            
        </div>

    )
}