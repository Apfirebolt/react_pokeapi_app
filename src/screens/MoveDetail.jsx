import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MoveDetail = () => {
    const { moveName } = useParams();
    const [move, setMove] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMove = async () => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/move/${moveName}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setMove(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchMove();
    }, [moveName]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h1>{move.name}</h1>
            <p><strong>Accuracy:</strong> {move.accuracy}</p>
            <p><strong>Power:</strong> {move.power}</p>
            <p><strong>PP:</strong> {move.pp}</p>
            <p><strong>Type:</strong> {move.type.name}</p>
            <p><strong>Damage Class:</strong> {move.damage_class.name}</p>
            <p><strong>Effect:</strong> {move.effect_entries[0].effect}</p>
        </div>
    );
};

export default MoveDetail;