export function Post({ title, content, author, following }) {
    // Check for null pointer references and unhandled exceptions
    if (!title || !content || !author) {
        throw new Error("Post must have title, content, and author");
    }
    // Return a JSX element representing a post
    return (
        <div>
            <h1 style={{marginTop: "10px", fontWeight: "bold", fontSize: "30px"}} className='title'>{title}</h1>
            <p style={{fontStyle: "italic"}} className="content">{content}</p>
            <h3>By: {author}</h3>
                <button> {following ? "UnFollow" : "Follow"} </button>
            <p>{new Date().toDateString()}</p>
        </div>
    );
}