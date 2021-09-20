import React from 'react'
import styles from '../styles/Pizza.module.css';
import Head from 'next/head';
import Link from 'next/link';

export default function Pizza({pizza, otherPizzas}) {
    return (
        <div className={styles.container}>
            <Head>
                <title>{pizza.name}</title>
            </Head>
            <div className={styles.pizzaContainer}>
                <div className={styles.pizzaWrapperLeft}>
                    <img src={pizza.image} alt={pizza.name} className={styles.pizzaImage} />
                </div>
                <div className={styles.pizzaWrapperRight}>
                    <div className={styles.pizzaInfo}>
                        <p className={styles.pizzaTitle}>{pizza.name}</p>
                        <p className={styles.pizzaDescription}>{pizza.description}</p>
                        <p className={styles.pizzaPrice}>€{pizza.price}</p>
                        <p className={styles.pizzaToppings}>{pizza.toppings.map(topping => topping).join(', ')}</p>
                    </div>
                    <div className={styles.otherPizzasWrapper}>
                        {otherPizzas.map(otherpizza => {
                            return(
                                <div className={styles.otherPizzas} key={otherpizza.id}>
                                    <Link href={"/" + otherpizza.slug}><a>
                                    <img src={otherpizza.image} alt={otherpizza.name} />
                                    <p>{otherpizza.name}</p>
                                    </a></Link>
                                </div>  
                            )
                        })}
                    </div>
                </div>
            </div>
            <footer className={styles.footer}><a rel="follow" target="_blank" href="https://www.shanekeenan.dev">Made by Cocoa.</a></footer>
        </div>
    )
}

export const getStaticPaths = async () =>{
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
    const paths = pizzas.map(pizza => ({
        params: {slug: `${pizza.slug}`}
    }));
    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async ({params}) =>{
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
    const pizza = pizzas.filter(pizza => pizza.slug.includes(params.slug));
    const otherPizzas = pizzas.filter(pizza => pizza.slug !== params.slug);
    return {
        props: {
            pizza: pizza[0],
            otherPizzas: otherPizzas.sort(() => Math.random() - Math.random()).slice(0, 3),
        }
    }
}