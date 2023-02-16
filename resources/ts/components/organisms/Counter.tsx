import { useState } from 'react';
import Button from '~/components/atoms/Button';
import Text from '~/components/atoms/Text';
import axios from 'axios';

const Counter = () => {
    const [count, setCount] = useState(0)

    const countText = 'カウント： ' + count

    const upCounter = () => {
        setCount(prevState => prevState + 1)
    }

    const downCounter = () => {
        setCount(prevState => prevState - 1);
    }

    const getApiStart = () => {
        axios.get('http://localhost:80/api/test')
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
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
            <div>
                <Button value="API実行" onClick={getApiStart} />
            </div>
        </>
    )
}


export default Counter;
