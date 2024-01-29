import { useState } from 'react';
import records from '../../records.json';
import './home.css';

export default function Home() {
    const [filter, setFilter] = useState('');

    // Function to get unique titles for dropdown options
    const getUniqueTitles = () => {
        const titles = records.map(data => data.title);
        return Array.from(new Set(titles));
    };

    // Function to filter records based on the title
    const filterRecords = () => {
        if (!filter) return records;
        return records.filter(data => data.title.toLowerCase().includes(filter.toLowerCase()));
    };

    return (
        <section className="home">
            {/* Dropdown select for filtering */}
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option value="">All Titles</option>
                {getUniqueTitles().map((title, index) => (
                    <option key={index} value={title}>{title}</option>
                ))}
            </select>

            {/* Display filtered records */}
            {filterRecords().map(data => (
                <div key={data.id} className='container'>
                    <h1 className="title">{data.title}</h1>
                    <p>{data.description}</p>
                    {data.price && data.price.map(costs => (
                        <h4 key={costs.id}>{costs.cost}</h4>
                    ))}
                </div>
            ))}
        </section>
    );
}
