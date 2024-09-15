export function Post({ title, content, author }) {
    // Return a JSX element representing a post
    return (
        <div>
            <h1 style={{marginTop: "10px", fontWeight: "bold", fontSize: "30px"}} className='title'>{title}</h1>
            <p style={{fontStyle: "italic"}} className="content">{content}</p>
            <h3>{author}</h3>
            <p>{new Date().toDateString()}</p>
        </div>
    );
}