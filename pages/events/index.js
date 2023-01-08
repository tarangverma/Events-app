import Image from 'next/image';
import Link from 'next/link';

export default function EventsPage({data}) {
    return (
    <div>
       <h1>Events page</h1>
       <div>
        {data.map((ev) => (
            <Link key={ev.id} href={`/events/${ev.id}`} passHref legacyBehavior>
                <a>
                <Image src={ev.image} width={300} height={300} alt={ev.title}/>
                <h2>{ev.title}</h2>
                </a>
            </Link>
        ))}
        </div>
    </div>
    )
}



export async function getStaticProps() {
    const {events_categories} = await import('/data/data.json');
  

    return {
        props: {
        data : events_categories,
        },
    }
}