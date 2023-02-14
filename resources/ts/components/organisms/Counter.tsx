import { useState } from 'react';
import Button from '~/components/atoms/Button';
import Text from '~/components/atoms/Text';

const Counter = () => {
    const [count, setCount] = useState(0)

    const countText = 'カウント： ' + count

    const upCounter = () => {
        setCount(prevState => prevState + 1)
    }

    const downCounter = () => {
        setCount(prevState => prevState - 1);
    }
    return (
        <>
            <div>
                <Text value={countText} />
            </div>
            <div>
                <Button value="増やす" onClick={upCounter} />
                <Button value="減らす" onClick={downCounter} />
            </div>
        </>
    )
}


export default Counter;
