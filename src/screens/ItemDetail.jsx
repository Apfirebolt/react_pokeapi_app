import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetail = () => {
    const { itemName } = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/item/${itemName}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setItem(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchItem();
    }, [itemName]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h1>{item.name}</h1>
            <p><strong>Cost:</strong> {item.cost}</p>
            <p><strong>Category:</strong> {item.category.name}</p>
            <p><strong>Effect:</strong> {item.effect_entries[0].effect}</p>
            <p><strong>Attributes:</strong> {item.attributes.map(attr => attr.name).join(', ')}</p>
        </div>
    );
};

export default ItemDetail;
