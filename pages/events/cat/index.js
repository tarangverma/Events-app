import Image from 'next/image';
import Link from 'next/link';
export default function EventsCatPage({data}) {
    return (
    <div>
       <h1>Events are Here </h1>
       <div>
        {data.map(ev => (
            <Link key={ev.id} href={`/events/${ev.city}/${ev.id}`} passHref legacyBehavior>
        <a>
            <Image src={ev.image} width={300} height={300} alt={ev.title} />
            <h2>{ev.title}</h2>
            <p>{ev.description}</p>
        </a>
        </Link>
        ))}
       </div>
    </div>
    )
}

export async function getStaticPaths() {
    const {events_categories} = await import('/data/data.json')
    const allPaths = events_categories.map((event) => {
        return {
          params: {
            cat: event.id.toString(),
        },
        };
        }); 
    console.log(allPaths);

    return {
    paths: allPaths,
    fallback: false,
    }
    };

export async function getStaticProps(context) {
    console.log(context);
    const id = context?.params.cat;
    const {allEvents} = await import('/data/data.json');
    const data = allEvents.filter((ev) => ev.city === id);
    
    return {
        props: {data}
    }
    
}