import { Post } from "@/components/Post";

function Text({ content, strong }) {
  return strong ? <strong>{ content }</strong> : <p>{ content }</p>;
}

export default function Home() {
  return <div>
  
    <Text content="Hoo Mungo Kok Disease (HMKD) spreads across the US." strong={true}/>
    <Text content="Women who have been exposed to HMKD have reported soreness in the throat." strong={false}/>
    <Text content="Other symptoms to look out for include: lower back pain, fatigue, and shortness of breath." strong={false}/>

    <Post 
        title="HMKD spreads across the US"
        content="Hoo Mungo Kok Disease (HMKD) spreads across the US..."
        author="M. Kok, Hoo"
    />
  </div>
  ;
}
