import { Post } from "@/components/Post";

function Text({ content, strong }) {
  return strong ? <strong>{ content }</strong> : <p>{ content }</p>;
}

export default function Home() {
  return <>
     <Post 
        title="HMKD spreads across the US"
        content="Hoo Mungo Kok Disease (HMKD) spreads across the US..."
        author="M. Kok, Hoo"
        following={true}
        key={Math.random()}
    />
  </>
 
}
