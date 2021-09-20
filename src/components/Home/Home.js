import React from 'react';
import styles from './Home.module.css';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
    
    const pizzas=[
        {
            id:"1",
            name:"Cheese Pizza",
            slug:"cheese-pizza",
            toppings:["mozzarella cheese"],
            image:"https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            price:9.99
        },
        {
            id:"2",
            name:"Meat Feast",
            slug:"meat-feast",
            toppings:["ham","bacon","pepperoni","sausage"],
            image:"https://images.unsplash.com/photo-1584365685547-9a5fb6f3a70c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
            price:15.99
        },
        {
            id:"3",
            name:"Supreme",
            slug:"supreme",
            toppings:["olives","pineapple","ham","pepperoni"],
            image:"https://images.unsplash.com/photo-1585238342024-78d387f4a707?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            price:12.99
        },
        {
            id:"4",
            name:"Pepperoni Pizza",
            slug:"pepperoni-pizza",
            toppings:["olives","pineapple","ham","pepperoni"],
            image:"https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGl6emF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            price:14.99
        },
        {
            id:"5",
            name:"Smoked Sausage Pizza",
            slug:"smoked-sausage-pizza",
            toppings:["sausage","tomato","olive"],
            image:"https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            price:9.99
        },
        {
            id:"6",
            name:"Egg & Sausage Pizza",
            slug:"egg-sausage-pizza",
            toppings:["sausage","egg"],
            image:"https://images.unsplash.com/photo-1581873372796-635b67ca2008?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            price:13.99
        }

    ]
    const [keyword, setKeyword] = useState('');

    const filteredPizzas = pizzas.filter(
        pizza =>
        pizza.name.toLowerCase().includes(keyword) || pizza.toppings.includes(keyword)
    )

    const onInputChange = (e) =>{
        e.preventDefault();
        setKeyword(e.target.value.toLowerCase());
    }

    return (
        <div>
            <div className={styles.searchWrapper}>
                <input placeholder="Search for pizza or toppings..." className={styles.searchBar} onChange={onInputChange} />
            </div>
            <div className={styles.pizzaContainer}>
                {filteredPizzas < 1 ?
                (
                    <div className={styles.nopeContainer}>There is no pizza or topping with that.</div>
                )
                :
                (
                filteredPizzas.map(pizza => {
                    return(
                        <div className={styles.pizzaItem} key={pizza.id}>
                            <Link href={`/${pizza.slug}`}><a className={styles.pizzaImageBox}>
                                <img src={pizza.image} alt={pizza.name} className={styles.pizzaImage} />
                            </a></Link>
                            <div className={styles.pizzaText}>
                                <p className={styles.pizzaHeader}>{pizza.name}</p>
                                <p className={styles.pizzaToppings}>{pizza.toppings.map(topping => topping).join(', ')}</p>
                                <p className={styles.pizzaPrice}>€{pizza.price}</p>
                            </div>
                        </div>
                    )
                    })
                )}
            </div>
        </div>
    )
}
