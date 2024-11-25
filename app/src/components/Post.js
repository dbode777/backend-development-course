import "./post.css";

export function Post({ title, content, author, following }) {
    if (!title || !content || !author) {
        throw new Error("Title, content, and author are required");
    };

    const button = <button> {following ? "UnFollow" : "Follow"} </button>

    return (
        <div className="card">
            <h1 className="title">{title}</h1>
            <p className="content">{content}</p>
            <h3>By: {author}</h3>
            { button }
            <p>{new Date().toDateString()}</p>
        </div>
    );
}